import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        try {
            const stored = localStorage.getItem("user");
            return stored ? JSON.parse(stored) : null;
        } catch {
            return null;
        }
});

    const login = (userData) => {
        setUser(userData);
    }
    const logout = () => {
        setUser(null);
    }
    
    useEffect(() => {
        try {
            if (user) {
                localStorage.setItem("user", JSON.stringify(user));
            } else {
                localStorage.removeItem("user");
            }
        } catch (err) { 
            console.error("Error accediendo al localStorage", err);
        }
    }, [user]);

    // DERIVACION DE ESTADOS PARA RUTAS PROTEGIDAS
    const isAuthenticated = Boolean(user);
    const isAdmin = Boolean(user && (user.rol === "admin" || user.role === "admin" || user.isAdmin));

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated, isAdmin }}> 
            {children} 
        </AuthContext.Provider>
    );
};