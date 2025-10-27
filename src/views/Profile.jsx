// IMPORTS
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import AppFooter from "../components/Footer";
import ProfileInfoCard from "../components/perfil/ProfileInfoCard"; 
import ActionPanel from "../components/perfil/ActionPanel";        

import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import StoreProfile from "./StoreProfile";
import { useEffect, useState } from "react";
import { getAllUsers } from "../data/api/api";

// Nota: en lugar de usar un mock local, resolvemos datos de usuario desde la API cuando sea posible


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
                        description={`Bienvenido de vuelta, ${currentUser.nombre}.`}
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
 * Componente 'Profile' selecciona la vista según el rol del usuario.
 * Si el usuario tiene 'rol' === 'tienda' muestra la vista de tienda, en caso contrario la vista de usuario comprador
 */
export default function Profile() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [resolvedUser, setResolvedUser] = useState(user || null);

    useEffect(() => {
        if (!user) {
            navigate("/login");
            return;
        }

        let mounted = true;

        // Si el usuario no tiene nombre/apellido, intentar resolver datos desde la API de usuarios
        (async () => {
            try {
                // Llamada a la API que puede devolver un array o { users: [] }
                const res = await getAllUsers();
                let usersList = [];
                if (Array.isArray(res)) usersList = res;
                else if (res?.users) usersList = res.users;

                const match = usersList.find((u) => String(u.id) === String(user.id) || u.username === user.user || u.email === user.email);
                if (mounted && match) {
                    setResolvedUser((prev) => ({ ...prev, ...match }));
                }
            } catch (err) {
                console.warn("Profile: no se pudieron resolver usuarios desde API", err);
            }
        })();

        return () => { mounted = false; };
    }, [user, navigate]);

    const role = resolvedUser?.rol || resolvedUser?.role;

    if (role === "tienda" || role === "store") {
        return <StoreProfile user={resolvedUser} logout={logout} />;
    }

    return <UserProfileView currentUser={resolvedUser} onLogout={logout} />;
}