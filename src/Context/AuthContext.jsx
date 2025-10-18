import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => { //children son los componentes que envuelve AuthProvider, un paquete
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    }
//devuelve los componentes que envuelve AuthProvider, los hijos
    return (
        <AuthContext.Provider value={{ user, setUser }}> 
        {children} 
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
