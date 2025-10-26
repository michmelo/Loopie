// src/utils/authUtils.js

import { obtenerUsuarios } from "../services/api"; 
import { validateLoginData } from "./validation"; // Reutilizamos la validación de frontend

/**
 * Procesa el intento de inicio de sesión.
 * Incluye la validación de frontend y la simulación de la búsqueda en el 'backend'.
 * * @param {string} identifier - Usuario o correo.
 * @param {string} password - Contraseña.
 * @returns {Promise<{ user: object | null, error: string | null }>} 
 */
export async function authenticateUser(identifier, password) {
    // 1. Validar en el Frontend (reglas de negocio simples)
    const validationError = validateLoginData(identifier, password);
    if (validationError) {
        return { user: null, error: validationError };
    }

    // 2. Simulación de Llamada a la API (Lógica de backend mock)
    const usuarios = await obtenerUsuarios();

    // Buscar usuario por username o email
    const user = usuarios.users.find((usr) => 
        usr.username === identifier || usr.email === identifier
    );

    // 3. Validar si el usuario existe
    if (!user) {
        return { user: null, error: "Usuario o correo no encontrado" };
    }

    // 4. Simulación de Autenticación de Contraseña
    // Ya que no tenemos hash, solo asumimos que pasó si el user existe.
    // Si quisieras ser más estricto, podrías añadir:
    // if (user.password !== password) { return { user: null, error: "Contraseña incorrecta" }; }

    // 5. Autenticación exitosa
    return { user: user, error: null };
}