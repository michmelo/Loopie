// IMPORTS
import Navbar from "../components/Navbar";              // Componente de barra de navegación

// COMPONENTE ADMIN PANEL
/**
 * Panel de administración de la aplicación Loopie
 * Acceso restringido para administradores
 */
export default function AdminPanel() {
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
                                Panel de Administración
                            </h1>
                            <p style={{
                                color: "var(--secondary-color)",
                                fontSize: "1.1rem",
                                textAlign: "center",
                                maxWidth: "600px",
                                margin: "0 auto"
                            }}>
                                Gestiona productos, usuarios y configuraciones del sistema
                            </p>
                        </div>
                    </div>

                    {/* Dashboard de administración */}
                    <div className="row">
                        {/* Estadísticas rápidas */}
                        <div className="col-12 col-md-6 col-lg-3 mb-4">
                            <div className="card-custom text-center">
                                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}></div>
                                <h3>Usuarios</h3>
                                <p style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--accent-color)" }}>1,234</p>
                                <button className="btn-custom">Gestionar</button>
                            </div>
                        </div>
                        
                        <div className="col-12 col-md-6 col-lg-3 mb-4">
                            <div className="card-custom text-center">
                                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}></div>
                                <h3>Productos</h3>
                                <p style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--accent-color)" }}>567</p>
                                <button className="btn-custom">Gestionar</button>
                            </div>
                        </div>
                        
                        <div className="col-12 col-md-6 col-lg-3 mb-4">
                            <div className="card-custom text-center">
                                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}></div>
                                <h3>Pedidos</h3>
                                <p style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--accent-color)" }}>89</p>
                                <button className="btn-custom">Ver Pedidos</button>
                            </div>
                        </div>
                        
                        <div className="col-12 col-md-6 col-lg-3 mb-4">
                            <div className="card-custom text-center">
                                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}></div>
                                <h3>Ventas</h3>
                                <p style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--accent-color)" }}>$45,678</p>
                                <button className="btn-custom">Ver Reportes</button>
                            </div>
                        </div>
                    </div>

                    {/* Herramientas de administración */}
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-4">
                            <div className="card-custom">
                                <h3>Herramientas Rápidas</h3>
                                
                                <div className="d-grid gap-2">
                                    <button className="btn-custom">
                                        Agregar Producto
                                    </button>
                                    <button className="btn-custom">
                                        Ver Estadísticas
                                    </button>
                                    <button className="btn-custom">
                                        Enviar Notificaciones
                                    </button>
                                    <button className="btn-custom">
                                        Actualizar Inventario
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-12 col-lg-6 mb-4">
                            <div className="card-custom">
                                <h3>Actividad Reciente</h3>
                                
                                <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                                    <div style={{
                                        padding: "0.75rem",
                                        borderBottom: "1px solid var(--accent-color)",
                                        marginBottom: "0.5rem"
                                    }}>
                                        <strong>Nuevo pedido #1234</strong><br />
                                        <small style={{ color: "var(--secondary-color)" }}>
                                            Hace 5 minutos
                                        </small>
                                    </div>
                                    
                                    <div style={{
                                        padding: "0.75rem",
                                        borderBottom: "1px solid var(--accent-color)",
                                        marginBottom: "0.5rem"
                                    }}>
                                        <strong>Usuario registrado</strong><br />
                                        <small style={{ color: "var(--secondary-color)" }}>
                                            Hace 15 minutos
                                        </small>
                                    </div>
                                    
                                    <div style={{
                                        padding: "0.75rem",
                                        borderBottom: "1px solid var(--accent-color)",
                                        marginBottom: "0.5rem"
                                    }}>
                                        <strong>Producto actualizado</strong><br />
                                        <small style={{ color: "var(--secondary-color)" }}>
                                            Hace 1 hora
                                        </small>
                                    </div>
                                    
                                    <div style={{
                                        padding: "0.75rem",
                                        borderBottom: "1px solid var(--accent-color)",
                                        marginBottom: "0.5rem"
                                    }}>
                                        <strong>Pedido completado #1233</strong><br />
                                        <small style={{ color: "var(--secondary-color)" }}>
                                            Hace 2 horas
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

