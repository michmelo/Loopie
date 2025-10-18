// IMPORTS
import Navbar from "../components/Navbar";              // Componente de barra de navegación

// COMPONENTE CHECKOUT
/**
 * Página de checkout de la aplicación Loopie
 * Proceso de finalización de compra
 */
export default function Checkout() {
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
                                Finalizar Compra
                            </h1>
                            <p style={{
                                color: "var(--secondary-color)",
                                fontSize: "1.1rem",
                                textAlign: "center",
                                maxWidth: "600px",
                                margin: "0 auto"
                            }}>
                                Completa tu información para procesar el pedido
                            </p>
                        </div>
                    </div>

                    {/* Formulario de checkout */}
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <div className="card-custom mb-4">
                                <h3>Información de Envío</h3>
                                
                                <div className="row">
                                    <div className="col-12 col-md-6 mb-3">
                                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                                            Nombre Completo
                                        </label>
                                        <input 
                                            type="text" 
                                            className="form-control-custom"
                                            placeholder="Ingresa tu nombre completo"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6 mb-3">
                                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                                            Teléfono
                                        </label>
                                        <input 
                                            type="tel" 
                                            className="form-control-custom"
                                            placeholder="Tu número de teléfono"
                                        />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                                            Dirección
                                        </label>
                                        <input 
                                            type="text" 
                                            className="form-control-custom"
                                            placeholder="Calle, número, colonia"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6 mb-3">
                                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                                            Ciudad
                                        </label>
                                        <input 
                                            type="text" 
                                            className="form-control-custom"
                                            placeholder="Tu ciudad"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6 mb-3">
                                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                                            Código Postal
                                        </label>
                                        <input 
                                            type="text" 
                                            className="form-control-custom"
                                            placeholder="CP"
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card-custom">
                                <h3>Método de Pago</h3>
                                
                                <div className="mb-3">
                                    <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                                        Número de Tarjeta
                                    </label>
                                    <input 
                                        type="text" 
                                        className="form-control-custom"
                                        placeholder="1234 5678 9012 3456"
                                    />
                                </div>
                                
                                <div className="row">
                                    <div className="col-12 col-md-6 mb-3">
                                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                                            Fecha de Vencimiento
                                        </label>
                                        <input 
                                            type="text" 
                                            className="form-control-custom"
                                            placeholder="MM/AA"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6 mb-3">
                                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                                            CVV
                                        </label>
                                        <input 
                                            type="text" 
                                            className="form-control-custom"
                                            placeholder="123"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-12 col-lg-4">
                            {/* Resumen del pedido */}
                            <div className="card-custom">
                                <h3>Resumen del Pedido</h3>
                                
                                <div style={{ marginBottom: "1rem" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                                        <span>Item 1</span>
                                        <span>$9.999.999</span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                                        <span>Item 2</span>
                                        <span>$9.999.999</span>
                                    </div>
                                    <hr />
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                                        <span>Subtotal:</span>
                                        <span>$19.999.998</span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                                        <span>Envío:</span>
                                        <span>$9.999.999</span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                                        <span>Impuestos:</span>
                                        <span>$9.999.999</span>
                                    </div>
                                    <hr />
                                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "1.2rem" }}>
                                        <span>Total:</span>
                                        <span>$29.999.998</span>
                                    </div>
                                </div>
                                
                                <button className="btn-custom" style={{ width: "100%", marginBottom: "1rem" }}>
                                    Confirmar Pedido
                                </button>
                                
                                <p style={{ fontSize: "0.9rem", color: "var(--secondary-color)", textAlign: "center" }}>
                                    Al confirmar, aceptas nuestros términos y condiciones
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

