import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { clearCart, clearOrders } from "../data/localStorageService";

export const AuthProvider = ({ children }) => {
    // Recuperar sesión guardada -> usa clave de useEffect
    const [user, setUser] = useState(() => {
        try {
            const stored = localStorage.getItem("usuarioActivo");
            return stored ? JSON.parse(stored) : null;
        } catch {
            return null;
        }
    });

    // Inicio sesión (usuario activo)
    const login = (userData) => {
        setUser(userData);
    }

    // Cierre sesión (eliminar usuario activo y limpieza)
    const logout = () => {
    try {
        if (user?.id) {
        clearCart(user.id);
        clearOrders(user.id);
        }
    } catch (err) {
        console.error("Error limpiando datos locales:", err);
    }

    setUser(null);
    };
    
    // Sincroniza estado usuario con localStorage
    useEffect(() => {
        try {
            // Cifrar contraseña antes, invirtiendo la cadena y aplicando base64.
            const encodePassword = (pwd) => {
                try {
                    if (!pwd && pwd !== "") return pwd;
                    const reversed = String(pwd).split("").reverse().join("");
                    return btoa(unescape(encodeURIComponent(reversed)));
                } catch (err) {
                    console.error("encodePassword error:", err);
                    return pwd;
                }
            };

            if (user) {
                const storedUser = { ...user };
                if (storedUser.password) {
                    storedUser.password = encodePassword(storedUser.password);
                }
                localStorage.setItem("usuarioActivo", JSON.stringify(storedUser));
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