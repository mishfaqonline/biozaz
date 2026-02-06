export const getProductSlug = (product) => {
  if (!product) return "";
  if (product.slug) return product.slug;
  if (product.id) return `product-${product.id}`;
  return "";
};

export const normalizeSlug = (value) => {
  if (!value) return "";
  return decodeURIComponent(String(value)).trim().toLowerCase();
};
