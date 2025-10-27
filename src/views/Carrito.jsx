// IMPORTS
import { useState } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import CartItem from "../components/carrito/CartItem";
import OrderSummary from "../components/carrito/OrderSummary";
import AppFooter from "../components/Footer";
import { useCart } from "../hooks/useCart";
import { parseCLP, formatToCLP } from "../utils/price";

export default function Carrito() {
  // Acceso al carrito desde el provider
  const { cart, removeFromCart, clearUserCart, total } = useCart();

  // Local UI state para mensajes temporales
  const [message, setMessage] = useState("");

  // ELIMINAR ITEM
  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
    setMessage("Producto eliminado del carrito");
    setTimeout(() => setMessage(""), 1800);
  };

  const handleClearCart = () => {
    clearUserCart();
    setMessage("Carrito vaciado");
    setTimeout(() => setMessage(""), 1800);
  };

  // CALCULOS CARRITO (usa total del provider)
  const calcularTotalesCarrito = () => {
    const totalEnvio = 3500;
    const subtotal = Number(total) - 0;

    // Si total no es un número válido, calcular manualmente
    const fallbackSubtotal = cart.reduce((acc, item) => acc + parseCLP(item.precio) * (item.cant || 1), 0);
    const realSubtotal = Number.isFinite(subtotal) && subtotal > 0 ? subtotal : fallbackSubtotal;

    const totalFinal = realSubtotal + totalEnvio;

    return {
      subtotal: formatToCLP(realSubtotal),
      envio: formatToCLP(totalEnvio),
      total: formatToCLP(totalFinal),
    };
  };

  const orderTotals = calcularTotalesCarrito();

  return (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--background-color)", display: "flex", flexDirection: "column" }}>
      <Navbar />

  <main className="container-fluid" style={{ padding: "2rem", flexGrow: 1 }}>
        <div className="container">
          <PageHeader
            title="Mi Carrito de Compras"
            description="Revisa las prendas que has seleccionado antes de finalizar tu compra."
          />

          <div className="row">
            {/* LISTA PRODUCTOS */}
            <div className="col-12 col-lg-8">
              <div className="card-custom mb-4">
                <h3>Prendas en tu carrito</h3>

                {cart && cart.length > 0 ? (
                  cart.map((item) => (
                    <CartItem
                      id={item.id}
                      name={item.name || item.nombre || item.title}
                      cant={item.cant || 1}
                      precio={formatToCLP(parseCLP(item.precio))}
                      onRemove={() => handleRemoveItem(item.id)}
                    />
                  ))
                ) : (
                  <p>Tu carrito está vacío 🛒</p>
                )}
                {cart && cart.length > 0 && (
                  <div style={{ marginTop: '0.75rem' }}>
                    <button className="btn-custom" onClick={handleClearCart} style={{ backgroundColor: 'var(--secondary-color)' }}>Vaciar Carrito</button>
                    {message && <span style={{ marginLeft: '1rem', color: 'var(--muted-color)' }}>{message}</span>}
                  </div>
                )}
              </div>
            </div>

            {/* RESUMEN PEDIDO */}
            <OrderSummary
              subtotal={orderTotals.subtotal}
              envio={orderTotals.envio}
              total={orderTotals.total}
            />
          </div>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}