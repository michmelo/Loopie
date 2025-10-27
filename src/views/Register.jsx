// IMPORTS 
import { useState } from "react";                    
import { useNavigate } from "react-router-dom";      
import { useAuth } from "../hooks/useAuth";    
import Navbar from "../components/Navbar";            
import AppFooter from "../components/Footer";       
import AuthFormContainer from "../components/auth/AuthFormContainer";
import RegisterForm from "../components/auth/RegisterForm";
import AuthMessage from "../components/auth/AuthMessage";
import AuthLink from "../components/auth/AuthLink";
import { validateRegistrationData } from "../utils/validation";
import { saveStoredUser } from "../data/localStorageService";


// REGISTRO
/* Maneja el estado, la validación y la lógica de registro */
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
    const [error, setError] = useState("");           
    const [success, setSuccess] = useState(false);    

    // HOOKS
    const { login } = useAuth();                    
    const navigate = useNavigate();                   

    // FUNCIÓN DE MANEJO DE CAMBIOS EN INPUTS
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // FUNCIÓN DE MANEJO DE REGISTRO
    const handleRegister = async (e) => {
        e.preventDefault();                   
        setError("");                   
        setSuccess(false);                    

        const validationError = validateRegistrationData(formData);
        
        if (validationError) {
            setError(validationError); 
            return;
        }

        const nuevoUsuario = {
            id: String(Date.now()),
            username: formData.username || formData.email.split("@")[0],
            nombre: formData.firstName,
            apellido: formData.lastName,
            email: formData.email,
            password: formData.password,
            rol: "usuario",
            direccion: ""
        };

        // GUARDAR LOCAL (NO HAY POST DISPONIBLE)
        saveStoredUser(nuevoUsuario);

        setSuccess(true);
        
        setTimeout(() => {
            // No se pasa la contraseña por seguridad
            const publicUser = { ...nuevoUsuario };
            delete publicUser.password;
            login(publicUser);
            navigate("/perfil");
        }, 1500);
    };

    // RENDER
    return (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--background-color)", display: "flex", flexDirection: "column" }}>
            <Navbar />
            
            <div style={{ flexGrow: 1 }} className="container-fluid d-flex justify-content-center align-items-center">

                <AuthFormContainer>
                    <h2 className="text-center mb-4">
                        Crear Cuenta
                    </h2>

                    <RegisterForm 
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleRegister={handleRegister}
                    />

                    <AuthMessage type="error" message={error} />
                    <AuthMessage type="success" message={success ? "¡Cuenta creada exitosamente! Redirigiendo..." : ""} />

                    <AuthLink 
                        question="¿Ya tienes una cuenta?"
                        linkText="Iniciar Sesión"
                        to="/login"
                    />

                </AuthFormContainer>

            </div>
            
            <AppFooter />
        </div>
    );
}