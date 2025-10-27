import { useContext } from "react";
import { PedidoContext } from "../context/PedidoContext";

// Hook personalizado para acceder al contexto de pedidos.

export const usePedidos = () => {
  const context = useContext(PedidoContext);
  if (context === null) {
    throw new Error("usePedidos debe ser usado dentro de un <PedidoProvider>");
  }
  return context;
};
