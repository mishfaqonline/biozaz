import { getProductSlug } from "../utils/slug";
import { createSupabaseServerClient } from "../utils/supabaseServer";

export default async function sitemap() {
  const baseUrl = "https://biozaz.com";
  const supabase = createSupabaseServerClient();
  const { data: products = [] } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: true });

  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/contact"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8
  }));

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${getProductSlug(product)}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7
  }));

  return [...staticRoutes, ...productRoutes];
}
