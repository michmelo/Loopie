import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { saveSession, getSession, clearSession } from "../data/localStorageService";

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
    // Recuperar sesión mínima desde localStorage
    const [user, setUser] = useState(() => {
        const session = getSession();
        if (!session?.user) return null;
        return session.user; // { id, username, rol }
    });

    // Inicio de sesión
    const login = (userData) => {
        // Generar token simulado (fake token)
        const token = `sess_${Date.now()}_${Math.random()
            .toString(36)
            .slice(2, 9)}`;

        // Normalizar a lo mínimo
        const minimalUser = {
            id: userData.id ?? userData.idUsuario ?? null,
            username: userData.username ?? userData.email ?? null,
            rol: userData.rol ?? userData.role ?? null,
        };

        saveSession({ token, user: minimalUser });
        setUser(minimalUser);
    };

    // Cierre de sesión
    const logout = () => {
        clearSession();
        setUser(null);
    };

    const isAuthenticated = Boolean(user);
    const isAdmin =
        Boolean(user) &&
        (user.rol === "admin" ||
            user.rol === "ADMIN" ||
            user.role === "admin" ||
            user.isAdmin === true);

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                isAuthenticated,
                isAdmin,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};