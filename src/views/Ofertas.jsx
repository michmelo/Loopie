// IMPORTS
import Navbar from "../components/Navbar";
import AppFooter from "../components/Footer";
import PageHeader from "../components/PageHeader";
import OfferCard from "../components/oferta/OfferCard";
import { useEffect, useState } from "react";
import { getAllProducts } from "../data/api/api";
import { useNavigate } from "react-router-dom";

// COMPONENTE OFERTAS
/**
 * Página de ofertas de la aplicación Loopie
 * Muestra las mejores ofertas y descuentos disponibles
 */
export default function Ofertas() {
    const [offers, setOffers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                const res = await getAllProducts();
                let products = [];
                if (Array.isArray(res)) products = res;
                else if (res?.products) products = res.products;

                const list = products
                    .filter(p => p.enOferta)
                    .map(p => ({
                        id: p.id,
                        discount: p.precioOferta ? `${Math.round((1 - (p.precioOferta / p.precio)) * 100)}% OFF` : 'Oferta',
                        title: p.nombre || p.title || `Producto ${p.id}`,
                        description: p.descripcion || '',
                        target: `/producto/${p.id}`,
                        productId: p.id,
                    }));

                if (mounted) setOffers(list);
            } catch (err) {
                console.error('Ofertas: error cargando productos', err);
                if (mounted) setOffers([]);
            }
        })();
        return () => { mounted = false; };
    }, []);

    const handleViewOffer = (productId) => {
        // detalle producto (si existe la ruta)
        navigate(`/producto/${productId}`);
    };

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
                        {offers.length === 0 ? (
                            <div className="card-custom">No hay ofertas disponibles.</div>
                        ) : (
                            offers.map(offer => (
                                <OfferCard
                                    key={offer.id}
                                    id={offer.id}
                                    discount={offer.discount}
                                    title={offer.title}
                                    description={offer.description}
                                    onClick={() => handleViewOffer(offer.productId)}
                                />
                            ))
                        )}
                    </div>
                </div>
            </main>
            
            <AppFooter />
        </div>
    );
}