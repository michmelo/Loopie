/**
 * Sección Call To Action
 * Comportamiento dinámico basado en la autenticación.
 * @param {{ isAuthenticated: boolean, handlePrimaryAction: () => void }} props
 */
export default function CTASection({ isAuthenticated, handlePrimaryAction }) {
    return (
        <section className="cta-section" style={{
            background: "linear-gradient(135deg, var(--accent-color), var(--light-color))",
            padding: "4rem 2rem",
            textAlign: "center"
        }}>
            <div className="container">
                <h2 style={{
                    color: "var(--primary-color)",
                    marginBottom: "1rem",
                    fontSize: "2.5rem"
                }}>
                    ¿Listo para empezar?
                </h2>
                <p style={{
                    color: "var(--primary-color)",
                    fontSize: "1.25rem",
                    marginBottom: "2rem"
                }}>
                    Únete a nuestra comunidad y descubre un mundo de posibilidades.
                </p>
                <button 
                    className="btn-custom"
                    style={{ 
                        padding: "15px 30px",
                        fontSize: "1.2rem",
                        backgroundColor: "var(--primary-color)",
                        color: "var(--background-color)"
                    }}
                    onClick={handlePrimaryAction}
                >
                    {isAuthenticated ? "Ir a mi cuenta" : "Comenzar Ahora"}
                </button>
            </div>
        </section>
    );
}