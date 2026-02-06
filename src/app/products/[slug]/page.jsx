import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProductSlug, normalizeSlug } from "../../../utils/slug";
import { normalizeImageSrc } from "../../../utils/image";
import ProductPdfButton from "../../../components/ProductPdfButton";
import ProductQrCode from "../../../components/ProductQrCode";
import { createSupabaseServerClient } from "../../../utils/supabaseServer";
import { fromDbProduct } from "../../../utils/productMap";

const findProduct = async (slug) => {
  const supabase = createSupabaseServerClient();
  const target = normalizeSlug(slug);
  if (!supabase) return null;
  const { data } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: true });
  const found = (data || []).find((p) => normalizeSlug(getProductSlug(p)) === target);
  return fromDbProduct(found);
};

const normalizeUrl = (url) => {
  if (!url) return undefined;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/")) return `https://biozaz.com${url}`;
  return `https://biozaz.com/${url}`;
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await findProduct(slug);
  if (!product) return {};

  const title = product.metaTitle || `${product.name} | Biozaz`;
  const description = product.metaDescription || product.fullDetails;
  const url = `https://biozaz.com/products/${getProductSlug(product)}`;
  const image = normalizeUrl(product.images?.[0]?.src || product.images?.[0] || "/logotm2.svg");

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Biozaz",
      images: [{ url: image, alt: product.name }],
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await findProduct(slug);
  if (!product) notFound();

  const imageSrc = normalizeImageSrc(product.images?.[0]);
  const productUrl = `https://biozaz.com/products/${getProductSlug(product)}`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.metaDescription || product.fullDetails,
    image: normalizeUrl(imageSrc),
    brand: { "@type": "Brand", name: "Biozaz" },
    category: product.category,
    sku: String(product.id),
    url: productUrl
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://biozaz.com/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://biozaz.com/products"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: productUrl
      }
    ]
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <nav className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-sky-700">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-sky-700">Products</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white/70 backdrop-blur-lg border border-white/60 rounded-2xl p-6 shadow-sm">
          {imageSrc && (
            <div className="relative w-full h-80">
              <Image
                src={imageSrc}
                alt={product.imageAlts?.[0] || product.name}
                className="object-contain rounded-xl"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}
          <div className="mt-6">
            <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">
              {product.name}
            </h1>
            <p className="text-slate-600 mt-4">{product.metaDescription || product.fullDetails}</p>
            <a
              href={`https://wa.me/923364446339?text=Hello, I'm interested in ${encodeURIComponent(
                product.name
              )}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 text-white px-6 py-3 rounded-xl font-semibold shadow-sm transition"
            >
              Get Quote
            </a>
            <ProductPdfButton product={product} />
            <ProductQrCode url={productUrl} />
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-lg border border-white/60 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Features & Functions</h2>
          <ul className="text-slate-700 space-y-2 mb-6">
            {product.features?.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mb-3">Technical Specs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-700 mb-6">
            {product.specs &&
              Object.entries(product.specs).map(([key, value]) => (
                <div key={key}>
                  <strong className="text-slate-900 capitalize">{key}:</strong> {value}
                </div>
              ))}
          </div>

          <h2 className="text-xl font-bold text-slate-900 mb-3">Full Details</h2>
          <p className="text-slate-700">{product.fullDetails}</p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </section>
  );
}
