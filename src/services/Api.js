//funcion que conecte al backend, debe ser anonima

export const obtenerUsuarios = async () => { //debe ser asincrona para usar await
    
    try{
        const data = await fetch("https://demo5015098.mockable.io/api/v1/users/all")

        if (!data.ok) throw new Error("Error al obtener el data del backend")

        const usuarios = await data.json()

        return usuarios
    } catch (err) {
    
        console.log(err)

        return {total_users: 0, users: []}

    }
}

// API SERVICE - CAPA DE ABSTRACCIÓN PARA DATOS
// Este archivo decide de dónde obtener los datos: mockData, localStorage, o API remota

import {
    // Funciones de productos
    getAllProducts,
    getProductById,
    getProductsByCategory,
    getFeaturedProducts,
    getNewProducts,
    
    // Funciones de ofertas
    getActiveOffers,
    getOfferById,
    
    // Funciones de usuarios
    registerUser,
    loginUser,
    getActiveSession,
    logoutUser,
    
    // Funciones del carrito
    getCart,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
    getCartWithProducts,
    getCartTotal
} from '../data/mockData.js';

// ========================================
// CONFIGURACIÓN DE FUENTE DE DATOS
// ========================================

// Configuración para decidir de dónde obtener los datos
const DATA_SOURCE = {
    MOCK: 'mock',           // Datos mock locales
    LOCAL_STORAGE: 'local', // Datos del localStorage
    REMOTE: 'remote'        // API remota
};

// Configuración actual (puede cambiarse según el entorno)
const CURRENT_SOURCE = DATA_SOURCE.MOCK; // Por defecto usar datos mock

// URLs de la API remota (para cuando se implemente)
const API_ENDPOINTS = {
    BASE_URL: 'https://api.loopie.com/v1',
    PRODUCTS: '/products',
    OFFERS: '/offers',
    USERS: '/users',
    AUTH: '/auth',
    CART: '/cart'
};

// ========================================
// FUNCIONES DE PRODUCTOS
// ========================================

/**
 * Obtiene la lista de productos
 * @param {Object} options - Opciones de filtrado
 * @param {string} options.category - Categoría a filtrar
 * @param {boolean} options.featured - Solo productos destacados
 * @param {boolean} options.new - Solo productos nuevos
 * @returns {Promise<Array>} - Lista de productos
 */
export const getProducts = async (options = {}) => {
    try {
        // Simular delay de red para datos mock
        await new Promise(resolve => setTimeout(resolve, 300));
        
        let products = [];
        
        switch (CURRENT_SOURCE) {
            case DATA_SOURCE.MOCK:
                products = getAllProducts();
                break;
                
            case DATA_SOURCE.LOCAL_STORAGE:
                // Implementar lógica para localStorage si es necesario
                products = getAllProducts();
                break;
                
            case DATA_SOURCE.REMOTE:
                // Implementar llamada a API remota
                const response = await fetch(`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.PRODUCTS}`);
                if (!response.ok) throw new Error('Error al obtener productos');
                const data = await response.json();
                products = data.products || [];
                break;
                
            default:
                products = getAllProducts();
        }
        
        // Aplicar filtros
        if (options.category) {
            products = products.filter(product => product.category === options.category);
        }
        
        if (options.featured) {
            products = products.filter(product => product.isFeatured);
        }
        
        if (options.new) {
            products = products.filter(product => product.isNew);
        }
        
        return {
            success: true,
            data: products,
            total: products.length
        };
        
    } catch (error) {
        console.error('Error al obtener productos:', error);
        return {
            success: false,
            data: [],
            total: 0,
            error: error.message
        };
    }
};

/**
 * Obtiene un producto por ID
 * @param {number} productId - ID del producto
 * @returns {Promise<Object>} - Producto encontrado
 */
export const getProduct = async (productId) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 200));
        
        let product = null;
        
        switch (CURRENT_SOURCE) {
            case DATA_SOURCE.MOCK:
            case DATA_SOURCE.LOCAL_STORAGE:
                product = getProductById(productId);
                break;
                
            case DATA_SOURCE.REMOTE:
                const response = await fetch(`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.PRODUCTS}/${productId}`);
                if (!response.ok) throw new Error('Producto no encontrado');
                const data = await response.json();
                product = data.product;
                break;
        }
        
        return {
            success: product !== null,
            data: product,
            error: product ? null : 'Producto no encontrado'
        };
        
    } catch (error) {
        console.error('Error al obtener producto:', error);
        return {
            success: false,
            data: null,
            error: error.message
        };
    }
};

// ========================================
// FUNCIONES DE OFERTAS
// ========================================

/**
 * Obtiene las ofertas activas
 * @returns {Promise<Array>} - Lista de ofertas
 */
export const getOffers = async () => {
    try {
        await new Promise(resolve => setTimeout(resolve, 250));
        
        let offers = [];
        
        switch (CURRENT_SOURCE) {
            case DATA_SOURCE.MOCK:
            case DATA_SOURCE.LOCAL_STORAGE:
                offers = getActiveOffers();
                break;
                
            case DATA_SOURCE.REMOTE:
                const response = await fetch(`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.OFFERS}`);
                if (!response.ok) throw new Error('Error al obtener ofertas');
                const data = await response.json();
                offers = data.offers || [];
                break;
        }
        
        return {
            success: true,
            data: offers,
            total: offers.length
        };
        
    } catch (error) {
        console.error('Error al obtener ofertas:', error);
        return {
            success: false,
            data: [],
            total: 0,
            error: error.message
        };
    }
};

/**
 * Obtiene una oferta por ID
 * @param {number} offerId - ID de la oferta
 * @returns {Promise<Object>} - Oferta encontrada
 */
export const getOffer = async (offerId) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 200));
        
        let offer = null;
        
        switch (CURRENT_SOURCE) {
            case DATA_SOURCE.MOCK:
            case DATA_SOURCE.LOCAL_STORAGE:
                offer = getOfferById(offerId);
                break;
                
            case DATA_SOURCE.REMOTE:
                const response = await fetch(`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.OFFERS}/${offerId}`);
                if (!response.ok) throw new Error('Oferta no encontrada');
                const data = await response.json();
                offer = data.offer;
                break;
        }
        
        return {
            success: offer !== null,
            data: offer,
            error: offer ? null : 'Oferta no encontrada'
        };
        
    } catch (error) {
        console.error('Error al obtener oferta:', error);
        return {
            success: false,
            data: null,
            error: error.message
        };
    }
};

// ========================================
// FUNCIONES DE USUARIOS
// ========================================

/**
 * Registra un nuevo usuario
 * @param {Object} userData - Datos del usuario
 * @returns {Promise<Object>} - Resultado del registro
 */
export const register = async (userData) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 500));
        
        let result = null;
        
        switch (CURRENT_SOURCE) {
            case DATA_SOURCE.MOCK:
            case DATA_SOURCE.LOCAL_STORAGE:
                result = registerUser(userData);
                break;
                
            case DATA_SOURCE.REMOTE:
                const response = await fetch(`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.AUTH}/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData)
                });
                
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Error al registrar usuario');
                }
                
                const data = await response.json();
                result = {
                    success: true,
                    message: data.message,
                    user: data.user
                };
                break;
        }
        
        return result;
        
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        return {
            success: false,
            message: error.message,
            user: null
        };
    }
};

/**
 * Inicia sesión de un usuario
 * @param {string} email - Email del usuario
 * @param {string} password - Contraseña
 * @returns {Promise<Object>} - Resultado del login
 */
export const login = async (email, password) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 400));
        
        let result = null;
        
        switch (CURRENT_SOURCE) {
            case DATA_SOURCE.MOCK:
            case DATA_SOURCE.LOCAL_STORAGE:
                result = loginUser(email, password);
                break;
                
            case DATA_SOURCE.REMOTE:
                const response = await fetch(`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.AUTH}/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password })
                });
                
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Error al iniciar sesión');
                }
                
                const data = await response.json();
                result = {
                    success: true,
                    message: data.message,
                    user: data.user
                };
                break;
        }
        
        return result;
        
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        return {
            success: false,
            message: error.message,
            user: null
        };
    }
};

/**
 * Obtiene la sesión activa del usuario
 * @returns {Promise<Object>} - Datos de la sesión
 */
export const getCurrentUser = async () => {
    try {
        await new Promise(resolve => setTimeout(resolve, 100));
        
        let session = null;
        
        switch (CURRENT_SOURCE) {
            case DATA_SOURCE.MOCK:
            case DATA_SOURCE.LOCAL_STORAGE:
                session = getActiveSession();
                break;
                
            case DATA_SOURCE.REMOTE:
                const token = localStorage.getItem('auth_token');
                if (!token) {
                    return { success: false, data: null };
                }
                
                const response = await fetch(`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.AUTH}/me`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                
                if (!response.ok) {
                    localStorage.removeItem('auth_token');
                    return { success: false, data: null };
                }
                
                const data = await response.json();
                session = data.user;
                break;
        }
        
        return {
            success: session !== null,
            data: session
        };
        
    } catch (error) {
        console.error('Error al obtener usuario actual:', error);
        return {
            success: false,
            data: null
        };
    }
};

/**
 * Cierra la sesión del usuario
 * @returns {Promise<Object>} - Resultado del logout
 */
export const logout = async () => {
    try {
        await new Promise(resolve => setTimeout(resolve, 200));
        
        let result = null;
        
        switch (CURRENT_SOURCE) {
            case DATA_SOURCE.MOCK:
            case DATA_SOURCE.LOCAL_STORAGE:
                result = logoutUser();
                break;
                
            case DATA_SOURCE.REMOTE:
                const token = localStorage.getItem('auth_token');
                if (token) {
                    await fetch(`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.AUTH}/logout`, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                }
                localStorage.removeItem('auth_token');
                result = {
                    success: true,
                    message: 'Sesión cerrada exitosamente'
                };
                break;
        }
        
        return result;
        
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
        return {
            success: false,
            message: 'Error al cerrar sesión'
        };
    }
};

// ========================================
// FUNCIONES DEL CARRITO
// ========================================

/**
 * Agrega un producto al carrito
 * @param {number} productId - ID del producto
 * @param {number} quantity - Cantidad
 * @returns {Promise<Object>} - Resultado de la operación
 */
export const addItemToCart = async (productId, quantity = 1) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 300));
        
        let result = null;
        
        switch (CURRENT_SOURCE) {
            case DATA_SOURCE.MOCK:
            case DATA_SOURCE.LOCAL_STORAGE:
                result = addToCart(productId, quantity);
                break;
                
            case DATA_SOURCE.REMOTE:
                const token = localStorage.getItem('auth_token');
                const response = await fetch(`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.CART}/add`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ productId, quantity })
                });
                
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Error al agregar al carrito');
                }
                
                const data = await response.json();
                result = {
                    success: true,
                    message: data.message,
                    cart: data.cart
                };
                break;
        }
        
        return result;
        
    } catch (error) {
        console.error('Error al agregar al carrito:', error);
        return {
            success: false,
            message: error.message
        };
    }
};

/**
 * Obtiene el carrito del usuario
 * @returns {Promise<Object>} - Carrito con productos
 */
export const getCart = async () => {
    try {
        await new Promise(resolve => setTimeout(resolve, 200));
        
        let cart = [];
        
        switch (CURRENT_SOURCE) {
            case DATA_SOURCE.MOCK:
            case DATA_SOURCE.LOCAL_STORAGE:
                cart = getCartWithProducts();
                break;
                
            case DATA_SOURCE.REMOTE:
                const token = localStorage.getItem('auth_token');
                const response = await fetch(`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.CART}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                
                if (!response.ok) throw new Error('Error al obtener carrito');
                
                const data = await response.json();
                cart = data.cart || [];
                break;
        }
        
        return {
            success: true,
            data: cart
        };
        
    } catch (error) {
        console.error('Error al obtener carrito:', error);
        return {
            success: false,
            data: [],
            error: error.message
        };
    }
};

/**
 * Actualiza un item del carrito
 * @param {number} productId - ID del producto
 * @param {number} quantity - Nueva cantidad
 * @returns {Promise<Object>} - Resultado de la operación
 */
export const updateCartItem = async (productId, quantity) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 250));
        
        let result = null;
        
        switch (CURRENT_SOURCE) {
            case DATA_SOURCE.MOCK:
            case DATA_SOURCE.LOCAL_STORAGE:
                result = updateCartItem(productId, quantity);
                break;
                
            case DATA_SOURCE.REMOTE:
                const token = localStorage.getItem('auth_token');
                const response = await fetch(`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.CART}/update`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ productId, quantity })
                });
                
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Error al actualizar carrito');
                }
                
                const data = await response.json();
                result = {
                    success: true,
                    message: data.message,
                    cart: data.cart
                };
                break;
        }
        
        return result;
        
    } catch (error) {
        console.error('Error al actualizar carrito:', error);
        return {
            success: false,
            message: error.message
        };
    }
};

/**
 * Elimina un item del carrito
 * @param {number} productId - ID del producto
 * @returns {Promise<Object>} - Resultado de la operación
 */
export const removeFromCart = async (productId) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 250));
        
        let result = null;
        
        switch (CURRENT_SOURCE) {
            case DATA_SOURCE.MOCK:
            case DATA_SOURCE.LOCAL_STORAGE:
                result = removeFromCart(productId);
                break;
                
            case DATA_SOURCE.REMOTE:
                const token = localStorage.getItem('auth_token');
                const response = await fetch(`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.CART}/remove`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ productId })
                });
                
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Error al eliminar del carrito');
                }
                
                const data = await response.json();
                result = {
                    success: true,
                    message: data.message,
                    cart: data.cart
                };
                break;
        }
        
        return result;
        
    } catch (error) {
        console.error('Error al eliminar del carrito:', error);
        return {
            success: false,
            message: error.message
        };
    }
};

/**
 * Vacía el carrito
 * @returns {Promise<Object>} - Resultado de la operación
 */
export const clearCart = async () => {
    try {
        await new Promise(resolve => setTimeout(resolve, 200));
        
        let result = null;
        
        switch (CURRENT_SOURCE) {
            case DATA_SOURCE.MOCK:
            case DATA_SOURCE.LOCAL_STORAGE:
                result = clearCart();
                break;
                
            case DATA_SOURCE.REMOTE:
                const token = localStorage.getItem('auth_token');
                const response = await fetch(`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.CART}/clear`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Error al vaciar carrito');
                }
                
                const data = await response.json();
                result = {
                    success: true,
                    message: data.message,
                    cart: []
                };
                break;
        }
        
        return result;
        
    } catch (error) {
        console.error('Error al vaciar carrito:', error);
        return {
            success: false,
            message: error.message
        };
    }
};

/**
 * Obtiene el total del carrito
 * @returns {Promise<Object>} - Resumen del carrito
 */
export const getCartTotal = async () => {
    try {
        await new Promise(resolve => setTimeout(resolve, 150));
        
        let total = null;
        
        switch (CURRENT_SOURCE) {
            case DATA_SOURCE.MOCK:
            case DATA_SOURCE.LOCAL_STORAGE:
                total = getCartTotal();
                break;
                
            case DATA_SOURCE.REMOTE:
                const token = localStorage.getItem('auth_token');
                const response = await fetch(`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.CART}/total`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                
                if (!response.ok) throw new Error('Error al obtener total del carrito');
                
                const data = await response.json();
                total = data.total;
                break;
        }
        
        return {
            success: true,
            data: total
        };
        
    } catch (error) {
        console.error('Error al obtener total del carrito:', error);
        return {
            success: false,
            data: null,
            error: error.message
        };
    }
};

// ========================================
// FUNCIONES DE UTILIDAD
// ========================================

/**
 * Cambia la fuente de datos
 * @param {string} source - Nueva fuente de datos
 */
export const setDataSource = (source) => {
    if (Object.values(DATA_SOURCE).includes(source)) {
        CURRENT_SOURCE = source;
        console.log(`Fuente de datos cambiada a: ${source}`);
    } else {
        console.error('Fuente de datos no válida:', source);
    }
};

/**
 * Obtiene la fuente de datos actual
 * @returns {string} - Fuente de datos actual
 */
export const getCurrentDataSource = () => {
    return CURRENT_SOURCE;
};

/**
 * Obtiene información sobre las fuentes de datos disponibles
 * @returns {Object} - Información de las fuentes
 */
export const getDataSourcesInfo = () => {
    return {
        current: CURRENT_SOURCE,
        available: DATA_SOURCE,
        endpoints: API_ENDPOINTS
    };
};