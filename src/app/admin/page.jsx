"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { slugify } from "../../utils/slugify";

const emptyProduct = {
  id: "",
  name: "",
  category: "",
  slug: "",
  metaTitle: "",
  metaDescription: "",
  keywords: [],
  images: [],
  imageAlts: [],
  shortSpecs: [],
  features: [],
  specs: {},
  fullDetails: ""
};

export default function AdminPage() {
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(emptyProduct);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [specsText, setSpecsText] = useState("{}");

  const autoFillSeo = () => {
    const name = form.name || "";
    const category = form.category || "Product";

    const generateSlug = (value) => {
      if (!value) return "";
      return value
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
    };

    const generateMetaTitle = () => {
      if (!name || !category) return "";
      return `${name} | ${category} – Biozaz`;
    };

    const generateMetaDescription = () => {
      const source = (form.fullDetails || "").trim() || (form.shortSpecs || []).join(", ");
      if (!source) return "";
      let desc = `${name}: ${source}`;
      if (desc.length > 155) desc = `${desc.slice(0, 152)}...`;
      return desc;
    };

    const specsKeys = (() => {
      try {
        return specsText ? Object.keys(JSON.parse(specsText)) : [];
      } catch {
        return [];
      }
    })();

    const generateKeywords = () => {
      const raw = [
        ...(form.shortSpecs || []),
        ...(form.features || []),
        ...specsKeys,
        name,
        category
      ];
      const unique = [...new Set(raw.map((k) => String(k).trim()).filter(Boolean))];
      return unique.slice(0, 15);
    };

    const generateImageAlts = () => {
      const images = form.images || [];
      if (!images.length) return [];
      return images.map((_, i) => {
        const feature = form.features?.[i] || "";
        return `${name}${feature ? " – " + feature : ` image ${i + 1}`}`;
      });
    };

    const slug = form.slug || generateSlug(name);
    const metaTitle = form.metaTitle || generateMetaTitle();
    const metaDescription = form.metaDescription || generateMetaDescription();
    const keywords = form.keywords?.length ? form.keywords : generateKeywords();
    const imageAlts = form.imageAlts?.length ? form.imageAlts : generateImageAlts();

    setForm((prev) => ({
      ...prev,
      slug,
      metaTitle,
      metaDescription,
      keywords,
      imageAlts
    }));
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const normalizeForm = (p) => ({
    ...p,
    metaTitle: p.metaTitle ?? p.meta_title ?? "",
    metaDescription: p.metaDescription ?? p.meta_description ?? "",
    imageAlts: p.imageAlts ?? p.image_alts ?? [],
    shortSpecs: p.shortSpecs ?? p.short_specs ?? [],
    features: p.features ?? p.features ?? [],
    keywords: p.keywords ?? p.keywords ?? [],
    fullDetails: p.fullDetails ?? p.full_details ?? "",
    images: p.images ?? []
  });

  const loadProducts = async () => {
    const res = await fetch("/api/products");
    const json = await res.json();
    setProducts((json.data || []).map(normalizeForm));
  };

  useEffect(() => {
    if (session) loadProducts();
  }, [session]);

  const login = async (e) => {
    e.preventDefault();
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  const saveProduct = async () => {
    if (!session?.access_token) return;
    setLoading(true);
    setError("");
    let specsParsed = {};
    try {
      specsParsed = specsText ? JSON.parse(specsText) : {};
    } catch (e) {
      setError("Specs must be valid JSON.");
      setLoading(false);
      return;
    }

    const payload = {
      ...form,
      specs: specsParsed,
      keywords: Array.isArray(form.keywords) ? form.keywords : [],
      images: Array.isArray(form.images) ? form.images : [],
      imageAlts: Array.isArray(form.imageAlts) ? form.imageAlts : [],
      shortSpecs: Array.isArray(form.shortSpecs) ? form.shortSpecs : [],
      features: Array.isArray(form.features) ? form.features : []
    };

    const method = form.id ? "PUT" : "POST";
    const res = await fetch("/api/products", {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.access_token}`
      },
      body: JSON.stringify(payload)
    });
    const json = await res.json();
    if (json.error) {
      setError(json.error);
      setLoading(false);
      return;
    }
    setForm(emptyProduct);
    setSpecsText("{}");
    await loadProducts();
    setLoading(false);
  };

  const deleteProduct = async (id) => {
    if (!session?.access_token) return;
    setLoading(true);
    await fetch(`/api/products?id=${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${session.access_token}` }
    });
    await loadProducts();
    setLoading(false);
  };

  const handleUpload = async (file) => {
    if (!file) return;
    setLoading(true);
    setError("");
    try {
      const ext = file.name.split(".").pop();
      const filePath = `products/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const { error: uploadError } = await supabase.storage
        .from("product-images")
        .upload(filePath, file, { cacheControl: "3600", upsert: false });

      if (uploadError) {
        setError(uploadError.message);
        setLoading(false);
        return;
      }

      const { data } = supabase.storage.from("product-images").getPublicUrl(filePath);
      const url = data.publicUrl;
      setForm((prev) => ({ ...prev, images: [...prev.images, url] }));
    } catch (e) {
      setError("Upload failed.");
    }
    setLoading(false);
  };

  if (!session) {
    return (
      <div className="max-w-md mx-auto py-20 px-4">
        <h1 className="text-3xl font-bold mb-6 text-slate-900">Admin Login</h1>
        <form onSubmit={login} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-sky-700 text-white py-2 rounded-lg">
            Sign In
          </button>
          {error && <p className="text-red-600 text-sm">{error}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-slate-900">Admin Products</h1>
        <button onClick={logout} className="text-slate-600 underline">Logout</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/70 border border-white/60 rounded-xl p-4">
            <h2 className="text-xl font-semibold mb-4">Add / Edit Product</h2>
            <div className="space-y-3">
            <input
              type="text"
              placeholder="ID (number)"
              className="w-full border rounded-lg px-3 py-2"
              value={form.id}
              onChange={(e) => setForm({ ...form, id: Number(e.target.value) || "" })}
            />
            <input
              type="text"
              placeholder="Name"
              className="w-full border rounded-lg px-3 py-2"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Category"
              className="w-full border rounded-lg px-3 py-2"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            />
            <input
              type="text"
              placeholder="Slug"
              className="w-full border rounded-lg px-3 py-2"
              value={form.slug}
              onChange={(e) => setForm({ ...form, slug: e.target.value })}
            />
            <button
              type="button"
              onClick={() => setForm({ ...form, slug: slugify(form.name) })}
              className="text-sm text-sky-700 underline"
            >
              Auto-generate slug from name
            </button>
            <button
              type="button"
              onClick={autoFillSeo}
              className="text-sm text-teal-700 underline"
            >
              Auto-generate SEO
            </button>
            <textarea
              placeholder="Meta Description"
              className="w-full border rounded-lg px-3 py-2"
              rows={3}
              value={form.metaDescription}
              onChange={(e) => setForm({ ...form, metaDescription: e.target.value })}
            />
            <textarea
              placeholder="Full Details"
              className="w-full border rounded-lg px-3 py-2"
              rows={3}
              value={form.fullDetails}
              onChange={(e) => setForm({ ...form, fullDetails: e.target.value })}
            />
            <div className="space-y-2">
              <label className="text-sm text-slate-600">Upload Product Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleUpload(e.target.files?.[0])}
                className="w-full border rounded-lg px-3 py-2"
              />
              <label className="text-sm text-slate-600">Images (comma-separated URLs)</label>
              <textarea
                className="w-full border rounded-lg px-3 py-2"
                rows={2}
                value={form.images.join(",")}
                onChange={(e) =>
                  setForm({
                    ...form,
                    images: e.target.value
                      .split(",")
                      .map((s) => s.trim())
                      .filter(Boolean)
                  })
                }
              />
            </div>

            <textarea
              placeholder="Image Alts (comma-separated)"
              className="w-full border rounded-lg px-3 py-2"
              rows={2}
              value={form.imageAlts.join(",")}
              onChange={(e) =>
                setForm({
                  ...form,
                  imageAlts: e.target.value
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean)
                })
              }
            />

            <textarea
              placeholder="Short Specs (comma-separated)"
              className="w-full border rounded-lg px-3 py-2"
              rows={2}
              value={form.shortSpecs.join(",")}
              onChange={(e) =>
                setForm({
                  ...form,
                  shortSpecs: e.target.value
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean)
                })
              }
            />

            <textarea
              placeholder="Features (comma-separated)"
              className="w-full border rounded-lg px-3 py-2"
              rows={3}
              value={form.features.join(",")}
              onChange={(e) =>
                setForm({
                  ...form,
                  features: e.target.value
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean)
                })
              }
            />

            <textarea
              placeholder="Keywords (comma-separated)"
              className="w-full border rounded-lg px-3 py-2"
              rows={2}
              value={form.keywords.join(",")}
              onChange={(e) =>
                setForm({
                  ...form,
                  keywords: e.target.value
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean)
                })
              }
            />

            <textarea
              placeholder="Specs JSON"
              className="w-full border rounded-lg px-3 py-2"
              rows={4}
              value={specsText}
              onChange={(e) => setSpecsText(e.target.value)}
            />
            <button
              onClick={saveProduct}
              className="w-full bg-teal-600 text-white py-2 rounded-lg disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Product"}
            </button>
            {error && <p className="text-red-600 text-sm">{error}</p>}
          </div>
        </div>

        <div className="bg-white/70 border border-white/60 rounded-xl p-4">
          <h2 className="text-xl font-semibold mb-4">Products</h2>
          <div className="space-y-3 max-h-[70vh] overflow-auto">
            {products.map((p) => (
              <div key={p.id} className="border rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <strong>{p.name}</strong>
                  <button
                    onClick={() => deleteProduct(p.id)}
                    className="text-red-600 text-sm"
                    disabled={loading}
                  >
                    Delete
                  </button>
                </div>
                <p className="text-sm text-slate-500">{p.category}</p>
                <div className="mt-2 flex gap-2">
                  <button
                    onClick={() => {
                      const normalized = normalizeForm(p);
                      setForm(normalized);
                      setSpecsText(JSON.stringify(normalized.specs || {}, null, 2));
                    }}
                    className="text-sky-700 text-sm underline"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
