import { useState, useEffect } from "react";
import { PedidoContext } from "./PedidoContext";
import { useAuth } from "../hooks/useAuth";

// Guarda los pedidos del usuario activo SOLO en memoria (sin localStorage)
export const PedidoProvider = ({ children }) => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  // Cuando cambia el usuario o se cierra sesión, limpiamos pedidos en memoria
  useEffect(() => {
    setOrders([]);
  }, [user]);

  /**
   * Crea y registra un nuevo pedido en memoria.
   * Copia local para mostrar en la vista de "Pedidos".
   */
  const addOrder = (cart, total, metodoPago = "tarjeta") => {
    if (!user) return;

    const nuevoPedido = {
      id: Date.now(),
      usuarioId: user.id ?? user.idUsuario ?? null,
      items: cart || [],
      total: Number(total) || 0,
      estado: "pagado", // o "Completado", según lo que quieras mostrar
      metodoPago,
      fecha: new Date().toLocaleDateString("es-CL"),
    };

    setOrders((prev) => [...prev, nuevoPedido]);
  };

  // Elimina todos los pedidos del usuario activo en esta sesión
  const clearUserOrders = () => {
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