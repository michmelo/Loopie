// IMPORTS
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import AppFooter from "../components/Footer";
import { useNavigate } from "react-router-dom";

/**
 * Página para uso default de acceso no autorizado
 * @param {{ mode?: 'auth' | 'admin' }} props
 */
export default function AccessDenied({ mode = "auth" }) {
  const navigate = useNavigate();

  const title = mode === "admin" ? "Acceso Restringido — Solo Admin" : "Requiere Autenticación";
  const description =
    mode === "admin"
      ? "Esta sección solo está disponible para administradores. Si crees que es un error, contacta al equipo o vuelve a la página principal."
      : "Necesitas iniciar sesión para ver esta página. Por favor inicia sesión o regístrate para continuar.";

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--background-color)" }}>
      <Navbar />

      <main className="container-fluid" style={{ padding: "2rem", flexGrow: 1 }}>
        <div className="container">
          <PageHeader title={title} description={description} />

          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <div className="card-custom text-center">
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>
                  {mode === "admin" ? "🔒" : "⚠️"}
                </div>

                <p style={{ color: "var(--secondary-color)", marginBottom: "1rem" }}>{description}</p>

                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  {mode === "auth" ? (
                    <>
                      <button className="btn-custom" onClick={() => navigate("/login")}>
                        Iniciar Sesión
                      </button>
                      <button className="btn-custom" onClick={() => navigate("/register")}>
                        Registrarse
                      </button>
                    </>
                  ) : (
                    <button className="btn-custom" onClick={() => navigate("/")}>
                      Volver al Inicio
                    </button>
                  )}
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
