// IMPORTS
import Navbar from "../components/Navbar";              // Componente de barra de navegación

// COMPONENTE CARRITO
/**
 * Página del carrito de compras de la aplicación Loopie
 * Muestra los productos agregados al carrito
 */
export default function Carrito() {
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
                                Mi Carrito
                            </h1>
                            <p style={{
                                color: "var(--secondary-color)",
                                fontSize: "1.1rem",
                                textAlign: "center",
                                maxWidth: "600px",
                                margin: "0 auto"
                            }}>
                                Revisa los productos que has seleccionado antes de finalizar tu compra
                            </p>
                        </div>
                    </div>

                    {/* Contenido del carrito */}
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            {/* Lista de productos en el carrito */}
                            <div className="card-custom mb-4">
                                <h3>Productos en tu carrito</h3>
                                
                                {/* Producto ejemplo */}
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "1rem",
                                    border: "1px solid var(--accent-color)",
                                    borderRadius: "var(--border-radius-md)",
                                    marginBottom: "1rem"
                                }}>
                                    <div style={{
                                        width: "80px",
                                        height: "80px",
                                        backgroundColor: "var(--light-color)",
                                        borderRadius: "var(--border-radius-md)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginRight: "1rem",
                                        fontSize: "2rem"
                                    }}>
                                        📱
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h4>Item 1</h4>
                                        <p style={{ color: "var(--secondary-color)", margin: "0" }}>
                                            Cantidad: 1 | Precio: $9.999.999
                                        </p>
                                    </div>
                                    <button className="btn-custom" style={{ marginLeft: "1rem" }}>
                                        Eliminar
                                    </button>
                                </div>
                                
                                {/* Producto ejemplo 2 */}
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "1rem",
                                    border: "1px solid var(--accent-color)",
                                    borderRadius: "var(--border-radius-md)",
                                    marginBottom: "1rem"
                                }}>
                                    <div style={{
                                        width: "80px",
                                        height: "80px",
                                        backgroundColor: "var(--light-color)",
                                        borderRadius: "var(--border-radius-md)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginRight: "1rem",
                                        fontSize: "2rem"
                                    }}>
                                        🎧
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h4>Item 2</h4>
                                        <p style={{ color: "var(--secondary-color)", margin: "0" }}>
                                            Cantidad: 2 | Precio: $9.999.999
                                        </p>
                                    </div>
                                    <button className="btn-custom" style={{ marginLeft: "1rem" }}>
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-12 col-lg-4">
                            {/* Resumen del pedido */}
                            <div className="card-custom">
                                <h3>Resumen del Pedido</h3>
                                
                                <div style={{ marginBottom: "1rem" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                                        <span>Subtotal:</span>
                                        <span>$1,199.97</span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                                        <span>Envío:</span>
                                        <span>$9.99</span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                                        <span>Impuestos:</span>
                                        <span>$120.00</span>
                                    </div>
                                    <hr />
                                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "1.2rem" }}>
                                        <span>Total:</span>
                                        <span>$1,329.96</span>
                                    </div>
                                </div>
                                
                                <button className="btn-custom" style={{ width: "100%", marginBottom: "1rem" }}>
                                    Proceder al Checkout
                                </button>
                                
                                <button className="btn-custom" style={{ width: "100%", backgroundColor: "var(--secondary-color)" }}>
                                    Continuar Comprando
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

