import React, { useEffect, useCallback } from "react";

function ProductModal({ product, onClose }) {
useEffect(() => {
// Prevent background scroll
document.body.style.overflow = "hidden";
return () => {
document.body.style.overflow = "auto";
};
}, []);

const handleClose = useCallback(() => onClose(), [onClose]);

if (!product) return null;

return ( <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4"> <div className="bg-white w-full max-w-5xl rounded-xl shadow-xl overflow-y-auto max-h-[90vh] p-6 animate-fadeIn">

```
    {/* Close Button */}
    <button
      onClick={handleClose}
      className="float-right text-gray-500 hover:text-black text-2xl font-bold"
    >
      ✖
    </button>

    {/* Product Images */}
    <div className="flex space-x-3 overflow-x-auto pb-3 mt-2">
      {product.images.map((img, i) => (
        <img
          key={i}
          src={img}
          loading="lazy"
          className="h-52 object-contain rounded-lg border cursor-pointer hover:scale-105 transition"
        />
      ))}
    </div>

    <h2 className="text-3xl font-bold mt-4 text-gray-800">{product.name}</h2>

    <p className="text-gray-700 mt-3">{product.fullDetails}</p>

    {/* Technical Specifications */}
    <h3 className="text-xl font-semibold mt-6">Technical Specifications</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 text-gray-700">
      {Object.entries(product.specs).map(([key, value]) => (
        <div key={key} className="bg-gray-100 p-3 rounded-lg">
          <strong className="capitalize">{key}:</strong> {value}
        </div>
      ))}
    </div>

    {/* Features & Functions */}
    <h3 className="text-xl font-semibold mt-6">Features & Functions</h3>
    <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2">
      {product.features.map((f, i) => (
        <li key={i}>{f}</li>
      ))}
    </ul>

    {/* Action Buttons */}
    <div className="flex flex-col md:flex-row gap-3 mt-6">
      <button
        onClick={handleClose}
        className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold transition"
      >
        Close
      </button>
      <a
        href={`https://wa.me/923364446339?text=Hello, I'm interested in ${encodeURIComponent(
          product.name
        )}`}
        target="_blank"
        rel="noreferrer"
        className="flex-1 bg-teal-600 hover:bg-teal-700 text-white text-center py-3 rounded-lg font-semibold transition"
      >
        Inquire on WhatsApp
      </a>
    </div>
  </div>
</div>
);
}

export default React.memo(ProductModal);
