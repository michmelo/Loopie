import Navbar from "../components/Navbar";
import AppFooter from "../components/Footer";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

export default function PaymentSuccess() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--background-color)" }}>
      <Navbar />

      <main className="container-fluid" style={{ padding: "2rem", flexGrow: 1 }}>
        <div className="container">
          <PageHeader title="Pago Exitoso" description="¡Gracias! Tu pago ha sido procesado correctamente." />

          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <div className="card-custom text-center">

                {/* Emoji de success para ayuda visual */}
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>✅</div>
                <h3>Pago confirmado</h3>
                <p style={{ color: "var(--secondary-color)" }}>Tu orden está en proceso. Recibirás un correo con los detalles de la compra.</p>
                <p style={{ color: "var(--secondary-color)" }}>¡Gracias por comprar en Loopie!</p>

                <div style={{ marginTop: "1rem" }}>
                  <Link to="/" className="btn-custom">Volver al inicio</Link>
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
