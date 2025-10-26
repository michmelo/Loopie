// IMPORTS
import Navbar from "../components/Navbar";
import AppFooter from "../components/Footer";
import PageHeader from "../components/PageHeader";
import OfferCard from "../components/oferta/OfferCard";

// DATOS DEMO OFERTAS
// TODO: CAMBIAR POR DATA MOCKUP
const offersData = [
    { id: 1, discount: "50% OFF", title: "Jeans Seleccionados", description: "Gran descuento en modelos Slim y Skinny.", target: "/ofertas/jeans" },
    { id: 2, discount: "3x2 en Básicos", title: "Poleras y Camisetas", description: "Lleva 3 y paga solo 2 en toda la línea básica.", target: "/ofertas/basicos" },
    { id: 3, discount: "Envío GRATIS", title: "Abrigos y Chaquetas", description: "Envío sin costo en pedidos superiores a $50.000.", target: "/ofertas/abrigos" },
];

// Navegación (simulación)
// TODO: REEMPLAZAR POR useNavigate y ruta correcta
const handleViewOffer = (offerTitle) => {
    console.log(`Ver detalles de la oferta: ${offerTitle}`);
    // useNavigate('/ofertas/' + offerId)
};


// COMPONENTE OFERTAS
/**
 * Página de ofertas de la aplicación Loopie
 * Muestra las mejores ofertas y descuentos disponibles
 */
export default function Ofertas() {
    // RENDER
    return (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--background-color)", display: "flex", flexDirection: "column" }}>
            <Navbar />
            
            <main className="container-fluid" style={{ padding: "2rem", flexGrow: 1 }}>
                <div className="container">
                    
                    <PageHeader 
                        title="Ofertas Especiales"
                        description="No te pierdas estas increíbles ofertas con descuentos exclusivos en tus prendas favoritas."
                    />

                    <div className="row">
                        {offersData.map(offer => (
                            <OfferCard
                                id={offer.id}
                                discount={offer.discount}
                                title={offer.title}
                                description={offer.description}
                                onClick={() => handleViewOffer(offer.title)}
                            />
                        ))}
                    </div>
                </div>
            </main>
            
            <AppFooter />
        </div>
    );
}