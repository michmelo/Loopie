import { getAllUsers } from "../data/api/api";
import { validateLoginData } from "./validation";

/**
 * Procesa el intento de inicio de sesión.
 * * @param {string} identifier - Usuario o correo.
 * @param {string} password - Contraseña.
 * @returns {Promise<{ user: object | null, error: string | null }>} 
 */
export async function authenticateUser(identifier, password) {
    const validationError = validateLoginData(identifier, password);
    if (validationError) {
        return { user: null, error: validationError };
    }

    const usuarios = await getAllUsers();

    const user = usuarios.find((usr) => 
        usr.username === identifier || usr.email === identifier
    );

    if (!user) {
        return { user: null, error: "Usuario o correo no encontrado" };
    }

    return { user: user, error: null };
}