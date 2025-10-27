/* API SIMULADA */

import { ENDPOINTS } from './config';

// PRODUCTOS (all)
export async function getAllProducts() {
    try {
        const response = await fetch(ENDPOINTS.PRODUCTOS);
        if (!response.ok) {
            throw new Error("Error al obtener los productos.");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("getAllProducts:",error);
        return { total_products: 0, products: [] };
    }
}

// USUARIOS (all)
export async function getAllUsers() {
    try {
        const response = await fetch(ENDPOINTS.USUARIOS);
        if (!response.ok){
            throw new Error("Error al obtener usuarios.");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("getAllUsers:", error);
        return [];
    }
}

// VALIDAR LOGIN
export async function validateUser(email, password){
    try {
        const users = await getAllUsers();
        const user = users.find(
            (usr) => usr.email === email && usr.password === password
        );
        return user || null;
    } catch (error) {
        console.error("validateUser:", error);
        return null;
    }
}