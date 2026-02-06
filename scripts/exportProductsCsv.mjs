import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const input = path.join(root, "src", "assets", "products.js");
const out = path.join(root, "products.csv");

const raw = fs.readFileSync(input, "utf8");
const importMap = {};
const importRegex = /import\s+(\w+)\s+from\s+["'](.+?)["'];/g;
let match;
while ((match = importRegex.exec(raw))) {
  importMap[match[1]] = match[2];
}

let body = raw.replace(importRegex, "");
const replaceOutsideQuotes = (input, map) => {
  let outStr = "";
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let buffer = "";
  const flush = () => {
    if (!buffer) return;
    let seg = buffer;
    Object.entries(map).forEach(([k, v]) => {
      const re = new RegExp(`\\b${k}\\b`, "g");
      seg = seg.replace(re, `"${v}"`);
    });
    outStr += seg;
    buffer = "";
  };
  for (let i = 0; i < input.length; i += 1) {
    const ch = input[i];
    const prev = input[i - 1];
    if (!inSingle && !inDouble && !inTemplate) {
      if (ch === "'") { flush(); inSingle = true; outStr += ch; continue; }
      if (ch === '"') { flush(); inDouble = true; outStr += ch; continue; }
      if (ch === "`") { flush(); inTemplate = true; outStr += ch; continue; }
      buffer += ch; continue;
    }
    outStr += ch;
    if (inSingle && ch === "'" && prev !== "\\") inSingle = false;
    if (inDouble && ch === '"' && prev !== "\\") inDouble = false;
    if (inTemplate && ch === "`" && prev !== "\\") inTemplate = false;
  }
  flush();
  return outStr;
};

const map = Object.fromEntries(
  Object.entries(importMap).map(([key, relPath]) => [key, relPath.replace(/\\/g, "/")])
);
body = replaceOutsideQuotes(body, map);
body = body.replace(/export\s+const\s+allProducts\s*=\s*/, "globalThis.allProducts = ");

const context = { globalThis: {} };
vm.createContext(context);
vm.runInContext(body, context);
const products = context.globalThis.allProducts || [];

const csvEscape = (value) => {
  if (value === null || value === undefined) return "";
  const str = String(value).replace(/\r?\n/g, " ");
  if (/[",\n]/.test(str)) return `"${str.replace(/"/g, '""')}"`;
  return str;
};

const toPgArray = (arr) => {
  if (!Array.isArray(arr)) return "{}";
  const items = arr.map((v) => `"${String(v).replace(/"/g, '\\"')}"`);
  return `{${items.join(",")}}`;
};

const header = [
  "id","name","category","slug","metaTitle","metaDescription",
  "keywords","images","imageAlts","shortSpecs","features","specs","fullDetails"
];

const rows = [header.join(",")];
for (const p of products) {
  rows.push(
    [
      p.id,
      p.name,
      p.category,
      p.slug || "",
      p.metaTitle || "",
      p.metaDescription || "",
      toPgArray(p.keywords || []),
      toPgArray(p.images || []),
      toPgArray(p.imageAlts || []),
      toPgArray(p.shortSpecs || []),
      toPgArray(p.features || []),
      p.specs ? JSON.stringify(p.specs) : "{}",
      p.fullDetails || ""
    ].map(csvEscape).join(",")
  );
}

fs.writeFileSync(out, rows.join("\n"), "utf8");
console.log(`Wrote CSV: ${out}`);
