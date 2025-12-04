import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { useAuth } from "../hooks/useAuth";

// Carrito de compras SOLO en memoria (sin persistencia en localStorage)
export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);

  // Cuando reinicia el usuario, se limpia el carrito
  useEffect(() => {
    // Si cambia el usuario logueado o se cierra sesión, reinicia el carrito
    setCart([]);
  }, [user]);

  // Agregar producto al carrito (sin duplicados)
  const addToCart = (product) => {
    const productId = product.id ?? product.idProducto;

    if (!productId) {
      console.warn("Producto sin id válido, no se puede agregar al carrito.");
      return;
    }

    const exists = cart.some((item) => (item.id ?? item.idProducto) === productId);

    if (exists) {
      console.warn("Este producto ya está en el carrito.");
      return;
    }

    const normalizedProduct = {
      ...product,
      id: productId,
    };

    setCart((prev) => [...prev, normalizedProduct]);
  };

  // Eliminar producto por id
  const removeFromCart = (productId) => {
    setCart((prev) =>
      prev.filter((item) => (item.id ?? item.idProducto) !== productId)
    );
  };

  // Vaciar carrito del usuario actual
  const clearUserCart = () => {
    setCart([]);
  };

  // Total simple en número (si necesitas CLP formateado lo haces en la vista)
  const total = cart.reduce((sum, item) => {
    const precio = typeof item.precio === "number" ? item.precio : 0;
    return sum + precio;
  }, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearUserCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
