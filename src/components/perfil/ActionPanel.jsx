/**
 * Panel con acciones rápidas para usuario
 * @param {{ handleLogout: () => void }} props
 */
import { useNavigate } from "react-router-dom";

export default function ActionPanel({ handleLogout }) {
    const navigate = useNavigate();

    const actions = [
        { name: "Ver Historial de Pedidos", target: "/pedidos" },
        { name: "Editar Dirección de Envío", target: "/direccion" },
        { name: "Cambiar Contraseña", target: "/cambiar-contrasena" },
    ];
    
    return (
        <div className="card-custom" style={{ maxWidth: "800px", margin: "2rem auto" }}>
            <h3>Acciones Rápidas</h3>
            
            <div className="d-grid gap-3">
                {actions.map((action, index) => (
                    <button 
                        id={index}
                        className="btn-custom" 
                        onClick={() => navigate(action.target)}
                    >
                        {action.name}
                    </button>
                ))}
                
                <button 
                    className="btn-custom" 
                    onClick={handleLogout}
                    style={{ 
                        backgroundColor: "var(--pink-accent)",
                        color: "var(--background-color)",
                        borderColor: "var(--pink-accent)"
                    }}
                >
                    Cerrar Sesión
                </button>
            </div>
        </div>
    );
}