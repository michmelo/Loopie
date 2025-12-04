import * as config from "./config";
import { apiClient } from "./client";

const {
    ENDPOINTS = {},
    API_BASE_URL,
    API_AUTH_BASE_URL,
    API_USER_BASE_URL,
    API_PRODUCT_BASE_URL,
    API_ORDER_BASE_URL,
} = config;

// Fallbacks por servicio: si no hay base específica, usa API_BASE_URL.
const AUTH_BASE = API_AUTH_BASE_URL ?? API_BASE_URL ?? "";
const USER_BASE = API_USER_BASE_URL ?? API_BASE_URL ?? "";
const PRODUCT_BASE = API_PRODUCT_BASE_URL ?? API_BASE_URL ?? "";
const ORDER_BASE = API_ORDER_BASE_URL ?? API_BASE_URL ?? "";

// Fallback de endpoints si no están definidos en ENDPOINTS
const EP = {
    PRODUCTOS: ENDPOINTS.PRODUCTOS ?? "api/products",
    USUARIOS: ENDPOINTS.USUARIOS ?? "api/v1/users",
    AUTH_LOGIN: ENDPOINTS.AUTH_LOGIN ?? "api/v1/auth/login",
    AUTH_REGISTER: ENDPOINTS.AUTH_REGISTER ?? "api/v1/auth/register",
};

// Endpoint adicional para /me del auth-service (no está en ENDPOINTS)
const AUTH_ME = "api/v1/auth/me";

// Endpoint de pedidos (order-service)
const PEDIDOS = "api/v1/pedidos";

// PRODUCTOS

export async function getAllProducts() {
    try {
        return await apiClient.get(EP.PRODUCTOS, { baseUrl: PRODUCT_BASE });
    } catch (error) {
        console.error("getAllProducts:", error);
        return [];
    }
}

export async function getProductById(idProducto) {
    try {
        return await apiClient.get(`${EP.PRODUCTOS}/${idProducto}`, {
            baseUrl: PRODUCT_BASE,
        });
    } catch (error) {
        console.error("getProductById:", error);
        throw error;
    }
}

export async function createProduct(product) {
    try {
        return await apiClient.post(EP.PRODUCTOS, product, {
            baseUrl: PRODUCT_BASE,
        });
    } catch (error) {
        console.error("createProduct:", error);
        throw error;
    }
}

export async function updateProduct(idProducto, product) {
    try {
        return await apiClient.put(`${EP.PRODUCTOS}/${idProducto}`, product, {
            baseUrl: PRODUCT_BASE,
        });
    } catch (error) {
        console.error("updateProduct:", error);
        throw error;
    }
}

export async function deleteProduct(idProducto) {
    try {
        return await apiClient.del(`${EP.PRODUCTOS}/${idProducto}`, {
            baseUrl: PRODUCT_BASE,
        });
    } catch (error) {
        console.error("deleteProduct:", error);
        throw error;
    }
}

// USUARIOS (user-service)

export async function getAllUsers() {
    try {
        return await apiClient.get(EP.USUARIOS, { baseUrl: USER_BASE });
    } catch (error) {
        console.error("getAllUsers:", error);
        return [];
    }
}

export async function getUserById(idUsuario) {
    try {
        return await apiClient.get(`${EP.USUARIOS}/${idUsuario}`, {
            baseUrl: USER_BASE,
        });
    } catch (error) {
        console.error("getUserById:", error);
        throw error;
    }
}

export async function createUser(user) {
    try {
        return await apiClient.post(EP.USUARIOS, user, { baseUrl: USER_BASE });
    } catch (error) {
        console.error("createUser:", error);
        throw error;
    }
}

export async function updateUser(idUsuario, user) {
    try {
        return await apiClient.put(`${EP.USUARIOS}/${idUsuario}`, user, {
            baseUrl: USER_BASE,
        });
    } catch (error) {
        console.error("updateUser:", error);
        throw error;
    }
}

export async function deleteUser(idUsuario) {
    try {
        return await apiClient.del(`${EP.USUARIOS}/${idUsuario}`, {
            baseUrl: USER_BASE,
        });
    } catch (error) {
        console.error("deleteUser:", error);
        throw error;
    }
}

// AUTH (auth-service)

export async function loginUser(credentials) {
    try {
        const payload = {
            username: credentials.username ?? credentials.email ?? "",
            password: credentials.password,
        };

        const data = await apiClient.post(EP.AUTH_LOGIN, payload, {
            baseUrl: AUTH_BASE,
        });

        return data;
    } catch (error) {
        console.error("loginUser:", error);
        throw error;
    }
}

export async function registerUser(data) {
    try {
        return await apiClient.post(EP.AUTH_REGISTER, data, {
            baseUrl: AUTH_BASE,
        });
    } catch (error) {
        console.error("registerUser:", error);
        throw error;
    }
}

export async function getCurrentUser() {
    try {
        return await apiClient.get(AUTH_ME, { baseUrl: AUTH_BASE });
    } catch (error) {
        console.error("getCurrentUser:", error);
        throw error;
    }
}

// PEDIDOS (order-service)

export async function createOrder(body) {
    try {
        return await apiClient.post(PEDIDOS, body, { baseUrl: ORDER_BASE });
    } catch (error) {
        console.error("createOrder:", error);
        throw error;
    }
}

export async function getOrdersByUser(idUsuario) {
    try {
        return await apiClient.get(`${PEDIDOS}/user/${idUsuario}`, {
            baseUrl: ORDER_BASE,
        });
    } catch (error) {
        console.error("getOrdersByUser:", error);
        throw error;
    }
}

export async function getOrderById(idPedido) {
    try {
        return await apiClient.get(`${PEDIDOS}/${idPedido}`, {
            baseUrl: ORDER_BASE,
        });
    } catch (error) {
        console.error("getOrderById:", error);
        throw error;
    }
}