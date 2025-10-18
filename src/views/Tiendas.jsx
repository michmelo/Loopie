// IMPORTS
import Navbar from "../components/Navbar";              // Componente de barra de navegación

// COMPONENTE TIENDAS
/**
 * Página de tiendas de la aplicación Loopie
 * Muestra un listado de tiendas disponibles
 */
export default function Tiendas() {
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
                                🏪 Nuestras Tiendas
                            </h1>
                            <p style={{
                                color: "var(--secondary-color)",
                                fontSize: "1.1rem",
                                textAlign: "center",
                                maxWidth: "600px",
                                margin: "0 auto"
                            }}>
                                Descubre las mejores tiendas y encuentra los productos que necesitas
                            </p>
                        </div>
                    </div>

                    {/* Grid de tiendas */}
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="card-custom">
                                <h3>Tienda 1</h3>
                                <p>Descripcion</p>
                                <button className="btn-custom">Ver Productos</button>
                            </div>
                        </div>
                        
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="card-custom">
                                <h3>Tienda 2</h3>
                                <p>Descripcion</p>
                                <button className="btn-custom">Ver Productos</button>
                            </div>
                        </div>
                        
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="card-custom">
                                <h3>Tienda 3</h3>
                                <p>Descripcion</p>
                                <button className="btn-custom">Ver Productos</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

