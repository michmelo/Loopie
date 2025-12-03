/* API SERVICE */

import { ENDPOINTS } from './config';
import { apiClient } from './client';

// --- PRODUCTOS ---

export async function getAllProducts() {
    try {
        // GET /api/v1/productos
        return await apiClient.get(ENDPOINTS.PRODUCTOS);
    } catch (error) {
        console.error("getAllProducts:", error);
        return [];
    }
}

export async function getProductById(id) {
    try {
        // GET /api/v1/productos/{id}
        return await apiClient.get(`${ENDPOINTS.PRODUCTOS}/${id}`);
    } catch (error) {
        console.error("getProductById:", error);
        return null;
    }
}

export async function createProduct(productData) {
    try {
        // POST /api/v1/productos
        return await apiClient.post(ENDPOINTS.PRODUCTOS, productData);
    } catch (error) {
        console.error("createProduct:", error);
        throw error;
    }
}

// --- USUARIOS & AUTH ---

export async function getAllUsers() {
    try {
        return await apiClient.get(ENDPOINTS.USUARIOS);
    } catch (error) {
        console.error("getAllUsers:", error);
        return [];
    }
}

export async function loginUser(credentials) {
    try {
        // POST /api/v1/auth/login
        // Espera { email, password }
        return await apiClient.post(ENDPOINTS.AUTH_LOGIN, credentials);
    } catch (error) {
        console.error("loginUser:", error);
        throw error;
    }
}

export async function registerUser(userData) {
    try {
        // POST /api/v1/auth/register
        return await apiClient.post(ENDPOINTS.AUTH_REGISTER, userData);
    } catch (error) {
        console.error("registerUser:", error);
        throw error;
    }
}

/**
 * @deprecated Usar loginUser con el backend real.
 * Mantenido por compatibilidad si el backend no tiene endpoint de login.
 */
export async function validateUserMock(email, password) {
    try {
        const users = await getAllUsers();
        const user = users.find(
            (usr) => usr.email === email && usr.password === password
        );
        return user || null;
    } catch (error) {
        console.error("validateUserMock:", error);
        return null;
    }
}