import React, { useState, useMemo } from "react";
import ProductModal from "./ProductModal";
import { allProducts } from "../assets/products";

const ProductsSection = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState([]);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesFilter = filter === "All" || product.category === filter;
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  const openProduct = (product) => {
    setSelectedProduct(product);
    const categoryList = allProducts.filter(p => p.category === product.category);
    setCategoryProducts(categoryList);
  };

  return (
    <div id="products" className="max-w-6xl mx-auto py-16 px-4">
      {/* Section Heading */}
      <div className="flex justify-center mb-10">
        <h2 className="text-4xl font-bold text-white px-6 py-3 rounded-lg shadow-lg bg-gradient-to-r from-teal-500/70 to-teal-700/70 backdrop-blur-md neon-glow-heading">
          Our Products
        </h2>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8 items-center justify-center md:justify-start">
        {["All", "Ultrasound", "Skincare", "Healthcare IT"].map(cat => (
          <button key={cat} onClick={() => setFilter(cat)} className="px-4 py-2 rounded-full border transition backdrop-blur-md shadow-md bg-black/40 text-white border-white/30 hover:bg-black/50 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transform">
            {cat}
          </button>
        ))}

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="ml-auto px-4 py-2 border rounded-lg w-full md:w-64 bg-black/40 text-white placeholder-white/70 backdrop-blur-md shadow-inner focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProducts.length === 0 ? (
          <p className="col-span-full text-center text-white">No products found.</p>
        ) : (
          filteredProducts.map(product => (
            <div key={product.id} onClick={() => openProduct(product)} className="relative bg-black/20 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg transition-transform hover:scale-105 cursor-pointer hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] pulse-neon">
              <div className="overflow-hidden rounded-t-2xl h-64 group">
                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]"/>
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-teal-400 bg-black/40 px-3 py-1 rounded-full backdrop-blur-md shadow-sm">{product.category}</span>
                <h3 className="text-xl font-bold text-white mt-3">{product.name}</h3>
                <ul className="text-white text-sm space-y-1 mt-3">
                  {product.shortSpecs.slice(0,4).map((spec,i)=>(
                    <li key={i} className="flex items-center hover:text-teal-300 transition">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>{spec}
                    </li>
                  ))}
                </ul>
                <button onClick={() => openProduct(product)} className="mt-5 w-full bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white py-2 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition">
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          categoryProducts={categoryProducts}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductsSection;
