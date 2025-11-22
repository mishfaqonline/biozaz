import React, { useState, useMemo } from "react";

const ProductsSection = ({ products = [], openProduct }) => {
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
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Our Products</h2>

      {/* Filter Buttons & Search */}
      <div className="flex flex-wrap gap-3 mb-8 items-center">
        {["All", "Ultrasound", "Skincare", "HealthCareIT"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              filter === cat
                ? "bg-teal-600 text-white border-teal-600"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="ml-auto px-4 py-2 border rounded-lg w-full md:w-64"
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProducts.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition group"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-xl h-64">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">
                <span className="text-xs font-semibold text-teal-600 bg-teal-100 px-3 py-1 rounded-full">
                  {product.category}
                </span>

                <h3 className="text-xl font-bold text-gray-800 mt-3">{product.name}</h3>

                {/* Preview first 4 specs */}
                <ul className="text-gray-600 text-sm space-y-1 mt-3">
                  {product.shortSpecs.slice(0, 4).map((spec, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                      {spec}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openProduct(product)}
                  className="mt-5 w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg font-semibold transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsSection;
