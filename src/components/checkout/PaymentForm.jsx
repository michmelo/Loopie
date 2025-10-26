/**
 * Formulario información de pago (débito/crédito)
 */
import { useState } from "react";

/**
 * - Si paymentType === "credit" → pide nombre, RUT, número, vencimiento y CVV.
 * - Si paymentType === "debit"  → pide RUT y número de tarjeta (simulación por no redirección a banco).
 */
export default function PaymentForm() {

  // Estado tipo de pago
  const [paymentType, setPaymentType] = useState("credit");

  // Maneja cambio de tipo de pago
  const handlePaymentTypeChange = (e) => {
    setPaymentType(e.target.value);
  };

  return (
    <div className="card-custom">
      <h3>Método de Pago</h3>

      <div className="mb-3">
        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
          Tipo de Tarjeta
        </label>
        <div style={{ display: "flex", gap: "1rem" }}>
          <label>
            <input
              type="radio"
              name="paymentType"
              value="credit"
              checked={paymentType === "credit"}
              onChange={handlePaymentTypeChange}
              style={{ marginRight: "0.5rem" }}
            />
            Tarjeta de Crédito
          </label>

          <label>
            <input
              type="radio"
              name="paymentType"
              value="debit"
              checked={paymentType === "debit"}
              onChange={handlePaymentTypeChange}
              style={{ marginRight: "0.5rem" }}
            />
            Tarjeta de Débito
          </label>
        </div>
      </div>

      {/* CRÉDITO*/}
      {paymentType === "credit" ? (
        <>
          <div className="mb-3">
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
              Nombre del Titular
            </label>
            <input
              type="text"
              className="form-control-custom"
              placeholder="Ej: María Pérez Soto"
            />
          </div>

          <div className="mb-3">
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
              RUT del Titular
            </label>
            <input
              type="text"
              className="form-control-custom"
              placeholder="Ej: 12345678-9"
            />
          </div>

          <div className="mb-3">
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
              Número de Tarjeta
            </label>
            <input
              type="text"
              className="form-control-custom"
              placeholder="1234 5678 9012 3456"
            />
          </div>

          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                Fecha de Vencimiento
              </label>
              <input
                type="text"
                className="form-control-custom"
                placeholder="MM/AA"
              />
            </div>

            <div className="col-12 col-md-6 mb-3">
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                CVV
              </label>
              <input
                type="text"
                className="form-control-custom"
                placeholder="123"
              />
            </div>
          </div>

          <button className="btn-custom" style={{ width: "100%", marginTop: "1rem" }}>
            Pagar con Tarjeta de Crédito
          </button>
        </>
      ) : (
        <>
          {/* DÉBITO */}
          <div className="mb-3">
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
              RUT del Titular
            </label>
            <input
              type="text"
              className="form-control-custom"
              placeholder="Ej: 12345678-9"
            />
          </div>

          <div className="mb-3">
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
              Número de Tarjeta
            </label>
            <input
              type="text"
              className="form-control-custom"
              placeholder="Ej: 1234 5678 9012 3456"
            />
          </div>

          <div className="mb-3">
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                Fecha de Vencimiento
              </label>
              <input
                type="text"
                className="form-control-custom"
                placeholder="MM/AA"
              />
            </div>

          <button className="btn-custom" style={{ width: "100%", marginTop: "1rem" }}>
            Pagar con Débito
          </button>
        </>
      )}
    </div>
  );
}
