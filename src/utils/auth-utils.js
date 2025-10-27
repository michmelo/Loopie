import { getAllUsers } from "../data/api/api";
import { getStoredUsers } from "../data/localStorageService";
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

    const apiUsers = await getAllUsers();
    const localUsers = getStoredUsers();
    // combinar usuarios de API y los registrados en localStorage (los locales toman prioridad si hay mismo id)
    const usuarios = Array.isArray(apiUsers) ? [...apiUsers] : [];
    // añadimos los locales al final para que puedan ser encontrados también
    if (Array.isArray(localUsers) && localUsers.length) {
        usuarios.push(...localUsers);
    }

    const user = usuarios.find((usr) =>
        usr.username === identifier || usr.email === identifier
    );

    if (!user) {
        return { user: null, error: "Usuario o correo no encontrado" };
    }

    // Validar contraseña (en este demo se guardan contraseñas en claro)
    if (user.password !== password) {
        return { user: null, error: "Contraseña incorrecta" };
    }

    return { user: user, error: null };
}