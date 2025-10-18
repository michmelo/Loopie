// IMPORTS
import Navbar from "../components/Navbar";              // Componente de barra de navegación

// COMPONENTE OFERTAS
/**
 * Página de ofertas de la aplicación Loopie
 * Muestra las mejores ofertas y descuentos disponibles
 */
export default function Ofertas() {
    // RENDER
    return (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--background-color)" }}>
            {/* Barra de navegación */}
            <Navbar />
            
            {/* Contenido principal */}
            <main className="container-fluid" style={{ padding: "2rem" }}>
                <div className="container">
                    {/* Header de la página */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <h1 style={{
                                color: "var(--primary-color)",
                                fontSize: "2.5rem",
                                fontWeight: "700",
                                marginBottom: "1rem",
                                textAlign: "center"
                            }}>
                                Ofertas Especiales
                            </h1>
                            <p style={{
                                color: "var(--secondary-color)",
                                fontSize: "1.1rem",
                                textAlign: "center",
                                maxWidth: "600px",
                                margin: "0 auto"
                            }}>
                                No te pierdas estas increíbles ofertas con descuentos exclusivos
                            </p>
                        </div>
                    </div>

                    {/* Grid de ofertas */}
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="card-custom">
                                <div style={{
                                    backgroundColor: "var(--accent-color)",
                                    color: "var(--primary-color)",
                                    padding: "0.5rem",
                                    borderRadius: "var(--border-radius-md)",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    marginBottom: "1rem"
                                }}>
                                    50% OFF
                                </div>
                                <h3>Categoria 1</h3>
                                <p>Descuento</p>
                                <button className="btn-custom">Ver Oferta</button>
                            </div>
                        </div>
                        
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="card-custom">
                                <div style={{
                                    backgroundColor: "var(--accent-color)",
                                    color: "var(--primary-color)",
                                    padding: "0.5rem",
                                    borderRadius: "var(--border-radius-md)",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    marginBottom: "1rem"
                                }}>
                                    30% OFF
                                </div>
                                <h3>Categoria 2</h3>
                                <p>Descuento</p>
                                <button className="btn-custom">Ver Oferta</button>
                            </div>
                        </div>
                        
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="card-custom">
                                <div style={{
                                    backgroundColor: "var(--accent-color)",
                                    color: "var(--primary-color)",
                                    padding: "0.5rem",
                                    borderRadius: "var(--border-radius-md)",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    marginBottom: "1rem"
                                }}>
                                    2x1
                                </div>
                                <h3>Categoria 3</h3>
                                <p>Descuento</p>
                                <button className="btn-custom">Ver Oferta</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

