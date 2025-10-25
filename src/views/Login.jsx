// IMPORTS 
import { useState } from "react";                    // Hook para manejo de estado local
import { useNavigate } from "react-router-dom";      // Hook para navegación programática
import { useAuth } from "../hooks/useAuth";     // Hook personalizado para autenticación
import { obtenerUsuarios } from "../services/Api";             // Función para obtener usuarios del backend
import Navbar from "../components/Navbar";            // Componente de barra de navegación

// COMPONENTE LOGIN
/**
 * Componente de inicio de sesión
 * Maneja la autenticación del usuario y navegación al dashboard
 */
export default function Login() {
    // ESTADO LOCAL
    const [identifier, setIdentifier] = useState(""); // Campo para usuario o email
    const [password, setPassword] = useState("");     // Campo para contraseña
    const [error, setError] = useState("");           // Mensaje de error para mostrar al usuario
    
    // HOOKS
    const { login } = useAuth();                    // Función para iniciar sesión (establecer usuario)
    const navigate = useNavigate();                   // Función para navegación programática

    // FUNCIÓN DE MANEJO DE LOGIN
    /**
     * Maneja el proceso de autenticación del usuario
     * @param {Event} e - Evento del formulario
     */
    const handleLogin = async (e) => {
        e.preventDefault();                    // Prevenir recarga de página
        setError("");                         // Limpiar errores anteriores

        // Obtener lista de usuarios del backend (API mock)
        const usuarios = await obtenerUsuarios();

        // Buscar usuario por username o email
        const usuario = usuarios.users.find((usr) => 
            usr.username === identifier || usr.email === identifier
        );

        // Validar si el usuario existe
        if (!usuario) {
            setError("Usuario o correo no encontrado");
            return;
        }

        // ⚠️ VALIDACIÓN SIMPLE DE CONTRASEÑA (DEMO)
        // En producción, esto debería comparar con hash bcrypt en el backend
        if (password.length < 3) {
            setError("Contraseña inválida (mínimo 3 caracteres en este demo)");
            return;
        }

    // Autenticación exitosa
    login(usuario);                     // Establecer usuario en el contexto usando la API del proveedor
        navigate("/");                        // Navegar a la página principal
    };

    // RENDER 
    return (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--background-color)" }}>
            {/* Barra de navegación */}
            <Navbar />
            
            {/* Contenedor principal con Bootstrap para centrado perfecto */}
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: "calc(100vh - 80px)" }}>
            {/* Tarjeta de login con estilos personalizados */}
            <div className="card-custom" style={{ maxWidth: "400px", width: "100%" }}>
                {/* Título del formulario */}
                <h2 className="text-center mb-4">
                    Inicio de Sesión
                </h2>
                
                {/* Formulario de login */}
                <form onSubmit={handleLogin} className="d-flex flex-column gap-3 align-items-center">
                    {/* Campo de usuario/email */}
                    <input
                        type="text"
                        className="form-control-custom"
                        placeholder="Usuario o correo"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        required
                        style={{ maxWidth: "300px" }}
                    />
                    
                    {/* Campo de contraseña */}
                    <input
                        type="password"
                        className="form-control-custom"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ maxWidth: "300px" }}
                    />
                    
                    {/* Botón de envío */}
                    <button type="submit" className="btn-custom mt-3" style={{ width: "100%", maxWidth: "300px" }}>
                        Ingresar
                    </button>
                </form>
                
                {/* Mensaje de error (solo se muestra si hay error) */}
                {error && (
                    <div className="alert alert-danger mt-3 text-center" role="alert">
                        {error}
                    </div>
                )}

                {/* Enlace para crear cuenta */}
                <div className="text-center mt-4">
                    <p style={{ color: "var(--secondary-color)", marginBottom: "0.5rem" }}>
                        ¿No tienes una cuenta?
                    </p>
                    <button 
                        onClick={() => navigate("/register")}
                        style={{
                            background: "none",
                            border: "none",
                            color: "var(--accent-color)",
                            textDecoration: "underline",
                            cursor: "pointer",
                            fontSize: "1rem",
                            fontWeight: "500"
                        }}
                    >
                        Crear Cuenta
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
}
