export const generateMetaTitle = (product) => {
  if (!product.name || !product.category) return "";
  return `${product.name} | ${product.category} – Biozaz`;
};

export const generateMetaDescription = (product, maxChars = 155) => {
  const source = product.full_details?.trim() || product.short_specs?.join(", ") || "";
  if (!source) return "";
  let desc = `${product.name}: ${source}`;
  if (desc.length > maxChars) desc = desc.slice(0, maxChars - 3) + "...";
  return desc;
};

export const generateKeywords = (product) => {
  const specsKeys = product.specs ? Object.keys(product.specs) : [];
  const rawKeywords = [
    ...(product.short_specs || []),
    ...(product.features || []),
    ...specsKeys,
    product.name,
    product.category
  ];
  const uniqueKeywords = [...new Set(rawKeywords.map((k) => k.toString().trim()))];
  return uniqueKeywords.slice(0, 15).join(", ");
};

export const generateSlug = (name) => {
  if (!name) return "";
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export const generateImageAlts = (product) => {
  if (!product.images || product.images.length === 0) return [];
  return product.images.map((_, i) => {
    const feature = product.features?.[i] || "";
    return `${product.name}${feature ? " – " + feature : ""}`;
  });
};

export const generateSEO = (product) => {
  return {
    meta_title: generateMetaTitle(product),
    meta_description: generateMetaDescription(product),
    keywords: generateKeywords(product),
    slug: generateSlug(product.name),
    image_alts: generateImageAlts(product)
  };
};
