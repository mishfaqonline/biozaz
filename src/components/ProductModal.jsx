import React, { useEffect, useCallback } from "react";

function ProductModal({ product, onClose }) {
useEffect(() => {
document.body.style.overflow = "hidden";
return () => { document.body.style.overflow = "auto"; };
}, []);

const handleClose = useCallback(() => onClose(), [onClose]);

if (!product) return null;

return ( <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"> <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 w-full max-w-6xl rounded-3xl shadow-[0_0_50px_rgba(0,255,255,0.2)] flex flex-col md:flex-row gap-6 p-6 max-h-[90vh] transition-all">

    {/* Neon Close Button */}
    <button
      onClick={handleClose}
      className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-gray-900/90 text-teal-400 hover:text-white hover:bg-gray-900 shadow-[0_0_20px_rgba(0,255,255,0.6)] text-3xl font-bold transition z-50"
    >
      ×
    </button>

    {/* Left: Image + Features + Buttons */}
    <div className="flex-1 flex flex-col items-center overflow-hidden">
      <img
        src={product.images[0]}
        alt={product.name}
        className="rounded-3xl shadow-[0_0_30px_rgba(0,255,255,0.4)] object-contain max-h-[50vh] hover:scale-105 transition-transform duration-300"
      />

      {/* Action Buttons under image */}
      <div className="flex flex-col md:flex-row gap-4 mt-4 w-full">
        <button
          onClick={handleClose}
          className="flex-1 bg-gray-900/80 text-teal-400 hover:text-white py-3 rounded-2xl font-semibold shadow-[0_0_10px_rgba(0,255,255,0.4)] hover:shadow-[0_0_20px_rgba(0,255,255,0.7)] transition"
        >
          Close
        </button>
        <a
          href={`https://wa.me/923364446339?text=Hello, I'm interested in ${encodeURIComponent(product.name)}`}
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-gradient-to-r from-teal-500/80 to-teal-700/80 hover:from-teal-400/100 hover:to-teal-800/100 text-white text-center py-3 rounded-2xl font-semibold shadow-[0_0_10px_rgba(0,255,255,0.5)] hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] transition"
        >
          Inquire on WhatsApp
        </a>
      </div>

      {/* Features near image */}
      <div className="mt-4 w-full max-h-[35vh] overflow-y-auto pr-2 bg-gray-900/30 backdrop-blur-lg rounded-2xl p-3 border border-teal-500/20 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
        <h3 className="text-xl font-bold text-teal-400 mb-2 text-shadow-lg">Features & Functions</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-100 text-shadow-sm">
          {product.features.map((f, i) => (
            <li key={i} className="hover:text-teal-200 transition">{f}</li>
          ))}
        </ul>
      </div>
    </div>

    {/* Right: Product Details + Specs */}
    <div className="flex-1 flex flex-col overflow-y-auto max-h-[80vh] bg-gray-900/20 backdrop-blur-xl rounded-2xl p-4 border border-teal-400/20 shadow-[0_0_30px_rgba(0,255,255,0.2)]">
      <h2 className="text-3xl font-extrabold text-white text-shadow-xl">{product.name}</h2>
      <p className="mt-3 text-gray-200 leading-relaxed text-shadow-md">{product.fullDetails}</p>

      {/* Technical Specs */}
      <h3 className="text-xl font-bold mt-4 text-teal-400 text-shadow-lg">Technical Specs</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
        {Object.entries(product.specs).map(([key, value]) => (
          <div key={key} className="p-3 bg-gray-900/30 backdrop-blur-lg rounded-xl border-l-4 border-teal-400 shadow-[0_0_10px_rgba(0,255,255,0.2)] hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] transition">
            <span className="font-semibold text-white text-shadow-sm capitalize">{key}:</span> <span className="text-gray-100 text-shadow-sm">{value}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
);
}

export default React.memo(ProductModal);
