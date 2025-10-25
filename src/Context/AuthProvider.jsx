import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvidear = ({ children }) => { //children son los componentes que envuelve AuthProvider, un paquete
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

    return (
        <AuthContext.Provider value={{ user, login, logout }}> 
            {children} 
        </AuthContext.Provider>
    );
};