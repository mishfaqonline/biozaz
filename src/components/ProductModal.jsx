import React, { useEffect, useState, useCallback } from "react";
import { ArrowBigRightIcon, ChevronLeft, ChevronRight, MessageCircle, MessageCircleIcon, MessageSquareTextIcon, RotateCw } from "lucide-react";
import { allProducts } from "../assets/products";

function ProductModal({ product, onClose }) {
// Safe initialization
const initialCategory = product?.category || "All";
const [currentImage, setCurrentImage] = useState(0);
const [currentCategory, setCurrentCategory] = useState(initialCategory);
const [currentProductIndex, setCurrentProductIndex] = useState(0);

// Filter products for current category
const filteredCategoryProducts = allProducts.filter(
(p) => currentCategory === "All" || p.category === currentCategory
);

const currentProduct =
filteredCategoryProducts[currentProductIndex] || { images: [], name: "", features: [], specs: {}, fullDetails: "" };

// Reset index/image when category changes
useEffect(() => {
setCurrentProductIndex(0);
setCurrentImage(0);
}, [currentCategory]);

// Lock scroll when modal is open
useEffect(() => {
document.body.style.overflow = "hidden";
return () => (document.body.style.overflow = "auto");
}, []);

if (!product) return null;

const handleClose = useCallback(() => onClose(), [onClose]);

// Image navigation
const prevImage = () =>
setCurrentImage((prev) =>
currentProduct.images?.length
? (prev === 0 ? currentProduct.images.length - 1 : prev - 1)
: 0
);
const nextImage = () =>
setCurrentImage((prev) =>
currentProduct.images?.length
? (prev === currentProduct.images.length - 1 ? 0 : prev + 1)
: 0
);

// Next product in category
const nextProduct = () => {
if (!filteredCategoryProducts.length) return;
setCurrentProductIndex((prev) => (prev + 1) % filteredCategoryProducts.length);
setCurrentImage(0);
};

// Unique categories with "All" at the start
const categories = ["All", ...new Set(allProducts.map((p) => p.category))];

return ( <div className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex justify-center items-center p-2"> <div className="relative w-full max-w-7xl h-full md:h-[90vh] flex flex-col md:flex-row gap-4 bg-black/50 backdrop-blur-2xl border border-teal-500/30 rounded-3xl shadow-[0_0_50px_rgba(0,255,255,0.3)] overflow-hidden">

    {/* LEFT: IMAGE + NAME + Buttons */}
    <div className="flex-1 flex flex-col gap-2 p-3 md:p-5">
      {/* Image */}
      {currentProduct.images?.length > 0 && (
        <div className="relative w-full h-[35vh] md:h-[50%] flex items-center justify-center overflow-hidden">
          <img
            src={currentProduct.images[currentImage]}
            alt={currentProduct.name}
            className="w-full h-full object-contain rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-transform slider-img"
          />
          {currentProduct.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition neon-glow-button"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition neon-glow-button"
              >
                <ChevronRight />
              </button>
            </>
          )}
        </div>
      )}

      {/* Product Name */}
      <h2 className="text-white font-extrabold mt-2 text-center text-[clamp(16px,2.5vw,28px)]">
        {currentProduct.name}
      </h2>

      {/* WhatsApp & Next Product Buttons */}
      <div className="flex justify-center gap-4 mt-2">
        <a
          href={`https://wa.me/923364446339?text=Hello, I'm interested in ${encodeURIComponent(currentProduct.name)}`}
          target="_blank"
          rel="noreferrer"
          className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-xl font-semibold transition flex items-center justify-center gap-2 neon-glow-button"
        >
          Get Quote <MessageCircle size={18} />
        </a>
        {filteredCategoryProducts.length > 1 && (
          <button
            onClick={nextProduct}
            className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-xl font-semibold transition flex items-center justify-center gap-2 neon-glow-button"
          >
            Next  <ArrowBigRightIcon size={18} />
          </button>
        )}
      </div>

      {/* Product Dots */}
      {filteredCategoryProducts.length > 1 && (
        <div className="flex gap-2 mt-2 justify-center items-center">
          {filteredCategoryProducts.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => {
                setCurrentProductIndex(idx);
                setCurrentImage(0);
              }}
              className={`slider-dot w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentProductIndex
                  ? "active"
                  : "bg-gray-400 hover:bg-teal-400"
              }`}
            ></button>
          ))}
        </div>
      )}

      {/* Category Navigation */}
      <div className="flex gap-3 mt-3 justify-center items-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCurrentCategory(cat)}
            className={`px-3 py-1 rounded-full text-sm font-semibold transition neon-glow-button ${
              currentCategory === cat
                ? "bg-teal-500 text-white shadow-md"
                : "bg-gray-400 text-gray-800 hover:bg-teal-400 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>

    {/* RIGHT: Features & Details */}
    <div className="flex-1 flex flex-col p-3 md:p-5 overflow-hidden">
      <div className="w-full h-full bg-black/40 rounded-2xl border border-teal-500/20 p-4 overflow-auto">
        <h3 className="text-teal-400 font-bold text-[clamp(12px,1.5vw,18px)] mb-2">
          Features & Functions
        </h3>
        <ul className="text-gray-200 text-[clamp(12px,1.2vw,16px)] space-y-1 mb-4">
          {currentProduct.features?.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        <h3 className="text-teal-400 font-bold text-[clamp(12px,1.5vw,18px)] mb-2">
          Technical Specs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-200 text-[clamp(10px,1vw,14px)] mb-4">
          {currentProduct.specs &&
            Object.entries(currentProduct.specs).map(([key, value]) => (
              <div key={key}>
                <strong className="text-white capitalize">{key}:</strong> {value}
              </div>
            ))}
        </div>

        <h3 className="text-teal-400 font-bold text-[clamp(12px,1.5vw,18px)] mb-2">
          Full Details
        </h3>
        <p className="text-gray-200 text-[clamp(12px,1.2vw,16px)]">
          {currentProduct.fullDetails}
        </p>
      </div>
    </div>

    {/* Close Button */}
    <button
      onClick={handleClose}
      className="absolute top-4 right-4 w-12 h-12 rounded-full bg-teal-500 hover:bg-teal-600 flex items-center justify-center text-white shadow-md transition neon-glow-button"
    >
      <RotateCw size={24} />
    </button>
  </div>

  {/* Styles */}
  <style>{`
    .neon-glow-button {
      box-shadow:
        0 0 8px rgba(0,255,255,0.6),
        0 0 16px rgba(0,255,255,0.5),
        0 0 24px rgba(0,255,255,0.4);
      animation: neonPulse 1.5s infinite alternate;
    }
    @keyframes neonPulse {
      0% { box-shadow: 0 0 6px rgba(0,255,255,0.5), 0 0 12px rgba(0,255,255,0.3), 0 0 18px rgba(0,255,255,0.2); }
      50% { box-shadow: 0 0 12px rgba(0,255,255,0.8), 0 0 24px rgba(0,255,255,0.6), 0 0 36px rgba(0,255,255,0.4); }
      100% { box-shadow: 0 0 10px rgba(0,255,255,0.7), 0 0 20px rgba(0,255,255,0.5), 0 0 30px rgba(0,255,255,0.3); }
    }

    .slider-img {
      animation: slideIn 0.8s ease forwards;
    }
    @keyframes slideIn {
      from { transform: translateX(50px); opacity: 0.2; }
      to { transform: translateX(0); opacity: 1; }
    }

    .slider-dot {
      transition: all 0.35s ease;
      width: 12px;
      height: 12px;
    }
    .slider-dot.active {
      width: 24px;
      background-color: #14b8a6;
    }
  `}</style>
</div>
);
}

export default React.memo(ProductModal);
