import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";

// Контекст, щоб під‑компоненти могли читати product, не приймаючи props
export const ProductContext = createContext(null);

export const useProduct = () => useContext(ProductContext);

export default function ProductCard({ product, children, className = "" }) {
  return (
    <ProductContext.Provider value={product}>
      <div
        className={`rounded-xl bg-white shadow hover:shadow-lg transition ${className}`}
      >
        {children}
      </div>
    </ProductContext.Provider>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    getFormattedPrice: PropTypes.func.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
