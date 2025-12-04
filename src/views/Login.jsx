// IMPORTS 
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Navbar from "../components/Navbar";
import AppFooter from "../components/Footer";
import AuthFormContainer from "../components/auth/AuthFormContainer";
import LoginForm from "../components/auth/LoginForm";
import AuthMessage from "../components/auth/AuthMessage";
import AuthLink from "../components/auth/AuthLink";
import { loginUser } from "../data/api/api";

/**
 * LOGIN
 * Gestiona el estado y la navegación, dejando la autenticación al módulo de API.
 */
export default function Login() {
    // ESTADO LOCAL
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // HOOKS
    const { login } = useAuth();
    const navigate = useNavigate();

    // MANEJO DE LOGIN
    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            // Enviamos el identificador como username (puede ser username o email)
            const response = await loginUser({
                username: identifier,
                password,
            });

            // El backend podría devolver { user, token } o solo user
            const userFromResponse = response?.user ?? response;

            if (!userFromResponse) {
                setError("Credenciales inválidas. Intenta nuevamente.");
                return;
            }

            // Guardamos usuario en el contexto (esto maneja fakeToken + localStorage)
            login(userFromResponse);

            // Redirigimos al perfil
            navigate("/perfil");
        } catch (err) {
            console.error("Error en login:", err);
            setError("Credenciales inválidas o error al iniciar sesión.");
        }
    };

    // RENDER
    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: "var(--background-color)",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Navbar />

            <div
                style={{ flexGrow: 1 }}
                className="container-fluid d-flex justify-content-center align-items-center"
            >
                <AuthFormContainer>
                    <h2 className="text-center mb-4">Inicio de Sesión</h2>

                    <LoginForm
                        id={identifier}
                        password={password}
                        setId={setIdentifier}
                        setPassword={setPassword}
                        handleLogin={handleLogin}
                    />

                    <AuthMessage type="error" message={error} />

                    <AuthLink
                        quest="¿No tienes una cuenta?"
                        linkText="Crear Cuenta"
                        to="/register"
                    />
                </AuthFormContainer>
            </div>

            <AppFooter />
        </div>
    );
}
