
/**
 * Valida los datos de un formulario de registro.
 * @param {object} formData - El objeto de estado del formulario.
 * @returns {string | null} El mensaje de error si falla, o null si es válido.
 */
export function validateRegistrationData(formData) {
    // Validar que todos los campos estén completos
    if (!formData.username || !formData.email || !formData.firstName || 
        !formData.lastName || !formData.password || !formData.confirmPassword) {
        return "Todos los campos son obligatorios.";
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        return "Por favor ingresa un email válido.";
    }

    // Validar longitud de contraseña
    if (formData.password.length < 3) {
        return "La contraseña debe tener al menos 3 caracteres.";
    }

    // Validar que las contraseñas coincidan
    if (formData.password !== formData.confirmPassword) {
        return "Las contraseñas no coinciden.";
    }

    return null; // Todo es válido
}

/**
 * Valida los datos de un formulario de inicio de sesión.
 * @param {string} identifier - Nombre de usuario o email.
 * @param {string} password - Contraseña.
 * @returns {string | null} El mensaje de error si falla, o null si es válido.
 */
export function validateLoginData(identifier, password) {
    if (!identifier) {
        return "El nombre de usuario o correo es obligatorio.";
    }
    
    // Esta validación se alinea con la lógica demo que tenías en Login.jsx
    if (password.length < 3) {
        return "Contraseña inválida (mínimo 3 caracteres en este demo).";
    }

    return null; // Todo es válido
}

/**
 * Valida los datos del formulario de Checkout (Envío y Pago).
 * @param {object} formData - El objeto de estado del formulario de checkout.
 * @returns {string | null} El mensaje de error si falla, o null si es válido.
 */
export function validateCheckoutForm(formData) {
    const { 
        nombreCompleto, telefono, direccion, 
        comuna, region, cardNumber, expiry, cvv 
    } = formData;

    // --- Validación de Envío (Datos Chilenos) ---
    if (!nombreCompleto || !telefono || !direccion || !comuna || !region) {
        return "Los campos de Envío (*Nombre, Teléfono, Dirección, Comuna y Región) son obligatorios.";
    }

    // Validación de Teléfono simple (asume un formato chileno básico)
    if (!/^\+?\d{8,15}$/.test(telefono.replace(/\s/g, ''))) {
        return "Por favor ingrese un número de teléfono válido.";
    }

    // --- Validación de Pago ---
    if (!cardNumber || !expiry || !cvv) {
        return "Todos los campos de Pago son obligatorios.";
    }

    // Validación de Número de Tarjeta (simple longitud)
    const cleanCardNumber = cardNumber.replace(/\s/g, '');
    if (!/^\d{13,19}$/.test(cleanCardNumber)) {
        return "El número de tarjeta es inválido.";
    }

    // Validación de CVV (3 o 4 dígitos)
    if (!/^\d{3,4}$/.test(cvv)) {
        return "El CVV es inválido.";
    }
    
    // Validación de Fecha de Vencimiento (MM/AA)
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
        return "La fecha de vencimiento debe estar en formato MM/AA.";
    }


    return null; // Todo es válido
}