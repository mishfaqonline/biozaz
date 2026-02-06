const pick = (obj, keys) =>
  keys.reduce((acc, key) => {
    if (obj[key] !== undefined) acc[key] = obj[key];
    return acc;
  }, {});

export const toDbProduct = (input) => {
  const p = input || {};
  const camel = pick(p, [
    "id",
    "name",
    "category",
    "slug",
    "metaTitle",
    "metaDescription",
    "keywords",
    "images",
    "imageAlts",
    "shortSpecs",
    "features",
    "specs",
    "fullDetails"
  ]);

  const snake = pick(p, [
    "id",
    "name",
    "category",
    "slug",
    "meta_title",
    "meta_description",
    "keywords",
    "images",
    "image_alts",
    "short_specs",
    "features",
    "specs",
    "full_details"
  ]);

  const merged = {
    id: camel.id ?? snake.id,
    name: camel.name ?? snake.name,
    category: camel.category ?? snake.category,
    slug: camel.slug ?? snake.slug,
    meta_title: camel.metaTitle ?? snake.meta_title,
    meta_description: camel.metaDescription ?? snake.meta_description,
    keywords: camel.keywords ?? snake.keywords ?? [],
    images: camel.images ?? snake.images ?? [],
    image_alts: camel.imageAlts ?? snake.image_alts ?? [],
    short_specs: camel.shortSpecs ?? snake.short_specs ?? [],
    features: camel.features ?? snake.features ?? [],
    specs: camel.specs ?? snake.specs ?? {},
    full_details: camel.fullDetails ?? snake.full_details ?? ""
  };

  return merged;
};

const parsePgArray = (value) => {
  if (Array.isArray(value)) return value;
  if (typeof value !== "string") return [];
  const trimmed = value.trim();
  if (!trimmed.startsWith("{") || !trimmed.endsWith("}")) return [];
  const inner = trimmed.slice(1, -1);
  if (!inner) return [];
  return inner
    .split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/)
    .map((v) => v.replace(/^"|"$/g, "").replace(/\\"/g, '"'));
};

export const fromDbProduct = (row) => {
  if (!row) return row;
  return {
    ...row,
    metaTitle: row.meta_title,
    metaDescription: row.meta_description,
    imageAlts: parsePgArray(row.image_alts),
    shortSpecs: parsePgArray(row.short_specs),
    features: parsePgArray(row.features),
    keywords: parsePgArray(row.keywords),
    images: parsePgArray(row.images),
    fullDetails: row.full_details
  };
};
