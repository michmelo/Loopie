/**
 * Sección principal de bienvenida
 */
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
    const navigate = useNavigate();

    return (
        <section className="hero-section" style={{
            background: "linear-gradient(135deg, var(--light-color), var(--background-color))",
            padding: "4rem 2rem",
            textAlign: "center",
            borderBottom: "1px solid var(--accent-color)"
        }}>
            <div className="container">
                <h1 style={{
                    color: "var(--primary-color)",
                    fontSize: "3rem",
                    fontWeight: "700",
                    marginBottom: "1rem"
                }}>
                    ¡Bienvenido a Loopie!
                </h1>
                <p style={{
                    color: "var(--secondary-color)",
                    fontSize: "1.25rem",
                    marginBottom: "2rem",
                    maxWidth: "600px",
                    margin: "0 auto 2rem auto"
                }}>
                    Descubre las mejores ofertas, explora nuestras tiendas y encuentra exactamente lo que necesitas.
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <button 
                        className="btn-custom"
                        style={{ 
                            padding: "12px 24px",
                            fontSize: "1.1rem"
                        }}
                        onClick={() => navigate('/tiendas')}
                    >
                        Explorar Tiendas
                    </button>
                    <button 
                        className="btn-custom"
                        style={{ 
                            padding: "12px 24px",
                            fontSize: "1.1rem",
                            backgroundColor: "var(--secondary-color)",
                            color: "var(--background-color)"
                        }}
                        onClick={() => navigate('/ofertas')}
                    >
                        Ver Ofertas
                    </button>
                </div>
            </div>
        </section>
    );
}