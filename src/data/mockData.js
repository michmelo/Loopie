// DATOS MOCK PARA LA APLICACIÓN LOOPIE
// Este archivo contiene datos de prueba y funciones para simular operaciones de base de datos

// ========================================
// DATOS INICIALES
// ========================================

// Lista de productos disponibles
export const products = [
  {
    id: 1,
    name: "Vestido Vintage Floral",
    description: "Hermoso vestido de los años 70 con estampado floral, perfecto para ocasiones especiales",
    price: 25000,
    originalPrice: 35000,
    discount: 28,
    category: "Vestidos",
    size: "M",
    condition: "Excelente",
    brand: "Vintage Collection",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
    stock: 1,
    tags: ["vintage", "floral", "elegante", "ocasiones especiales"],
    seller: "María González",
    rating: 4.8,
    reviews: 12,
    isNew: false,
    isFeatured: true
  },
  {
    id: 2,
    name: "Chaqueta de Cuero Genuino",
    description: "Chaqueta de cuero auténtico en color negro, ideal para el invierno",
    price: 45000,
    originalPrice: 60000,
    discount: 25,
    category: "Chaquetas",
    size: "L",
    condition: "Muy bueno",
    brand: "Leather Co",
    image: "https://images.unsplash.com/photo-1551028719-001c4c6e0b4f?w=400",
    stock: 2,
    tags: ["cuero", "invierno", "clásico", "resistente"],
    seller: "Carlos Mendoza",
    rating: 4.6,
    reviews: 8,
    isNew: true,
    isFeatured: false
  },
  {
    id: 3,
    name: "Pantalones Vaqueros Clásicos",
    description: "Jeans de corte clásico en azul desgastado, cómodos y versátiles",
    price: 18000,
    originalPrice: 25000,
    discount: 28,
    category: "Pantalones",
    size: "32",
    condition: "Bueno",
    brand: "Denim Original",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400",
    stock: 3,
    tags: ["vaqueros", "clásico", "cómodo", "versátil"],
    seller: "Ana Rodríguez",
    rating: 4.4,
    reviews: 15,
    isNew: false,
    isFeatured: true
  },
  {
    id: 4,
    name: "Blusa de Seda Elegante",
    description: "Blusa de seda natural en color crema, perfecta para la oficina",
    price: 22000,
    originalPrice: 30000,
    discount: 26,
    category: "Blusas",
    size: "S",
    condition: "Excelente",
    brand: "Silk Dreams",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
    stock: 1,
    tags: ["seda", "elegante", "oficina", "lujo"],
    seller: "Laura Silva",
    rating: 4.9,
    reviews: 6,
    isNew: true,
    isFeatured: false
  },
  {
    id: 5,
    name: "Zapatos de Tacón Medio",
    description: "Zapatos de tacón de 5cm en color negro, ideales para el trabajo",
    price: 32000,
    originalPrice: 45000,
    discount: 29,
    category: "Zapatos",
    size: "38",
    condition: "Muy bueno",
    brand: "Elegant Steps",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
    stock: 2,
    tags: ["tacón", "negro", "trabajo", "elegante"],
    seller: "Patricia López",
    rating: 4.7,
    reviews: 9,
    isNew: false,
    isFeatured: true
  },
  {
    id: 6,
    name: "Sweater de Lana Merino",
    description: "Sweater de lana merino 100% en color gris, abrigado y suave",
    price: 28000,
    originalPrice: 40000,
    discount: 30,
    category: "Sweaters",
    size: "M",
    condition: "Excelente",
    brand: "Wool Comfort",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400",
    stock: 1,
    tags: ["lana", "merino", "invierno", "suave"],
    seller: "Roberto Díaz",
    rating: 4.8,
    reviews: 11,
    isNew: true,
    isFeatured: false
  }
];

// Lista de ofertas especiales
export const offers = [
  {
    id: 1,
    title: "Descuento del 30% en Vestidos",
    description: "Aprovecha esta increíble oferta en toda nuestra colección de vestidos vintage",
    discount: 30,
    category: "Vestidos",
    validUntil: "2024-12-31",
    code: "VESTIDOS30",
    isActive: true,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
    products: [1, 4, 7, 10]
  },
  {
    id: 2,
    title: "2x1 en Chaquetas",
    description: "Lleva dos chaquetas y paga solo una. ¡No te lo pierdas!",
    discount: 50,
    category: "Chaquetas",
    validUntil: "2024-11-30",
    code: "CHAQUETAS2X1",
    isActive: true,
    image: "https://images.unsplash.com/photo-1551028719-001c4c6e0b4f?w=400",
    products: [2, 8, 12]
  },
  {
    id: 3,
    title: "Envío Gratis en Compras +$50.000",
    description: "Compra por más de $50.000 y recibe tu pedido sin costo de envío",
    discount: 0,
    category: "Envío",
    validUntil: "2024-12-25",
    code: "ENVIOGRATIS",
    isActive: true,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400",
    products: []
  }
];

// Lista de usuarios (inicialmente vacía, se llenará con registros)
export let users = [
  {
    id: 1,
    username: "admin",
    email: "admin@loopie.com",
    password: "admin123",
    firstName: "Administrador",
    lastName: "Sistema",
    phone: "+56912345678",
    address: {
      street: "Av. Principal 123",
      city: "Santiago",
      zipCode: "7500000",
      country: "Chile"
    },
    isActive: true,
    isAdmin: true,
    createdAt: "2024-01-01T00:00:00.000Z",
    preferences: {
      notifications: true,
      newsletter: true,
      size: "M",
      favoriteCategories: ["Vestidos", "Blusas"]
    }
  }
];

// ========================================
// FUNCIONES DE USUARIOS
// ========================================

/**
 * Registra un nuevo usuario en el sistema
 * @param {Object} userData - Datos del usuario a registrar
 * @returns {Object} - Resultado del registro
 */
export const registerUser = (userData) => {
  try {
    // Validar que todos los campos requeridos estén presentes
    const requiredFields = ['username', 'email', 'password', 'firstName', 'lastName'];
    for (const field of requiredFields) {
      if (!userData[field]) {
        return {
          success: false,
          message: `El campo ${field} es obligatorio`,
          user: null
        };
      }
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      return {
        success: false,
        message: "El formato del email no es válido",
        user: null
      };
    }

    // Validar que el email no esté en uso
    const existingUser = users.find(user => user.email === userData.email);
    if (existingUser) {
      return {
        success: false,
        message: "Ya existe un usuario con este email",
        user: null
      };
    }

    // Validar que el username no esté en uso
    const existingUsername = users.find(user => user.username === userData.username);
    if (existingUsername) {
      return {
        success: false,
        message: "Ya existe un usuario con este nombre de usuario",
        user: null
      };
    }

    // Crear nuevo usuario
    const newUser = {
      id: users.length + 1,
      username: userData.username,
      email: userData.email,
      password: userData.password, // En producción, esto debería estar hasheado
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone || "",
      address: userData.address || {
        street: "",
        city: "",
        zipCode: "",
        country: "Chile"
      },
      isActive: true,
      isAdmin: false,
      createdAt: new Date().toISOString(),
      preferences: {
        notifications: true,
        newsletter: true,
        size: userData.preferredSize || "M",
        favoriteCategories: userData.favoriteCategories || []
      }
    };

    // Agregar usuario a la lista
    users.push(newUser);

    // Guardar en localStorage
    localStorage.setItem('loopie_users', JSON.stringify(users));

    return {
      success: true,
      message: "Usuario registrado exitosamente",
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        isAdmin: newUser.isAdmin,
        createdAt: newUser.createdAt
      }
    };

  } catch (error) {
    console.error('Error al registrar usuario:', error);
    return {
      success: false,
      message: "Error interno del servidor",
      user: null
    };
  }
};

/**
 * Inicia sesión de un usuario
 * @param {string} email - Email del usuario
 * @param {string} password - Contraseña del usuario
 * @returns {Object} - Resultado del login
 */
export const loginUser = (email, password) => {
  try {
    // Buscar usuario por email
    const user = users.find(u => u.email === email && u.isActive);

    if (!user) {
      return {
        success: false,
        message: "Usuario no encontrado o inactivo",
        user: null
      };
    }

    // Validar contraseña (en producción, esto debería comparar hashes)
    if (user.password !== password) {
      return {
        success: false,
        message: "Contraseña incorrecta",
        user: null
      };
    }

    // Crear sesión activa
    const sessionData = {
      id: user.id,
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      isAdmin: user.isAdmin,
      loginTime: new Date().toISOString()
    };

    // Guardar sesión en localStorage
    localStorage.setItem('loopie_session', JSON.stringify(sessionData));

    return {
      success: true,
      message: "Inicio de sesión exitoso",
      user: sessionData
    };

  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    return {
      success: false,
      message: "Error interno del servidor",
      user: null
    };
  }
};

/**
 * Obtiene la sesión activa del usuario
 * @returns {Object|null} - Datos del usuario o null si no hay sesión
 */
export const getActiveSession = () => {
  try {
    const sessionData = localStorage.getItem('loopie_session');
    if (!sessionData) {
      return null;
    }

    const session = JSON.parse(sessionData);
    
    // Verificar que el usuario aún existe y está activo
    const user = users.find(u => u.id === session.id && u.isActive);
    if (!user) {
      // Si el usuario no existe o está inactivo, limpiar la sesión
      localStorage.removeItem('loopie_session');
      return null;
    }

    return session;
  } catch (error) {
    console.error('Error al obtener sesión activa:', error);
    return null;
  }
};

/**
 * Cierra la sesión del usuario actual
 * @returns {Object} - Resultado del logout
 */
export const logoutUser = () => {
  try {
    // Eliminar sesión del localStorage
    localStorage.removeItem('loopie_session');
    
    return {
      success: true,
      message: "Sesión cerrada exitosamente"
    };
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
    return {
      success: false,
      message: "Error al cerrar sesión"
    };
  }
};

// ========================================
// FUNCIONES DEL CARRITO
// ========================================

/**
 * Obtiene el carrito de compras del usuario actual
 * @returns {Array} - Lista de productos en el carrito
 */
export const getCart = () => {
  try {
    const cartData = localStorage.getItem('loopie_cart');
    return cartData ? JSON.parse(cartData) : [];
  } catch (error) {
    console.error('Error al obtener carrito:', error);
    return [];
  }
};

/**
 * Agrega un producto al carrito
 * @param {number} productId - ID del producto
 * @param {number} quantity - Cantidad a agregar
 * @returns {Object} - Resultado de la operación
 */
export const addToCart = (productId, quantity = 1) => {
  try {
    // Buscar el producto
    const product = products.find(p => p.id === productId);
    if (!product) {
      return {
        success: false,
        message: "Producto no encontrado"
      };
    }

    // Verificar stock disponible
    if (product.stock < quantity) {
      return {
        success: false,
        message: "No hay suficiente stock disponible"
      };
    }

    // Obtener carrito actual
    const cart = getCart();
    
    // Buscar si el producto ya está en el carrito
    const existingItem = cart.find(item => item.productId === productId);
    
    if (existingItem) {
      // Si ya existe, actualizar cantidad
      existingItem.quantity += quantity;
      
      // Verificar que no exceda el stock
      if (existingItem.quantity > product.stock) {
        return {
          success: false,
          message: "No hay suficiente stock disponible"
        };
      }
    } else {
      // Si no existe, agregar nuevo item
      cart.push({
        productId: productId,
        quantity: quantity,
        addedAt: new Date().toISOString()
      });
    }

    // Guardar carrito actualizado
    localStorage.setItem('loopie_cart', JSON.stringify(cart));

    return {
      success: true,
      message: "Producto agregado al carrito",
      cart: cart
    };

  } catch (error) {
    console.error('Error al agregar al carrito:', error);
    return {
      success: false,
      message: "Error al agregar producto al carrito"
    };
  }
};

/**
 * Actualiza la cantidad de un producto en el carrito
 * @param {number} productId - ID del producto
 * @param {number} quantity - Nueva cantidad
 * @returns {Object} - Resultado de la operación
 */
export const updateCartItem = (productId, quantity) => {
  try {
    const cart = getCart();
    const itemIndex = cart.findIndex(item => item.productId === productId);
    
    if (itemIndex === -1) {
      return {
        success: false,
        message: "Producto no encontrado en el carrito"
      };
    }

    if (quantity <= 0) {
      // Si la cantidad es 0 o menor, eliminar el item
      cart.splice(itemIndex, 1);
    } else {
      // Verificar stock disponible
      const product = products.find(p => p.id === productId);
      if (product && quantity > product.stock) {
        return {
          success: false,
          message: "No hay suficiente stock disponible"
        };
      }
      
      // Actualizar cantidad
      cart[itemIndex].quantity = quantity;
    }

    // Guardar carrito actualizado
    localStorage.setItem('loopie_cart', JSON.stringify(cart));

    return {
      success: true,
      message: "Carrito actualizado",
      cart: cart
    };

  } catch (error) {
    console.error('Error al actualizar carrito:', error);
    return {
      success: false,
      message: "Error al actualizar carrito"
    };
  }
};

/**
 * Elimina un producto del carrito
 * @param {number} productId - ID del producto
 * @returns {Object} - Resultado de la operación
 */
export const removeFromCart = (productId) => {
  try {
    const cart = getCart();
    const filteredCart = cart.filter(item => item.productId !== productId);
    
    // Guardar carrito actualizado
    localStorage.setItem('loopie_cart', JSON.stringify(filteredCart));

    return {
      success: true,
      message: "Producto eliminado del carrito",
      cart: filteredCart
    };

  } catch (error) {
    console.error('Error al eliminar del carrito:', error);
    return {
      success: false,
      message: "Error al eliminar producto del carrito"
    };
  }
};

/**
 * Vacía completamente el carrito
 * @returns {Object} - Resultado de la operación
 */
export const clearCart = () => {
  try {
    localStorage.removeItem('loopie_cart');
    
    return {
      success: true,
      message: "Carrito vaciado",
      cart: []
    };
  } catch (error) {
    console.error('Error al vaciar carrito:', error);
    return {
      success: false,
      message: "Error al vaciar carrito"
    };
  }
};

/**
 * Obtiene el carrito con información completa de los productos
 * @returns {Array} - Lista de items del carrito con datos completos
 */
export const getCartWithProducts = () => {
  try {
    const cart = getCart();
    return cart.map(item => {
      const product = products.find(p => p.id === item.productId);
      return {
        ...item,
        product: product,
        totalPrice: product ? product.price * item.quantity : 0
      };
    }).filter(item => item.product); // Filtrar items con productos válidos
  } catch (error) {
    console.error('Error al obtener carrito con productos:', error);
    return [];
  }
};

/**
 * Calcula el total del carrito
 * @returns {Object} - Resumen del carrito
 */
export const getCartTotal = () => {
  try {
    const cartWithProducts = getCartWithProducts();
    
    const subtotal = cartWithProducts.reduce((total, item) => total + item.totalPrice, 0);
    const shipping = subtotal > 50000 ? 0 : 5000; // Envío gratis sobre $50.000
    const tax = subtotal * 0.19; // IVA 19%
    const total = subtotal + shipping + tax;
    
    return {
      subtotal,
      shipping,
      tax,
      total,
      itemCount: cartWithProducts.reduce((count, item) => count + item.quantity, 0),
      freeShippingThreshold: 50000,
      isFreeShipping: subtotal >= 50000
    };
  } catch (error) {
    console.error('Error al calcular total del carrito:', error);
    return {
      subtotal: 0,
      shipping: 0,
      tax: 0,
      total: 0,
      itemCount: 0,
      freeShippingThreshold: 50000,
      isFreeShipping: false
    };
  }
};

// ========================================
// FUNCIONES DE PRODUCTOS Y OFERTAS
// ========================================

/**
 * Obtiene todos los productos
 * @returns {Array} - Lista de productos
 */
export const getAllProducts = () => {
  return products;
};

/**
 * Obtiene un producto por ID
 * @param {number} productId - ID del producto
 * @returns {Object|null} - Producto encontrado o null
 */
export const getProductById = (productId) => {
  return products.find(product => product.id === productId) || null;
};

/**
 * Obtiene productos por categoría
 * @param {string} category - Categoría a buscar
 * @returns {Array} - Lista de productos de la categoría
 */
export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

/**
 * Obtiene productos destacados
 * @returns {Array} - Lista de productos destacados
 */
export const getFeaturedProducts = () => {
  return products.filter(product => product.isFeatured);
};

/**
 * Obtiene productos nuevos
 * @returns {Array} - Lista de productos nuevos
 */
export const getNewProducts = () => {
  return products.filter(product => product.isNew);
};

/**
 * Obtiene todas las ofertas activas
 * @returns {Array} - Lista de ofertas activas
 */
export const getActiveOffers = () => {
  return offers.filter(offer => offer.isActive);
};

/**
 * Obtiene una oferta por ID
 * @param {number} offerId - ID de la oferta
 * @returns {Object|null} - Oferta encontrada o null
 */
export const getOfferById = (offerId) => {
  return offers.find(offer => offer.id === offerId) || null;
};

// ========================================
// INICIALIZACIÓN
// ========================================

// Cargar usuarios desde localStorage si existen
const loadUsersFromStorage = () => {
  try {
    const storedUsers = localStorage.getItem('loopie_users');
    if (storedUsers) {
      users = JSON.parse(storedUsers);
    }
  } catch (error) {
    console.error('Error al cargar usuarios desde localStorage:', error);
  }
};

// Inicializar datos
loadUsersFromStorage();
