import { useState, useEffect } from "react";
import { PedidoContext } from "./PedidoContext";
import { useAuth } from "../hooks/useAuth";
import { getOrders, createOrder, clearOrders } from "../data/localStorageService";

// Guarda, obtiene y limpia los pedidos del usuario activo usando localStorage.
export const PedidoProvider = ({ children }) => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  // Al cargar -> obtiene pedidos del usuario activo
  useEffect(() => {
    if (user?.id) {
      const userOrders = getOrders(user.id);
      setOrders(userOrders);
    } else {
      setOrders([]);
    }
  }, [user]);

  // Crea nuevo pedido (checkout)
  const addOrder = (cart, total, metodoPago = "tarjeta") => {
    if (!user?.id) return;

    const nuevoPedido = createOrder(user.id, cart, total, metodoPago);
    setOrders((prev) => [...prev, nuevoPedido]);
  };

  // Elimina todos los pedidos del usuario activo
  const clearUserOrders = () => {
    if (!user?.id) return;
    clearOrders(user.id);
    setOrders([]);
  };

  return (
    <PedidoContext.Provider
      value={{
        orders,
        addOrder,
        clearUserOrders,
      }}
    >
      {children}
    </PedidoContext.Provider>
  );
};
