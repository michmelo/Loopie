import * as config from "./config";

/**
 * Cliente API simplificado.
 * Centraliza la construcción de URLs, headers y manejo básico de fetch.
 */

const DEFAULT_BASE_URL = config.API_BASE_URL ?? "";

/**
 * Normaliza y construye la URL final.
 * Elimina / extra si vienen al principio/fin.
 */
const buildUrl = (baseUrl, endpoint) => {
    const base = (baseUrl ?? DEFAULT_BASE_URL).replace(/\/+$/, "");
    const path = String(endpoint ?? "").replace(/^\/+/, "");
    return `${base}/${path}`;
};

const getHeaders = () => {
    const headers = {
        "Content-Type": "application/json",
    };

    // const token = localStorage.getItem("token");
    // if (token) headers["Authorization"] = `Bearer ${token}`;

    return headers;
};

export const apiClient = {
    /**
     * GET
     * @param {string} endpoint - ruta relativa (ej: "api/products")
     * @param {object} options - { baseUrl?: string }
     */
    async get(endpoint, options = {}) {
        const { baseUrl } = options;
        const url = buildUrl(baseUrl, endpoint);

        try {
            const response = await fetch(url, {
                method: "GET",
                headers: getHeaders(),
                credentials: "include",
            });

            if (!response.ok) {
                throw new Error(`API GET error (${response.status}) en ${url}`);
            }

            return await response.json();
        } catch (error) {
            console.error(`GET ${url} failed:`, error);
            throw error;
        }
    },

    /**
     * POST
     * @param {string} endpoint
     * @param {any} body
     * @param {object} options
     */
    async post(endpoint, body, options = {}) {
        const { baseUrl } = options;
        const url = buildUrl(baseUrl, endpoint);

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: getHeaders(),
                credentials: "include",
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                throw new Error(`API POST error (${response.status}) en ${url}`);
            }

            return await response.json();
        } catch (error) {
            console.error(`POST ${url} failed:`, error);
            throw error;
        }
    },

    /**
     * PUT
     */
    async put(endpoint, body, options = {}) {
        const { baseUrl } = options;
        const url = buildUrl(baseUrl, endpoint);

        try {
            const response = await fetch(url, {
                method: "PUT",
                headers: getHeaders(),
                credentials: "include",
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                throw new Error(`API PUT error (${response.status}) en ${url}`);
            }

            return await response.json();
        } catch (error) {
            console.error(`PUT ${url} failed:`, error);
            throw error;
        }
    },

    /**
     * DELETE
     */
    async del(endpoint, options = {}) {
        const { baseUrl } = options;
        const url = buildUrl(baseUrl, endpoint);

        try {
            const response = await fetch(url, {
                method: "DELETE",
                headers: getHeaders(),
                credentials: "include",
            });

            if (!response.ok) {
                throw new Error(`API DELETE error (${response.status}) en ${url}`);
            }

            // Muchos DELETE devuelven 204 sin body
            return true;
        } catch (error) {
            console.error(`DELETE ${url} failed:`, error);
            throw error;
        }
    },
};
