// IMPORTS
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import CategoryCard from "../components/categoria/CategoryCard";
import AppFooter from "../components/Footer";

// DATOS DEMO
const categoriesData = [
    { id: 1, title: "Jeans", description: "Clásicos, skinny y wide leg.", icon: "👖" },
    { id: 2, title: "Poleras", description: "Algodón, estampadas y básicas.", icon: "👕" },
    { id: 3, title: "Chaquetas", description: "Denim, cuero y abrigos.", icon: "🧥" },
    { id: 4, title: "Vestidos", description: "Casuales, de fiesta y maxi.", icon: "👗" },
    { id: 5, title: "Zapatos", description: "Zapatillas, botines y sandalias.", icon: "👟" },
    { id: 6, title: "Accesorios", description: "Joyería, gorros y bufandas.", icon: "🧣" },
    { id: 7, title: "Deporte", description: "Ropa técnica y cómoda.", icon: "🏃‍♀️" },
    { id: 8, title: "Ofertas", description: "Los mejores precios del mes.", icon: "🏷️" },
];

// Manejo de navegación
// TODO: CAMBIAR POR useNavigate Y ROUTING REAL SEGÚN DATA DE CATEGORIAS
const handleCategoryClick = (categoryTitle) => {
    console.log(`Navegando a la categoría: ${categoryTitle}`);
    // useNavigate('/categoria/' + categoryTitle)
};

export default function Categorias() {
    // RENDER
    return (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--background-color)", display: "flex", flexDirection: "column" }}>
            <Navbar />
            
            {/* CONTENIDO */}
            <main className="container-fluid" style={{ padding: "2rem", flexGrow: 1 }}>
                <div className="container">
                    
                    <PageHeader 
                        title="Categorías"
                        description="Explora nuestras prendas organizadas por categorías"
                    />

                    {/* GRID DE CATEGORIAS */}
                    <div className="row">
                        {categoriesData.map(category => (
                            <CategoryCard
                                id={category.id}
                                title={category.title}
                                description={category.description}
                                icon={category.icon}
                                onClick={() => handleCategoryClick(category.title)}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    );
}