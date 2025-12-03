import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { clearCart, clearOrders } from "../data/localStorageService";

export const AuthProvider = ({ children }) => {
    // Recuperar sesión guardada
    const [user, setUser] = useState(() => {
        try {
            const storedSession = localStorage.getItem("session_token");
            if (storedSession) {
                const { user } = JSON.parse(storedSession);
                return user;
            }
            return null;
        } catch {
            return null;
        }
    });

    // Inicio sesión (usuario activo)
    const login = (userData) => {
        // Generar token simulado
        const token = `sess_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        // Crear objeto de sesión seguro (SIN PASSWORD)
        const safeUser = { ...userData };
        delete safeUser.password;

        const sessionData = {
            token,
            user: safeUser,
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
        };

        // Guardar en localStorage
        try {
            localStorage.setItem("session_token", JSON.stringify(sessionData));
            // Elimina la clave antigua si existía
            localStorage.removeItem("usuarioActivo");
        } catch (err) {
            console.error("Error guardando sesión:", err);
        }

        setUser(safeUser);
    }

    // Cierre sesión (eliminar usuario activo y limpieza)
    const logout = () => {
        try {
            if (user?.id) {
                // Opcional: limpiar datos locales al salir
                // clearCart(user.id); 
                // clearOrders(user.id);
            }
            localStorage.removeItem("session_token");
            localStorage.removeItem("usuarioActivo");
        } catch (err) {
            console.error("Error limpiando datos locales:", err);
        }

        setUser(null);
    };

    // Ya no usamos useEffect para sincronizar "user" con localStorage pq lo hacemos explícitamente en login/logout.
    // Esto evita re-guardar datos sensibles si el estado "user" cambia.

    // DERIVACION DE ESTADOS PARA RUTAS PROTEGIDAS
    const isAuthenticated = Boolean(user);
    const isAdmin = Boolean(user && (user.rol === "admin" || user.isAdmin));

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated, isAdmin }}>
            {children}
        </AuthContext.Provider>
    );
};