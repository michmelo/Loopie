import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import AppFooter from "../components/Footer";
import logo from "../assets/img/logo/loopie.png";

/**
 * Página about us
 */
export default function SobreNosotras() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--background-color)", fontWeight: "bold" }}>
      <Navbar />

      <main className="container-fluid" style={{ padding: "2rem", flexGrow: 1 }}>
        <div className="container">
          <div className="text-center mb-3">
            <img src={logo} alt="Loopie logo" className="page-logo" />
          </div>

          <PageHeader title="Sobre nosotras" description="Conoce al equipo detrás de Loopie y nuestra misión de conectar tiendas y personas." />

          <div className="row">
            <div className="col-12 col-md-8">
              <div className="card-custom">
                <h3>Nuestra misión</h3>
                <p style={{ color: "var(--secondary-color)" }}>
                  En Loopie creemos que la moda debe ser accesible, sostenible y cercana. Trabajamos para conectar
                  tiendas locales con personas que buscan calidad y estilo.
                </p>

                <h3>El equipo</h3>
                <p style={{ color: "var(--secondary-color)" }}>
                  Somos un equipo pequeño y apasionado por el comercio local y la experiencia de compra. Si quieres
                  colaborar o tienes ideas, ¡nos encantaría saber de ti!
                </p>

                <h3>Contacto</h3>
                <p style={{ color: "var(--secondary-color)" }}>
                  Puedes escribirnos a <strong>hola@loopie.cl</strong> o usar el formulario de contacto en el sitio.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card-custom text-center">
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>👋</div>
                <h4>Valores</h4>
                <ul style={{ listStyle: "none", padding: 0, color: "var(--secondary-color)" }}>
                  <li>Transparencia</li>
                  <li>Sostenibilidad</li>
                  <li>Comunidad</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
