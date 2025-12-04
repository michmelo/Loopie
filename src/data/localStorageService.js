// Versión acotada

const SESSION_KEY = "session_token";

/**
 * Guarda la sesión mínima necesaria:
 * - token falso
 * - userId
 * - username
 * - rol
 * - fecha de expiración
 */
export function saveSession({ token, user }) {
  if (!user) return;

  const sessionData = {
    token,
    user: {
      id: user.id ?? user.idUsuario ?? null,
      username: user.username ?? user.email ?? null,
      rol: user.rol ?? null,
    },
    // opcional: expiración en 24h
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  };

  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
  } catch (err) {
    console.error("Error guardando sesión:", err);
  }
}

/**
 * Recupera la sesión (si existe y no está expirada).
 */
export function getSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;

    const data = JSON.parse(raw);

    // Si quieres validar expiración:
    if (data.expiresAt) {
      const now = Date.now();
      const exp = new Date(data.expiresAt).getTime();
      if (isNaN(exp) || exp < now) {
        localStorage.removeItem(SESSION_KEY);
        return null;
      }
    }

    return data;
  } catch (err) {
    console.error("Error leyendo sesión:", err);
    return null;
  }
}

/**
 * Elimina la sesión del usuario.
 */
export function clearSession() {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch (err) {
    console.error("Error limpiando sesión:", err);
  }
}

/**
 * Limpieza total
 */
export function clearAllStorage() {
  try {
    localStorage.clear();
  } catch (err) {
    console.error("Error limpiando localStorage:", err);
  }
}
