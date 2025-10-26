import FeatureCard from "./FeatureCard";

const featuresData = [
    { 
        id: 1, 
        icon: "🏪", 
        title: "Múltiples Tiendas", 
        description: "Conectamos con las mejores tiendas para ofrecerte una amplia variedad de productos." 
    },
    { 
        id: 2, 
        icon: "💰", 
        title: "Mejores Ofertas", 
        description: "Encuentra las ofertas más exclusivas y ahorra en tus compras favoritas." 
    },
    { 
        id: 3, 
        icon: "🛒", 
        title: "Carrito Inteligente", 
        description: "Gestiona tus compras de manera fácil y segura con nuestro carrito inteligente." 
    },
];

/**
 * Principales características de la aplicación.
 */
export default function FeaturesSection() {
    return (
        <section className="features-section" style={{
            padding: "4rem 2rem",
            backgroundColor: "var(--background-color)"
        }}>
            <div className="container">
                <h2 style={{
                    color: "var(--primary-color)",
                    textAlign: "center",
                    marginBottom: "3rem",
                    fontSize: "2.5rem"
                }}>
                    ¿Por qué elegir Loopie?
                </h2>
                
                <div className="row g-4">
                    {featuresData.map(feature => (
                        <FeatureCard 
                            id={feature.id}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}