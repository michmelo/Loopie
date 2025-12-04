import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import ShippingForm from "../components/checkout/ShippingForm";
import PaymentForm from "../components/checkout/PaymentForm";
import CheckoutSummary from "../components/checkout/CheckoutSummary";
import AppFooter from "../components/Footer";
import { useCart } from "../hooks/useCart";
import { usePedidos } from "../hooks/usePedidos";
import { useNavigate } from "react-router-dom";
import { parseCLP, formatToCLP } from "../utils/price";
import { createOrder } from "../data/api/api";

// COMPONENTE PRINCIPAL
export default function Checkout() {
  // Acceso al carrito
  const { cart, clearUserCart } = useCart();
  const { addOrder } = usePedidos();
  const navigate = useNavigate();

  // Usar items del carrito; si está vacío, mantener array vacío
    const items = (cart || []).map((it) => ({
    idProducto: it.id || it.idProducto,
    nombre: it.name || it.nombre,
    precio: parseCLP(it.precio),
  }));

  // Cálculos
  const envio = 3500;
  const subtotal = items.reduce((acc, item) => acc + (Number(item.precio) || 0), 0);
  const total = subtotal + envio;

  const handleConfirmPayment = async (metodoPago = "tarjeta") => {
    try {
      const pedido = {
        items: items.map((i) => ({
          idProducto: i.idProducto,
          cantidad: i.cant || 1,
        })),
        total,
        metodoPago,
      };

      await createOrder(pedido);
      addOrder(cart || [], total, metodoPago);
      clearUserCart();
      navigate("/payment-success");
    } catch (err) {
      console.error("Error creando pedido:", err);
      navigate("/payment-error");
    }
  };

  const order = {
      items: items.map((item) => ({
        name: item.nombre,
        precio: formatToCLP(item.precio),
      })),
      subtotal: formatToCLP(subtotal),
      envio: formatToCLP(envio),
      total: formatToCLP(total),
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