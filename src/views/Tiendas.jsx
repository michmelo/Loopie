// IMPORTS
import Navbar from "../components/Navbar";
import AppFooter from "../components/Footer";
import PageHeader from "../components/PageHeader";
import StoreCard from "../components/tienda/StoreCard";


// DATOS DEMO
const storesData = [
    { id: 1, title: "Loopie Jeans & Co.", description: "Especialistas en denim de alta calidad y básicos.", target: "/tiendas/jeans-co" },
    { id: 2, title: "Urban Wear Chile", description: "Ropa urbana, polerones y accesorios modernos.", target: "/tiendas/urban-wear" },
    { id: 3, title: "Vintage Finds", description: "Selección curada de prendas únicas y retro.", target: "/tiendas/vintage-finds" },
    { id: 4, title: "Sport Loop", description: "Equipamiento y vestuario deportivo para mujer y hombre.", target: "/tiendas/sport-loop" },
];

// Navegación (simulación)
const handleViewStore = (storeTitle) => {
    console.log(`Navegando a la tienda: ${storeTitle}`);
    // useNavigate('/tiendas/' + userId) --> userId filtrando por user rol tienda
};


// COMPONENTE TIENDAS
/**
 * Página de tiendas de la aplicación Loopie
 * Muestra un listado de tiendas disponibles
 */
export default function Tiendas() {
    // RENDER
    return (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--background-color)", display: "flex", flexDirection: "column" }}>
            <Navbar />
            
            <main className="container-fluid" style={{ padding: "2rem", flexGrow: 1 }}>
                <div className="container">
                    
                    <PageHeader 
                        title="Nuestras Tiendas"
                        description="Descubre las mejores tiendas de ropa y encuentra los productos que necesitas"
                    />

                    <div className="row">
                        {storesData.map(store => (
                            <StoreCard
                                id={store.id}
                                title={store.title}
                                description={store.description}
                                onClick={() => handleViewStore(store.title)}
                            />
                        ))}
                    </div>
                </div>
            </main>
            
            <AppFooter />
        </div>
    );
}