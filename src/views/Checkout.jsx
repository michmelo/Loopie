 
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import ShippingForm from "../components/checkout/ShippingForm";
import PaymentForm from "../components/checkout/PaymentForm";
import CheckoutSummary from "../components/checkout/CheckoutSummary";
import AppFooter from "../components/Footer";
import { useCart } from "../hooks/useCart";
import { usePedidos } from "../hooks/usePedidos";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { parseCLP, formatToCLP } from "../utils/price";

// COMPONENTE PRINCIPAL
export default function Checkout() {
  // Acceso al carrito
  const { cart, clearUserCart } = useCart();
  const { addOrder } = usePedidos();
  const navigate = useNavigate();
  const [paymentClicks, setPaymentClicks] = useState(0);

  // Usar items del carrito; si está vacío, mantener array vacío
  const items = (cart || []).map((it) => ({ id: it.id, name: it.name || it.nombre || it.title, precio: parseCLP(it.precio) }));

  // Cálculos
  const envio = 3500;
  const subtotal = items.reduce((acc, item) => acc + (Number(item.precio) || 0), 0);
  const total = subtotal + envio;

  const order = {
    items: items.map((item) => ({
      name: item.name,
      precio: formatToCLP(item.precio),
    })),
    subtotal: formatToCLP(subtotal),
    envio: formatToCLP(envio),
    total: formatToCLP(total),
  };

  // Confirma el pago: crea pedido, limpia carrito y redirige a success
  const handleConfirmPayment = (metodoPago = "tarjeta") => {
    try {
      const next = (paymentClicks || 0) + 1;
      setPaymentClicks(next);
      console.log("Payment click #", next, next % 2 === 0 ? "SUCCESS" : "FAIL");

      if (next % 2 === 0) {
        const numericTotal = subtotal + envio;
        addOrder(cart || [], numericTotal, metodoPago);
        clearUserCart();
        navigate("/payment-success");
      } else {
        navigate("/payment-error");
      }
    } catch (err) {
      console.error("Error al procesar pedido:", err);
      navigate("/payment-error");
    }
  };

  // RENDER
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--background-color)", display: "flex", flexDirection: "column" }}>
      <Navbar />

  <main className="container-fluid" style={{ padding: "2rem", flexGrow: 1 }}>
        <div className="container">
          <PageHeader
            title="Finalizar Compra"
            description="Completa tus datos de envío y pago para procesar el pedido."
          />

          <div className="row">
            {/* Izquierda */}
            <div className="col-12 col-lg-8">
              <ShippingForm />
              <PaymentForm onPay={handleConfirmPayment} />
            </div>

            {/* Derecha */}
            <CheckoutSummary
              items={order.items}
              subtotal={order.subtotal}
              envio={order.envio}
              total={order.total}
            />
          </div>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}