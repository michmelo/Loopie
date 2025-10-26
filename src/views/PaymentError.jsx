import Navbar from "../components/Navbar";
import AppFooter from "../components/Footer";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

export default function PaymentError() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--background-color)" }}>
      <Navbar />

      <main className="container-fluid" style={{ padding: "2rem", flexGrow: 1 }}>
        <div className="container">
          <PageHeader title="Error en el Pago" description="Hubo un problema procesando tu pago." />

          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <div className="card-custom text-center">
                
                { /* emoji de error para reconocimiento visual rápido*/}
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>❌</div>
                <h3>Pago no procesado</h3>
                <p style={{ color: "var(--secondary-color)" }}>Intenta nuevamente o utiliza otro método de pago. Si el problema persiste, contáctanos.</p>

                <div style={{ marginTop: "1rem" }}>
                  <Link to="/checkout" className="btn-custom">Volver al checkout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
