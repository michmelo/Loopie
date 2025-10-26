// Persistencia de datos en localStorage. Cubre sesión de usuario, carrito y pedidos.

/* SESIÓN DE USUARIO */

const USER_KEY = "usuarioActivo";

// Obtener usuario activo (si existe)
export function getUserSession() {
  try {
    const stored = localStorage.getItem(USER_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

// Guarda sesión de usuario
export function saveUserSession(userData) {
  try {
    localStorage.setItem(USER_KEY, JSON.stringify(userData));
  } catch (err) {
    console.error("Error guardando sesión:", err);
  }
}

// Elimina sesión de usuario
export function clearUserSession() {
  try {
    localStorage.removeItem(USER_KEY);
  } catch (err) {
    console.error("Error limpiando sesión:", err);
  }
}

/* CARRITO */

const CART_KEY = "carrito";

// Obtener carrito
export function getCart(userId) {
  try {
    const allCarts = JSON.parse(localStorage.getItem(CART_KEY)) || {};
    return allCarts[userId] || [];
  } catch {
    return [];
  }
}

// Guardar carrito
export function saveCart(userId, cart) {
  try {
    const allCarts = JSON.parse(localStorage.getItem(CART_KEY)) || {};
    allCarts[userId] = cart;
    localStorage.setItem(CART_KEY, JSON.stringify(allCarts));
  } catch (err) {
    console.error("Error guardando carrito:", err);
  }
}

// Limpiar carrito
export function clearCart(userId) {
  try {
    const allCarts = JSON.parse(localStorage.getItem(CART_KEY)) || {};
    delete allCarts[userId];
    localStorage.setItem(CART_KEY, JSON.stringify(allCarts));
  } catch (err) {
    console.error("Error limpiando carrito:", err);
  }
}

/* PEDIDOS */

const ORDERS_KEY = "pedidos";

// Obtener pedidos del usuario
export function getOrders(userId) {
  try {
    const allOrders = JSON.parse(localStorage.getItem(ORDERS_KEY)) || {};
    return allOrders[userId] || [];
  } catch {
    return [];
  }
}

// Crear un nuevo pedido
export function createOrder(userId, cart, total, metodoPago = "tarjeta") {
  const newOrder = {
    id: Date.now(),
    usuarioId: userId,
    items: cart,
    total,
    estado: "pagado",
    metodoPago,
    fecha: new Date().toLocaleDateString("es-CL"),
  };

  try {
    const allOrders = JSON.parse(localStorage.getItem(ORDERS_KEY)) || {};
    const userOrders = allOrders[userId] || [];
    userOrders.push(newOrder);
    allOrders[userId] = userOrders;
    localStorage.setItem(ORDERS_KEY, JSON.stringify(allOrders));
    return newOrder;
  } catch (err) {
    console.error("Error creando pedido:", err);
    return null;
  }
}

// Limpiar el pedido 
export function clearOrders(userId) {
  try {
    const allOrders = JSON.parse(localStorage.getItem(ORDERS_KEY)) || {};
    delete allOrders[userId];
    localStorage.setItem(ORDERS_KEY, JSON.stringify(allOrders));
  } catch (err) {
    console.error("Error limpiando pedidos:", err);
  }
}
