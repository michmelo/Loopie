import { loginUser } from "../data/api/api";
import { validateLoginData } from "./validation";

/**
 * Procesa el intento de inicio de sesión.
 * @param {string} identifier - Usuario o correo.
 * @param {string} password - Contraseña.
 * @returns {Promise<{ user: object | null, error: string | null }>} 
 */
export async function authenticateUser(identifier, password) {
    // 1. Validación local
    const validationError = validateLoginData(identifier, password);
    if (validationError) {
        return { user: null, error: validationError };
    }

    try {
        // 2. Intento de login con API Real
        // Asumimos que el backend espera { email: identifier, password: password }
        // Si el identifier no es email, el backend debería manejarlo o el front pre-procesarlo.
        const response = await loginUser({ email: identifier, password });

        // Asumimos que el backend devuelve el objeto usuario en la respuesta (o dentro de data)
        if (response && (response.id || response.user)) {
            return { user: response.user || response, error: null };
        } else {
            return { user: null, error: "Respuesta inválida del servidor" };
        }

    } catch (err) {
        console.error("Error en login:", err);
        // Manejo básico de errores
        return { user: null, error: "Credenciales incorrectas o error de conexión" };
    }
}