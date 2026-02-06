import ProductsSection from "../../components/ProductsSection";
import { getProductSlug } from "../../utils/slug";
import { fromDbProduct } from "../../utils/productMap";
import { createSupabaseServerClient } from "../../utils/supabaseServer";

export const metadata = {
  title: "Products",
  description:
    "Explore Biozaz products: ultrasound systems, skincare devices, PACS & DICOM viewer solutions, and healthcare IT.",
  alternates: { canonical: "https://biozaz.com/products" }
};

const normalizeUrl = (url) => {
  if (!url) return undefined;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/")) return `https://biozaz.com${url}`;
  return `https://biozaz.com/${url}`;
};

const productsItemList = (products) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Biozaz Products",
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `https://biozaz.com/products/${getProductSlug(product)}`,
    item: {
      "@type": "Product",
      name: product.name,
      description: product.metaDescription || product.fullDetails,
      image: normalizeUrl(product.images?.[0]),
      brand: {
        "@type": "Brand",
        name: "Biozaz"
      },
      category: product.category
    }
  }))
});

export default async function Page() {
  const supabase = createSupabaseServerClient();
  const products = supabase
    ? (await supabase.from("products").select("*").order("id", { ascending: true })).data || []
    : [];

  const normalized = products.map(fromDbProduct);

  return (
    <div className="pt-[40px]">
      <ProductsSection products={normalized} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsItemList(normalized)) }}
      />
    </div>
  );
}
