import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createClient } from "@supabase/supabase-js";
import { generateSEO } from "../src/lib/generateSEO.js";
import { toDbProduct } from "../src/utils/productMap.js";

const root = process.cwd();

const loadEnv = () => {
  const envPath = path.join(root, ".env.local");
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    process.env[key] = value;
  }
};

const parseProducts = () => {
  const filePath = path.join(root, "src", "assets", "products.js");
  const raw = fs.readFileSync(filePath, "utf8");
  const importMap = {};
  const importRegex = /import\s+(\w+)\s+from\s+["'](.+?)["'];/g;
  let match;
  while ((match = importRegex.exec(raw))) {
    importMap[match[1]] = match[2];
  }
  let body = raw.replace(importRegex, "");

  const replaceOutsideQuotes = (input, map) => {
    let out = "";
    let inSingle = false;
    let inDouble = false;
    let inTemplate = false;
    let buffer = "";
    const flushBuffer = () => {
      if (!buffer) return;
      let segment = buffer;
      Object.entries(map).forEach(([key, value]) => {
        const re = new RegExp(`\\b${key}\\b`, "g");
        segment = segment.replace(re, `"${value}"`);
      });
      out += segment;
      buffer = "";
    };
    for (let i = 0; i < input.length; i += 1) {
      const ch = input[i];
      const prev = input[i - 1];
      if (!inSingle && !inDouble && !inTemplate) {
        if (ch === "'") { flushBuffer(); inSingle = true; out += ch; continue; }
        if (ch === '"') { flushBuffer(); inDouble = true; out += ch; continue; }
        if (ch === "`") { flushBuffer(); inTemplate = true; out += ch; continue; }
        buffer += ch; continue;
      }
      out += ch;
      if (inSingle && ch === "'" && prev !== "\\") inSingle = false;
      if (inDouble && ch === '"' && prev !== "\\") inDouble = false;
      if (inTemplate && ch === "`" && prev !== "\\") inTemplate = false;
    }
    flushBuffer();
    return out;
  };

  const map = Object.fromEntries(
    Object.entries(importMap).map(([key, relPath]) => [key, relPath.replace(/\\/g, "/")])
  );
  body = replaceOutsideQuotes(body, map);
  body = body.replace(/export\s+const\s+allProducts\s*=\s*/, "globalThis.allProducts = ");

  const context = { globalThis: {} };
  vm.createContext(context);
  vm.runInContext(body, context);
  return context.globalThis.allProducts || [];
};

const main = async () => {
  loadEnv();
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !service) {
    console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local");
    process.exit(1);
  }
  const supabase = createClient(url, service);
  const localProducts = parseProducts();

  for (const p of localProducts) {
    const dbProduct = toDbProduct(p);
    const seo = generateSEO(dbProduct);
    const updates = {
      short_specs: dbProduct.short_specs,
      features: dbProduct.features,
      specs: dbProduct.specs,
      full_details: dbProduct.full_details,
      image_alts: seo.image_alts
    };
    const { error } = await supabase.from("products").update(updates).eq("id", p.id);
    if (error) {
      console.error(`Update failed for ${p.id}:`, error.message);
    } else {
      console.log(`Updated ${p.id}`);
    }
  }
};

main();
