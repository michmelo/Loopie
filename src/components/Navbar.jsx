// IMPORTS 
import { Link, useNavigate } from "react-router-dom";  // Componentes de enrutamiento
import { useAuth } from "../hooks/useAuth";      // Hook personalizado para autenticación
import logoImage from "../assets/img/logo/Loopie.png";            // Importar el logo png

// COMPONENTE NAVBAR
/**
 * Barra de navegación principal de la aplicación
 * Incluye logo, nombre de la marca y pestañas de navegación
 */
export default function Navbar() {
    // HOOKS 
    const { user } = useAuth();                        // Usuario actual autenticado
    const navigate = useNavigate();                    // Función para navegación programática

    // FUNCIÓN DE NAVEGACIÓN 
    /**
     * Maneja la navegación al hacer clic en el logo/nombre
     */
    const handleLogoClick = () => {
        navigate("/");
    };

    // RENDER
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{
            backgroundColor: "var(--background-color)",
            borderBottom: "2px solid var(--accent-color)",
            boxShadow: "var(--shadow-md)"
        }}>
            <div className="container-fluid">
                {/* Logo y nombre de la marca */}
                <div 
                    className="navbar-brand d-flex align-items-center" 
                    onClick={handleLogoClick}
                    style={{ 
                        cursor: "pointer",
                        color: "var(--primary-color)",
                        fontWeight: "700",
                        fontSize: "1.5rem"
                    }}
                >
                    <img 
                        src={logoImage} 
                        alt="Loopie Logo" 
                        style={{
                            width: "120px",
                            height: "50px",
                            marginRight: "12px",
                            objectFit: "contain"
                        }}
                    />
                </div>

                {/* Botón para colapsar en móviles */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{
                        borderColor: "var(--accent-color)",
                        color: "var(--primary-color)",
                        border: "2px solid var(--accent-color)",
                        borderRadius: "var(--border-radius-md)"
                    }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menú de navegación */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {/* Pestaña Tiendas */}
                        <li className="nav-item">
                            <Link 
                                className="nav-link" 
                                to="/tiendas"
                                style={{
                                    color: "var(--primary-color)",
                                    fontWeight: "500",
                                    padding: "8px 16px",
                                    borderRadius: "var(--border-radius-md)",
                                    transition: "all 0.25s ease"
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "var(--light-color)";
                                    e.target.style.color = "var(--primary-color)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "transparent";
                                    e.target.style.color = "var(--primary-color)";
                                }}
                            >
                                Tiendas
                            </Link>
                        </li>

                        {/* Pestaña Ofertas */}
                        <li className="nav-item">
                            <Link 
                                className="nav-link" 
                                to="/ofertas"
                                style={{
                                    color: "var(--primary-color)",
                                    fontWeight: "500",
                                    padding: "8px 16px",
                                    borderRadius: "var(--border-radius-md)",
                                    transition: "all 0.25s ease"
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "var(--light-color)";
                                    e.target.style.color = "var(--primary-color)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "transparent";
                                    e.target.style.color = "var(--primary-color)";
                                }}
                            >
                                Ofertas
                            </Link>
                        </li>

                        {/* Pestaña Categorías */}
                        <li className="nav-item">
                            <Link 
                                className="nav-link" 
                                to="/categorias"
                                style={{
                                    color: "var(--primary-color)",
                                    fontWeight: "500",
                                    padding: "8px 16px",
                                    borderRadius: "var(--border-radius-md)",
                                    transition: "all 0.25s ease"
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "var(--light-color)";
                                    e.target.style.color = "var(--primary-color)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "transparent";
                                    e.target.style.color = "var(--primary-color)";
                                }}
                            >
                                Categorías
                            </Link>
                        </li>

                        {/* Pestaña Carrito */}
                        <li className="nav-item">
                            <Link 
                                className="nav-link" 
                                to="/carrito"
                                style={{
                                    color: "var(--primary-color)",
                                    fontWeight: "500",
                                    padding: "8px 16px",
                                    borderRadius: "var(--border-radius-md)",
                                    transition: "all 0.25s ease"
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "var(--light-color)";
                                    e.target.style.color = "var(--primary-color)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "transparent";
                                    e.target.style.color = "var(--primary-color)";
                                }}
                            >
                                Carrito
                            </Link>
                        </li>

                        {/* Pestaña Perfil de Usuario */}
                        {user ? (
                            <li className="nav-item">
                                {/* Si el usuario está autenticado, mostrar enlace al dashboard */}
                                <Link 
                                    className="nav-link" 
                                    to="/dashboard"
                                    style={{
                                        color: "var(--primary-color)",
                                        fontWeight: "500",
                                        padding: "8px 16px",
                                        borderRadius: "var(--border-radius-md)",
                                        transition: "all 0.25s ease"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = "var(--light-color)";
                                        e.target.style.color = "var(--primary-color)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = "transparent";
                                        e.target.style.color = "var(--primary-color)";
                                    }}
                                >
                                    {user.username}
                                </Link>
                            </li>
                        ) : (
                            <>
                                {/* Si no está autenticado, mostrar enlaces al login y registro */}
                                <li className="nav-item">
                                    <Link 
                                        className="nav-link" 
                                        to="/login"
                                        style={{
                                            color: "var(--primary-color)",
                                            fontWeight: "500",
                                            padding: "8px 16px",
                                            borderRadius: "var(--border-radius-md)",
                                            transition: "all 0.25s ease"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = "var(--light-color)";
                                            e.target.style.color = "var(--primary-color)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = "transparent";
                                            e.target.style.color = "var(--primary-color)";
                                        }}
                                    >
                                        Iniciar Sesión
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                        className="nav-link" 
                                        to="/register"
                                        style={{
                                            color: "var(--primary-color)",
                                            fontWeight: "500",
                                            padding: "8px 16px",
                                            borderRadius: "var(--border-radius-md)",
                                            transition: "all 0.25s ease"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = "var(--light-color)";
                                            e.target.style.color = "var(--primary-color)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = "transparent";
                                            e.target.style.color = "var(--primary-color)";
                                        }}
                                    >
                                        Registrarse
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

