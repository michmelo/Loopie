// CENTRALIZACION DE ENDPOINTS MOCK REMOTO

// URL BASE
// Descomentar la que corresponda según el entorno
// export const API_BASE_URL = "http://demo9372342.mockable.io/"; // Mock
export const API_BASE_URL = "http://localhost:8080/"; // Backend Spring Boot Local

// ENDPOINTS (Rutas relativas)
export const ENDPOINTS = {
  PRODUCTOS: "api/v1/productos", // Se asume REST: GET /productos, POST /productos, etc.
  USUARIOS: "api/v1/users",
  AUTH_LOGIN: "api/v1/auth/login",
  AUTH_REGISTER: "api/v1/auth/register",
};
