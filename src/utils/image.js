export const normalizeImageSrc = (value) => {
  if (!value) return "/logotm2.svg";
  if (typeof value !== "string") return "/logotm2.svg";
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  if (value.startsWith("/")) return value;
  return "/logotm2.svg";
};
