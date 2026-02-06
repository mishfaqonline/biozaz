import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

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

const resolveImagePath = (relPath) => {
  const cleaned = relPath.replace(/^\.\//, "");
  return path.join(root, "src", "assets", cleaned);
};

const uploadOne = async (supabase, product, img) => {
  if (!img || img.startsWith("http")) return img;
  const localPath = resolveImagePath(img);
  if (!fs.existsSync(localPath)) return img;
  const ext = path.extname(localPath) || ".jpg";
  const fileName = `${product.slug || product.id}-${path.basename(localPath, ext)}${ext}`;
  const filePath = `products/${fileName}`;
  const file = fs.readFileSync(localPath);
  const { error: uploadError } = await supabase.storage
    .from("product-images")
    .upload(filePath, file, { upsert: true, cacheControl: "3600" });
  if (uploadError) {
    console.error("Upload failed", uploadError.message);
    return img;
  }
  const { data } = supabase.storage.from("product-images").getPublicUrl(filePath);
  return data.publicUrl;
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
  const { data: products = [], error } = await supabase.from("products").select("*");
  if (error) {
    console.error("Fetch failed:", error.message);
    process.exit(1);
  }

  for (const product of products) {
    const images = Array.isArray(product.images) ? product.images : [];
    const uploaded = [];
    for (const img of images) {
      uploaded.push(await uploadOne(supabase, product, img));
    }
    const { error: updateError } = await supabase
      .from("products")
      .update({ images: uploaded })
      .eq("id", product.id);
    if (updateError) {
      console.error("Update failed:", updateError.message);
    } else {
      console.log(`Updated product ${product.id}`);
    }
  }
};

main();
