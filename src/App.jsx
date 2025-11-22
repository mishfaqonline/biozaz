// File: src/App.jsx
import React, { useState, useCallback } from "react";
import image from "./images/logotm3.png";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductsSection from "./components/ProductsSection";
import Contact from "./pages/Contact";
import ProductModal from "./components/ProductModal";
import { allProducts } from "./assets/products"; // Correct import
import { allimages } from "./assets/img"; // slider images

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleNavClick = useCallback((id) => {
    setCurrentPage(id);
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = 90;
      const top = section.offsetTop - navbarHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  const openProduct = useCallback((product) => {
    setSelectedProduct(product);
  }, []);

  const closeProduct = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <Navbar
        navigation={[
          { name: "Home", id: "home" },
          { name: "Products", id: "products" },
          { name: "About", id: "about" },
          { name: "Services", id: "services" },
          { name: "Contact", id: "contact" },
        ]}
        currentPage={currentPage}
        onNavClick={handleNavClick}
      />

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeProduct} />
      )}

      {/* Main Sections */}
      <div id="home">
        <Home sliderImages={allimages} />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="products">
        {/* Pass the correctly imported allProducts */}
        <ProductsSection products={allProducts} openProduct={openProduct} />
      </div>

      <div id="contact">
        <Contact />
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-4 border-t border-teal-600/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold">
            <span className="text-teal-400">Biozaz</span>
            <span className="text-xs align-top ml-1 text-gray-400">™</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Your trusted partner in medical equipment and healthcare solutions.
          </p>
          <p className="text-gray-500 text-sm">© 2025 Biozaz.com All rights reserved.</p>
          <p className="text-teal-400 text-sm font-semibold mt-2">
            Developed by <span className="text-white">MI-Online</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
