// IMPORTS
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import AppFooter from "../components/Footer";
import ProfileInfoCard from "../components/perfil/ProfileInfoCard"; 
import ActionPanel from "../components/perfil/ActionPanel";        

import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import StoreProfile from "./StoreProfile";

// TODO: REEMPLAZAR MOCK POR DATOS REALES
// DATOS DEMO
const genericMockUser = {
    id: "U0234",
    nombre: "Usuario",
    apellido: "Testeo",
    user: "us_testeo",
    email: "user@looppie.cl",
    password: "ustesteo123",
    rol: "usuario",
    direccion: "Calle Wallaby 42, Valdivia",
};


/* VISTA PERFIL USUARIO (DEFAULT) */
function UserProfileView({ currentUser, onLogout }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout?.();
        navigate("/", { replace: true, state: { loggedOut: true, message: "Sesión cerrada" } });
    };

    return (
        <div style={{ 
            minHeight: "100vh", 
            backgroundColor: "var(--background-color)",
            display: "flex",        
            flexDirection: "column"
        }}>
            <Navbar />
            
            <main className="container-fluid" style={{ 
                padding: "2rem",
                flexGrow: 1 
            }}>
                <div className="container">
                    
                    <PageHeader 
                        title="Mi Perfil"
                        description={`Bienvenido de vuelta, ${currentUser.nombre}. Gestiona tus datos y pedidos.`}
                    />

                    <ProfileInfoCard user={currentUser} />
                    <ActionPanel handleLogout={handleLogout} />

                </div>
            </main>
            
            <AppFooter />
        </div>
    );
}


/**
 * Componente `Profile` - selecciona la vista según el rol del usuario.
 * Si el usuario tiene `rol` === 'tienda' (o 'store') muestra la vista de tienda,
 * en caso contrario la vista de usuario comprador.
 */
export default function Profile() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    if (!user) {
        // Redirigir al login si no hay usuario
        navigate("/login");
        return null;
    }

    // Determinar rol (compatibilidad con 'rol' o 'role')
    const role = user?.rol || user?.role || genericMockUser.rol;
    const currentUser = user || genericMockUser;

    // Si es tienda, renderizamos la vista de tienda (component separado)
    if (role === "tienda" || role === "store") {
        return <StoreProfile user={currentUser} logout={logout} />;
    }

    // Por defecto: perfil de usuario comprador
    return <UserProfileView currentUser={currentUser} onLogout={logout} />;
}