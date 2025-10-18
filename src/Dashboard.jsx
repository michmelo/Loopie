// IMPORTS 
import { useAuth } from "./Context/AuthContext";     // Hook personalizado para autenticación
import { useNavigate } from "react-router-dom";      // Hook para navegación programática
import Navbar from "./components/Navbar";            // Componente de barra de navegación

// COMPONENTE DASHBOARD
/**
 * Componente del dashboard principal
 * Muestra información del usuario autenticado y permite cerrar sesión
 */
export default function Dashboard() {
    // HOOKS 
    const { user, setUser } = useAuth();             // Usuario actual y función para actualizarlo
    const navigate = useNavigate();                  // Función para navegación programática

    // PROTECCIÓN DE RUTA
    // Redirigir al login si no hay usuario autenticado
    if (!user) {
        navigate("/login");
        return null; // Evitar renderizado innecesario
    }

    // FUNCIÓN DE LOGOUT
    /**
     * Maneja el cierre de sesión del usuario
     */
    const handleLogout = () => {
        setUser(null);                               // Limpiar usuario del contexto
        navigate("/");                              // Redirigir a la página principal
    };

    // RENDER
    return (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--background-color)" }}>
            {/* Barra de navegación */}
            <Navbar />
            
            {/* Contenedor principal con Bootstrap para centrado perfecto */}
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: "calc(100vh - 80px)" }}>
                {/* Tarjeta del dashboard con estilos personalizados */}
                <div className="card-custom" style={{ maxWidth: "600px", width: "100%" }}>
                {/* Título de bienvenida personalizado */}
                <h2 className="text-center mb-4">
                    ¡Bienvenido, {user?.username}!
                </h2>
                
                {/* Panel de información del usuario */}
                <div className="bg-light p-4 rounded mb-4" style={{ 
                    backgroundColor: "rgba(167, 202, 177, 0.3)",  // Fondo verde claro con transparencia
                    border: "1px solid var(--accent-color)"      // Borde con color de acento
                }}>
                    {/* Información del usuario */}
                    <p className="mb-2">
                        <strong>Usuario:</strong> {user?.username}
                    </p>
                    <p className="mb-0">
                        <strong>Correo:</strong> {user?.email}
                    </p>
                </div>
                
                {/* Botón de cerrar sesión */}
                <div className="text-center">
                    <button 
                        onClick={handleLogout} 
                        className="btn-custom" 
                        style={{ 
                            backgroundColor: "var(--secondary-color)",  // Fondo gris morado
                            color: "var(--background-color)",          // Texto claro
                            padding: "12px 24px",                      // Padding personalizado
                            fontSize: "1.1em"                          // Tamaño de fuente ligeramente mayor
                        }}
                    >
                        Cerrar sesión
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
}
