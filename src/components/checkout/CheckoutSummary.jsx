/**
 * Resumen del pedido en la página de checkout.
 * @param {{ 
 * items: Array<{ name: string, price: string }>, 
 * subtotal: string, 
 * envio: string,
 * total: string 
 * }} props
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutSummary({ items, subtotal, envio, total }) {
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);

  const handleConfirm = () => {
    if (processing) return;
    setProcessing(true);

    // Contador en localStorage (alterna intentos para simular fallo -> éxito)
    const attempt = Number(localStorage.getItem("paymentAttempt") || 0);
    const nextAttempt = attempt + 1;
    localStorage.setItem("paymentAttempt", String(nextAttempt));

    // Simula latencia de red
    setTimeout(() => {
      setProcessing(false);
      // Impar = Error | Par = Success
      if (nextAttempt % 2 === 1) {
        navigate("/payment-error");
      } else {
        navigate("/payment-success");
      }
    }, 900);
  };

  return (
    <div className="col-12 col-lg-4 mt-4 mt-lg-0">
      <div className="card-custom">
        <h3>Resumen del Pedido</h3>

        <div style={{ marginBottom: "1rem" }}>
          {/* Detalle de Items */}
          {items.map((item, index) => (
            <div
              id={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
              }}
            >
              <span>{item.name}</span>
              <span>{item.precio}</span>
            </div>
          ))}

          <hr />

          {/* Totales */}
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <span>Subtotal:</span>
            <span>{subtotal}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <span>Envío:</span>
            <span>{envio}</span>
          </div>
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            <span>Total:</span>
            <span>{total}</span>
          </div>
        </div>

        <button
          className="btn-custom"
          style={{ width: "100%", marginBottom: "1rem" }}
          onClick={handleConfirm}
          disabled={processing}
        >
          {processing ? "Procesando..." : "Confirmar Pedido"}
        </button>

        <p
          style={{
            fontSize: "0.9rem",
            color: "var(--secondary-color)",
            textAlign: "center",
          }}
        >
          Al confirmar, aceptas nuestros términos y condiciones
        </p>
      </div>
    </div>
  );
}