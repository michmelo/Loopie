import { useState } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import ShippingForm from "../components/checkout/ShippingForm";
import PaymentForm from "../components/checkout/PaymentForm";
import CheckoutSummary from "../components/checkout/CheckoutSummary";
import AppFooter from "../components/Footer";

// cambiar moneda a formato chileno
const formatToCLP = (number) => "$" + number.toLocaleString("es-CL");

// COMPONENTE PRINCIPAL
export default function Checkout() {

  // TODO: REEMPLAZAR CON DATA JSON
  // DATOS DEMO
  const [items] = useState([
    { id: 1, name: "Jeans Slim Fit Clásico", precio: 13990 },
    { id: 2, name: "Polera de Algodón Blanca", precio: 4990 },
  ]);

  // Cálculos
  const envio = 3500;
  const subtotal = items.reduce((acc, item) => acc + item.precio, 0);
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
              <PaymentForm />
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