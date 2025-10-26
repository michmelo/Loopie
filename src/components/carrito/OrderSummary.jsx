
import { Link } from "react-router-dom";

/**
 * Resumen del pedido en la página del carrito de compras.
 * @param {{ subtotal: string, envio: string, total: string }} props
 */

export default function OrderSummary({ subtotal, envio, total }) {
  return (
    <div className="col-12 col-lg-4">
      <div className="card-custom">
        <h3>Resumen del Pedido</h3>

        <div style={{ marginBottom: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <span>Subtotal:</span>
            <span>{subtotal}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <span>Envío:</span>
            <span>{envio}</span>
          </div>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "1.2rem" }}>
            <span>Total:</span>
            <span>{total}</span>
          </div>
        </div>

        <Link 
          to="/checkout"
          className="btn-custom" 
          style={{ display: "inline-block", textAlign: "center", width: "100%", marginBottom: "1rem", textDecoration: "none" }}
        >
          Ir al Checkout
        </Link>

        <Link 
          to="/"
          className="btn-custom" 
          style={{ display: "inline-block", textAlign: "center", width: "100%", marginBottom: "1rem", textDecoration: "none" }}
        >
          Continuar Comprando
        </Link>
      </div>
    </div>
  );
}