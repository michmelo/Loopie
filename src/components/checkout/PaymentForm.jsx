/**
 * Formulario información de pago (débito/crédito)
 */
import { useState } from "react";

/**
 * - Si paymentType === "credit" → pide nombre, RUT, número, vencimiento y CVV.
 * - Si paymentType === "debit"  → pide RUT y número de tarjeta (simulación por no redirección a banco).
 */
export default function PaymentForm({ onPay }) {

  // Estado tipo de pago
  const [paymentType, setPaymentType] = useState("credit");

  const [values, setValues] = useState({
    titular: "",
    rut: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});

  // Maneja cambio de tipo de pago
  const handlePaymentTypeChange = (e) => {
    setPaymentType(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validateField = (name, value) => {
    let msg = "";
    if (name === 'titular' && paymentType === 'credit' && !value.trim()) msg = 'Nombre del titular es requerido';
    if (name === 'rut' && !value.trim()) msg = 'RUT es requerido';
    if (name === 'cardNumber' && !value.trim()) msg = 'Número de tarjeta es requerido';
    if (name === 'expiry' && paymentType === 'credit' && !value.trim()) msg = 'Fecha de vencimiento es requerida';
    if (name === 'cvv' && paymentType === 'credit' && !value.trim()) msg = 'CVV es requerido';
    setErrors((e) => ({ ...e, [name]: msg }));
    return msg === "";
  };

  const handleBlur = (e) => {
    validateField(e.target.name, e.target.value);
  };

  const handlePay = (e) => {
    e.preventDefault();
    
    const toValidate = ['rut', 'cardNumber'];
    if (paymentType === 'credit') toValidate.push('titular', 'expiry', 'cvv');

    const results = toValidate.map((k) => validateField(k, values[k] || ''));
    const ok = results.every(Boolean);
    if (!ok) {
      return;
    }

    if (onPay) onPay(paymentType);
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
              name="titular"
              value={values.titular}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              className="form-control-custom"
              placeholder="Ej: María Pérez Soto"
            />
            {errors.titular && <div style={{ color: '#a63a3a', fontSize: '0.85rem', marginTop: 6 }}>{errors.titular}</div>}
          </div>

          <div className="mb-3">
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
              RUT del Titular
            </label>
            <input
              name="rut"
              value={values.rut}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              className="form-control-custom"
              placeholder="Ej: 12345678-9"
            />
            {errors.rut && <div style={{ color: '#a63a3a', fontSize: '0.85rem', marginTop: 6 }}>{errors.rut}</div>}
          </div>

          <div className="mb-3">
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
              Número de Tarjeta
            </label>
            <input
              name="cardNumber"
              value={values.cardNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              className="form-control-custom"
              placeholder="1234 5678 9012 3456"
            />
            {errors.cardNumber && <div style={{ color: '#a63a3a', fontSize: '0.85rem', marginTop: 6 }}>{errors.cardNumber}</div>}
          </div>

          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                Fecha de Vencimiento
              </label>
              <input
                name="expiry"
                value={values.expiry}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                className="form-control-custom"
                placeholder="MM/AA"
              />
              {errors.expiry && <div style={{ color: '#a63a3a', fontSize: '0.85rem', marginTop: 6 }}>{errors.expiry}</div>}
            </div>

            <div className="col-12 col-md-6 mb-3">
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                CVV
              </label>
              <input
                name="cvv"
                value={values.cvv}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                className="form-control-custom"
                placeholder="123"
              />
              {errors.cvv && <div style={{ color: '#a63a3a', fontSize: '0.85rem', marginTop: 6 }}>{errors.cvv}</div>}
            </div>
          </div>
          <button
            className="btn-custom"
            style={{ width: "100%", marginTop: "1rem" }}
            onClick={handlePay}
          >
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
              name="rut"
              value={values.rut}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              className="form-control-custom"
              placeholder="Ej: 12345678-9"
            />
            {errors.rut && <div style={{ color: '#a63a3a', fontSize: '0.85rem', marginTop: 6 }}>{errors.rut}</div>}
          </div>

          <div className="mb-3">
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
              Número de Tarjeta
            </label>
            <input
              name="cardNumber"
              value={values.cardNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              className="form-control-custom"
              placeholder="Ej: 1234 5678 9012 3456"
            />
            {errors.cardNumber && <div style={{ color: '#a63a3a', fontSize: '0.85rem', marginTop: 6 }}>{errors.cardNumber}</div>}
          </div>

          <div className="mb-3">
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                Fecha de Vencimiento
              </label>
              <input
                name="expiry"
                value={values.expiry}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                className="form-control-custom"
                placeholder="MM/AA"
              />
              {errors.expiry && <div style={{ color: '#a63a3a', fontSize: '0.85rem', marginTop: 6 }}>{errors.expiry}</div>}
            </div>

          <button
            className="btn-custom"
            style={{ width: "100%", marginTop: "1rem" }}
            onClick={handlePay}
          >
            Pagar con Débito
          </button>
        </>
      )}
    </div>
  );
}
