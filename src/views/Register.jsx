// IMPORTS 
import { useState } from "react";                    // Hook para manejo de estado local
import { useNavigate } from "react-router-dom";      // Hook para navegación programática
import { useAuth } from "../Context/AuthContext";     // Hook personalizado para autenticación
import Navbar from "../components/Navbar";            // Componente de barra de navegación

// COMPONENTE REGISTER
/**
 * Componente de registro de nuevos usuarios
 * Permite crear una cuenta con los datos requeridos
 */
export default function Register() {
    // ESTADO LOCAL
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");           // Mensaje de error para mostrar al usuario
    const [success, setSuccess] = useState(false);    // Estado de éxito del registro

    // HOOKS
    const { setUser } = useAuth();                    // Función para establecer usuario autenticado
    const navigate = useNavigate();                   // Función para navegación programática

    // FUNCIÓN DE MANEJO DE CAMBIOS EN INPUTS
    /**
     * Actualiza el estado del formulario cuando el usuario escribe
     * @param {Event} e - Evento del input
     */
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // FUNCIÓN DE MANEJO DE REGISTRO
    /**
     * Maneja el proceso de registro del nuevo usuario
     * @param {Event} e - Evento del formulario
     */
    const handleRegister = async (e) => {
        e.preventDefault();                    // Prevenir recarga de página
        setError("");                         // Limpiar errores anteriores
        setSuccess(false);                    // Resetear estado de éxito

        // Validar que todos los campos estén completos
        if (!formData.username || !formData.email || !formData.firstName || 
            !formData.lastName || !formData.password || !formData.confirmPassword) {
            setError("Todos los campos son obligatorios");
            return;
        }

        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError("Por favor ingresa un email válido");
            return;
        }

        // Validar longitud de contraseña
        if (formData.password.length < 3) {
            setError("La contraseña debe tener al menos 3 caracteres");
            return;
        }

        // Validar que las contraseñas coincidan
        if (formData.password !== formData.confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }

        // Crear objeto de nuevo usuario siguiendo el formato de la API
        const nuevoUsuario = {
            id: Date.now(), // ID temporal basado en timestamp
            username: formData.username,
            email: formData.email,
            first_name: formData.firstName,
            last_name: formData.lastName,
            is_active: true,
            created_at: new Date().toISOString()
        };

        // ⚠️ NOTA: En producción, esto debería enviar los datos al backend
        // Por ahora, simulamos el registro exitoso
        setSuccess(true);
        
        // Auto-login después del registro
        setTimeout(() => {
            setUser(nuevoUsuario);                // Establecer usuario en el contexto
            navigate("/");                        // Navegar a la página principal
        }, 1500);
    };

    // RENDER
    return (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--background-color)" }}>
            {/* Barra de navegación */}
            <Navbar />
            
            {/* Contenedor principal con Bootstrap para centrado perfecto */}
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: "calc(100vh - 80px)" }}>
            {/* Tarjeta de registro con estilos personalizados */}
            <div className="card-custom" style={{ maxWidth: "500px", width: "100%" }}>
                {/* Título del formulario */}
                <h2 className="text-center mb-4">
                    Crear Cuenta
                </h2>

                {/* Formulario de registro */}
                <form onSubmit={handleRegister} className="d-flex flex-column gap-3 align-items-center">
                    {/* Campo de nombre de usuario */}
                    <input
                        type="text"
                        name="username"
                        className="form-control-custom"
                        placeholder="Nombre de usuario"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                        style={{ width: "100%", maxWidth: "400px" }}
                    />

                    {/* Campo de email */}
                    <input
                        type="email"
                        name="email"
                        className="form-control-custom"
                        placeholder="Correo electrónico"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        style={{ width: "100%", maxWidth: "400px" }}
                    />

                    {/* Campo de nombre */}
                    <input
                        type="text"
                        name="firstName"
                        className="form-control-custom"
                        placeholder="Nombre"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        style={{ width: "100%", maxWidth: "400px" }}
                    />

                    {/* Campo de apellido */}
                    <input
                        type="text"
                        name="lastName"
                        className="form-control-custom"
                        placeholder="Apellido"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        style={{ width: "100%", maxWidth: "400px" }}
                    />

                    {/* Campo de contraseña */}
                    <input
                        type="password"
                        name="password"
                        className="form-control-custom"
                        placeholder="Contraseña (mínimo 3 caracteres)"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        style={{ width: "100%", maxWidth: "400px" }}
                    />

                    {/* Campo de confirmación de contraseña */}
                    <input
                        type="password"
                        name="confirmPassword"
                        className="form-control-custom"
                        placeholder="Confirmar contraseña"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                        style={{ width: "100%", maxWidth: "400px" }}
                    />

                    {/* Botón de envío */}
                    <button type="submit" className="btn-custom mt-3" style={{ width: "100%", maxWidth: "400px" }}>
                        Registrarse
                    </button>
                </form>

                {/* Mensaje de error (solo se muestra si hay error) */}
                {error && (
                    <div className="alert alert-danger mt-3 text-center" role="alert">
                        {error}
                    </div>
                )}

                {/* Mensaje de éxito (solo se muestra si el registro fue exitoso) */}
                {success && (
                    <div className="alert alert-success mt-3 text-center" role="alert" style={{
                        backgroundColor: "var(--light-color)",
                        color: "var(--primary-color)",
                        border: "1px solid var(--accent-color)"
                    }}>
                        ¡Cuenta creada exitosamente! Redirigiendo...
                    </div>
                )}

                {/* Enlace para volver al login */}
                <div className="text-center mt-4">
                    <p style={{ color: "var(--secondary-color)", marginBottom: "0.5rem" }}>
                        ¿Ya tienes una cuenta?
                    </p>
                    <button 
                        onClick={() => navigate("/login")}
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
                        Iniciar Sesión
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
}
