import React, { useState } from "react";
import ProductsSection from "./ProductsSection";
import ProductModal from "./ProductModal";
import { allProducts } from "../assets/products";

function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState([]);

  // Called when user clicks "View Details" on a product
  const openProduct = (product) => {
    const filtered = allProducts.filter(p => p.category === product.category);
    setSelectedProduct(product);
    setCategoryProducts(filtered);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setCategoryProducts([]);
  };

  return (
    <div>
      <ProductsSection products={allProducts} openProduct={openProduct} />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={closeModal}
          categoryProducts={categoryProducts}
        />
      )}
    </div>
  );
}

export default ProductsPage;
