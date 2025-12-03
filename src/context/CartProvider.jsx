import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { getCart, saveCart, clearCart } from "../data/localStorageService";
import { useAuth } from "../hooks/useAuth";

// Carrito de compras con persistencia en localStorage por usuario.

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);

  // Iniciar o cargar -> recuperar carrito del usuario
  useEffect(() => {
    if (user?.id) {
      const stored = getCart(user.id);
      setCart(stored);
    } else {
      setCart([]);
    }
  }, [user]);

  // Actualizar carrito y mantener persistencia
  const addToCart = (product) => {
    // Lógica de Segunda Mano: Ítems únicos.
    // Verificar si el producto ya está en el carrito
    const exists = cart.some((item) => item.id === product.id);

    if (exists) {
      // Si ya existe, no hacemos nada (o podríamos mostrar un toast)
      console.warn("Este producto ya está en el carrito.");
      return;
    }

    const updated = [...cart, product];
    setCart(updated);
    if (user?.id) saveCart(user.id, updated);
  };

  const removeFromCart = (productId) => {
    const updated = cart.filter((item) => item.id !== productId);
    setCart(updated);
    if (user?.id) saveCart(user.id, updated);
  };

  const clearUserCart = () => {
    setCart([]);
    if (user?.id) clearCart(user.id);
  };

  const total = cart.reduce((sum, item) => sum + (item.precio || 0), 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearUserCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
