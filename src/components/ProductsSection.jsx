"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { allProducts } from "../assets/products";
import { getProductSlug } from "../utils/slug";
import { normalizeImageSrc } from "../utils/image";

const ProductsSection = ({ products = allProducts }) => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesFilter = filter === "All" || product.category === filter;
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, search, products]);

  return (
    <div id="products" className="max-w-6xl mx-auto py-16 px-4">
      <div className="flex justify-center mb-10">
        <h2 className="text-4xl font-bold text-slate-900 px-6 py-3 rounded-lg shadow-sm bg-gradient-to-r from-teal-50 via-white to-sky-50 border border-slate-200">
          Our Products
        </h2>
      </div>

      <div className="flex flex-wrap gap-3 mb-8 items-center justify-center md:justify-start">
        {["All", "Ultrasound", "Skincare", "Healthcare IT"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className="px-4 py-2 rounded-full border transition bg-white/70 backdrop-blur-lg text-slate-700 border-white/60 hover:bg-white hover:-translate-y-0.5 transform"
          >
            {cat}
          </button>
        ))}

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="ml-auto px-4 py-2 border rounded-lg w-full md:w-64 bg-white/70 backdrop-blur-lg text-slate-700 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500/40 border-white/60"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProducts.length === 0 ? (
          <p className="col-span-full text-center text-slate-600">No products found.</p>
        ) : (
          filteredProducts.map((product) => {
            const slug = getProductSlug(product);
            const imageSrc = normalizeImageSrc(product.images?.[0]);
            return (
            <div
              key={product.id}
              id={slug}
              className="relative bg-white/70 backdrop-blur-lg border border-white/60 rounded-2xl shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div className="overflow-hidden rounded-t-2xl h-64 group relative">
                <Link href={`/products/${slug}`}>
                  <Image
                    src={imageSrc}
                    alt={product.imageAlts?.[0] || product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </Link>
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-3">{product.name}</h3>
                <ul className="text-slate-600 text-sm space-y-1 mt-3">
                  {(product.shortSpecs || product.short_specs || []).slice(0, 4).map((spec, i) => (
                    <li key={i} className="flex items-center hover:text-slate-800 transition">
                      <span className="w-2 h-2 bg-sky-600 rounded-full mr-2"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/products/${slug}`}
                  className="mt-5 w-full bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 text-white py-2 rounded-2xl font-semibold shadow-sm transition inline-flex items-center justify-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          );
        })
        )}
      </div>
    </div>
  );
};

export default ProductsSection;
