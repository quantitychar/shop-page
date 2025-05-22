import React from "react";
import { useCart } from "../../contexts/CartContext";
import { useProduct } from "../../components/ProductCard/ProductCard";

export default function AddBtn({ className = "" }) {
  const { dispatch } = useCart();
  const product = useProduct();

  return (
    <button
      className={`px-3 py-1 rounded-lg bg-primary text-white text-sm ${className}`}
      onClick={() => dispatch({ type: "ADD", payload: { id: product.id } })}
    >
      Add to cart
    </button>
  );
}
