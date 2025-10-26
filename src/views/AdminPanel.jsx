// IMPORTS
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/admin/StatCard";
import QuickTools from "../components/admin/QuickTools";
import RecentActivity from "../components/admin/RecentActivity";
import AppFooter from "../components/Footer";

// DATOS DEMO
const statsData = [
    { title: "Usuarios", value: "473", buttonText: "Gestionar" },
    { title: "Productos", value: "597", buttonText: "Gestionar" },
    { title: "Pedidos", value: "389", buttonText: "Ver Pedidos" },
    { title: "Ventas", value: "$5.385.890", buttonText: "Ver Reportes" },
];

// ADMIN PANEL
/* Panel de administración. Acceso restringido, solo para administradores */
export default function AdminPanel() {
    // RENDER
    return (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--background-color)", display: "flex", flexDirection: "column" }}>
            <Navbar />
            
            {/* CONTENIDO */}
            <main className="container-fluid" style={{ padding: "2rem", flexGrow: 1 }}>
                <div className="container">
                    
                    {/* HEADER */}
                    <PageHeader 
                        title="Panel de Administración"
                        description="Gestiona productos, usuarios y configuraciones del sistema"
                    />

                    {/* DASHBOARD */}
                    <div className="row">
                        {/* ESTADISTICAS */}
                        {statsData.map((stat, index) => (
                            <StatCard 
                                id={index}
                                title={stat.title}
                                value={stat.value}
                                buttonText={stat.buttonText}
                            />
                        ))}
                    </div>

                    {/* HHERRAMIENTAS ADMIN */}
                    <div className="row">
                        <QuickTools />
                        <RecentActivity />
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    );
}