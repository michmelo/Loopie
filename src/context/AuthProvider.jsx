import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
    // Recuperar sesión guardada
    const [user, setUser] = useState(() => {
        try {
            const stored = localStorage.getItem("user");
            return stored ? JSON.parse(stored) : null;
        } catch {
            return null;
        }
});

    // Inicio sesión (usuario activo)
    const login = (userData) => {
        setUser(userData);
    }

    // Cierre sesión (eliminar usuario activo)
    const logout = () => {
        setUser(null);
    }
    
    // Sincroniza estado usuario con localStorage
    useEffect(() => {
        try {
            if (user) {
                localStorage.setItem("usuarioActivo", JSON.stringify(user));
            } else {
                localStorage.removeItem("usuarioActivo");
            }
        } catch (err) { 
            console.error("Error accediendo al localStorage", err);
        }
    }, [user]);

    // DERIVACION DE ESTADOS PARA RUTAS PROTEGIDAS
    const isAuthenticated = Boolean(user);
    const isAdmin = Boolean(user && (user.rol === "admin" || user.isAdmin));

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated, isAdmin }}> 
            {children} 
        </AuthContext.Provider>
    );
};