// CENTRALIZACION DE ENDPOINTS Y URLS

// URLs BASE (POR MICROSERVICIO)
export const API_AUTH_BASE_URL = "http://18.234.174.91:8081/";
export const API_USER_BASE_URL = "http://18.234.174.91:8082/";
export const API_PRODUCT_BASE_URL = "http://18.234.174.91:8083/";
export const API_ORDER_BASE_URL = "http://18.234.174.91:8084/";


// ENDPOINTS (Rutas relativas)
export const ENDPOINTS = {
  PRODUCTOS: "api/products",
  USUARIOS: "api/v1/users",
  AUTH_LOGIN: "api/v1/auth/login",
  AUTH_REGISTER: "api/v1/auth/register",
};
