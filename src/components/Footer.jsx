import { Link } from "react-router-dom";

/**
 * Pie de página de la aplicación.
 */
export default function AppFooter() {
    return (
        <footer style={{
            backgroundColor: "var(--primary-color)",
            color: "var(--background-color)",
            padding: "20px 32px",
            textAlign: "center"
        }}>
            <div className="container">
                <p style={{
                    margin: 0,
                    color: "inherit",
                    fontWeight: 600
                }}>
                    © 2025 Loopie. Todos los derechos reservados.
                </p>

                <div style={{ marginTop: "10px", display: "flex", gap: "1rem", justifyContent: "center", alignItems: "center" }}>
                    <Link to="/sobre-nosotras" style={{ color: "var(--background-color)", textDecoration: "underline" }}>
                        Sobre nosotras
                    </Link>

                    <span style={{ color: "var(--background-color)", opacity: 0.7 }}>|</span>

                    <Link to="/contacto" style={{ color: "var(--background-color)", textDecoration: "underline" }}>
                        Contáctanos
                    </Link>
                </div>
            </div>
        </footer>
    );
}