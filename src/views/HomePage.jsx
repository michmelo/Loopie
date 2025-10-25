// IMPORTS
import Navbar from "../components/Navbar";             // Componente de barra de navegación
import { useAuth } from "../hooks/useAuth";

// COMPONENTE HOMEPAGE
/**
 * Página principal de la aplicación Loopie
 * Incluye la barra de navegación y contenido principal
 */
export default function HomePage() {

    // Aquí usamos el hook 'useAuth' para obtener al usuario autenticado y las funciones de autenticación
    const { user, isAuthenticated, logout } = useAuth();

    // Con esto podemos manejar la acción del botón en CTA, vemos si el usuario está autenticado o no
    const handlePrimaryAction = () => {
        if (isAuthenticated) {
            window.location.href = "/perfil";
        } else {
            window.location.href = "/login";
        }
    };

    // RENDER
    return (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--background-color)" }}>
            {/* Barra de navegación */}
            <Navbar />

            {/* Mostrar saludo y botón de logout si está autenticado */}
            {isAuthenticated && (
                <div style={{ padding: "0.75rem 1rem", textAlign: "right" }}>
                    <span style={{ marginRight: "1rem", color: "var(--secondary-color)" }}>
                        Hola, {user?.name ?? user?.email ?? "usuario"}
                    </span>
                    <button
                        className="btn-custom"
                        onClick={() => { logout(); }}
                        style={{ padding: "6px 12px", fontSize: "0.9rem" }}
                    >
                        Cerrar sesión
                    </button>
                </div>
            )}
            
            
            {/* Contenido principal */}
            <main className="container-fluid" style={{ padding: "0" }}>
                {/* Hero Section */}
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
                                onClick={() => window.location.href = "/tiendas"}
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
                                onClick={() => window.location.href = "/ofertas"}
                            >
                                Ver Ofertas
                            </button>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="features-section" style={{
                    padding: "4rem 2rem",
                    backgroundColor: "var(--background-color)"
                }}>
                    <div className="container">
                        <h2 style={{
                            color: "var(--primary-color)",
                            textAlign: "center",
                            marginBottom: "3rem",
                            fontSize: "2.5rem"
                        }}>
                            ¿Por qué elegir Loopie?
                        </h2>
                        
                        <div className="row g-4">
                            {/* Feature 1 */}
                            <div className="col-md-4">
                                <div className="card-custom text-center" style={{ height: "100%" }}>
                                    <div style={{
                                        fontSize: "3rem",
                                        marginBottom: "1rem"
                                    }}>
                                        🏪
                                    </div>
                                    <h3 style={{
                                        color: "var(--primary-color)",
                                        marginBottom: "1rem"
                                    }}>
                                        Múltiples Tiendas
                                    </h3>
                                    <p style={{
                                        color: "var(--secondary-color)"
                                    }}>
                                        Conectamos con las mejores tiendas para ofrecerte una amplia variedad de productos.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="col-md-4">
                                <div className="card-custom text-center" style={{ height: "100%" }}>
                                    <div style={{
                                        fontSize: "3rem",
                                        marginBottom: "1rem"
                                    }}>
                                        💰
                                    </div>
                                    <h3 style={{
                                        color: "var(--primary-color)",
                                        marginBottom: "1rem"
                                    }}>
                                        Mejores Ofertas
                                    </h3>
                                    <p style={{
                                        color: "var(--secondary-color)"
                                    }}>
                                        Encuentra las ofertas más exclusivas y ahorra en tus compras favoritas.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="col-md-4">
                                <div className="card-custom text-center" style={{ height: "100%" }}>
                                    <div style={{
                                        fontSize: "3rem",
                                        marginBottom: "1rem"
                                    }}>
                                        🛒
                                    </div>
                                    <h3 style={{
                                        color: "var(--primary-color)",
                                        marginBottom: "1rem"
                                    }}>
                                        Carrito Inteligente
                                    </h3>
                                    <p style={{
                                        color: "var(--secondary-color)"
                                    }}>
                                        Gestiona tus compras de manera fácil y segura con nuestro carrito inteligente.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
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
            </main>

            {/* Footer */}
            <footer style={{
                backgroundColor: "var(--primary-color)",
                color: "var(--background-color)",
                padding: "2rem",
                textAlign: "center"
            }}>
                <div className="container">
                    <p style={{ margin: "0" }}>
                        © 2024 Loopie. Todos los derechos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
}



