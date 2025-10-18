// IMPORTS
import Navbar from "../components/Navbar";              // Componente de barra de navegación

// COMPONENTE CATEGORÍAS
/**
 * Página de categorías de la aplicación Loopie
 * Muestra todas las categorías de productos disponibles
 */
export default function Categorias() {
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
                                Categorías
                            </h1>
                            <p style={{
                                color: "var(--secondary-color)",
                                fontSize: "1.1rem",
                                textAlign: "center",
                                maxWidth: "600px",
                                margin: "0 auto"
                            }}>
                                Explora nuestros productos organizados por categorías
                            </p>
                        </div>
                    </div>

                    {/* Grid de categorías */}
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 mb-4">
                            <div className="card-custom text-center">
                                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}></div>
                                <h3>Categoria 1</h3>
                                <p>Descripcion</p>
                                <button className="btn-custom">Explorar</button>
                            </div>
                        </div>
                        
                        <div className="col-12 col-md-6 col-lg-3 mb-4">
                            <div className="card-custom text-center">
                                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}></div>
                                <h3>Categoria 2</h3>
                                <p>Descripcion</p>
                                <button className="btn-custom">Explorar</button>
                            </div>
                        </div>
                        
                        <div className="col-12 col-md-6 col-lg-3 mb-4">
                            <div className="card-custom text-center">
                                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}></div>
                                <h3>Categoria 3</h3>
                                <p>Descripcion</p>
                                <button className="btn-custom">Explorar</button>
                            </div>
                        </div>
                        
                        <div className="col-12 col-md-6 col-lg-3 mb-4">
                            <div className="card-custom text-center">
                                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}></div>
                                <h3>Categoria 4</h3>
                                <p>Descripcion</p>
                                <button className="btn-custom">Explorar</button>
                            </div>
                        </div>
                        
                        <div className="col-12 col-md-6 col-lg-3 mb-4">
                            <div className="card-custom text-center">
                                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}></div>
                                <h3>Categoria 5</h3>
                                <p>Descripcion</p>
                                <button className="btn-custom">Explorar</button>
                            </div>
                        </div>
                        
                        <div className="col-12 col-md-6 col-lg-3 mb-4">
                            <div className="card-custom text-center">
                                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}></div>
                                <h3>Categoria 6</h3>
                                <p>Descripcion</p>
                                <button className="btn-custom">Explorar</button>
                            </div>
                        </div>
                        
                        <div className="col-12 col-md-6 col-lg-3 mb-4">
                            <div className="card-custom text-center">
                                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}></div>
                                <h3>Categoria 7</h3>
                                <p>Descripcion</p>
                                <button className="btn-custom">Explorar</button>
                            </div>
                        </div>
                        
                        <div className="col-12 col-md-6 col-lg-3 mb-4">
                            <div className="card-custom text-center">
                                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}></div>
                                <h3>Categoria 8</h3>
                                <p>Descripcion</p>
                                <button className="btn-custom">Explorar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

