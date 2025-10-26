import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import AppFooter from "../components/Footer";
import ProfileInfoCard from "../components/perfil/ProfileInfoCard";
import ActionPanel from "../components/perfil/ActionPanel";
import ProductTable from "../components/products/ProductTable";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts } from "../data/api/api";

/**
 * Vista de perfil para tiendas.
 */

export default function StoreProfile({ user, logout }) {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        let mounted = true;
        
        (async () => {
            try {
                const res = await getAllProducts();
                let list = [];
                if (Array.isArray(res)) list = res;
                if (mounted) setProducts(list);
            } catch (err) {
                console.error('StoreProfile: error cargando productos', err);
                if (mounted) setProducts([]);
            }
        })();

        return () => { mounted = false; };
    }, []);

    if (!user) {
        navigate("/login");
        return null;
    }

    const handleLogout = () => {
        logout?.();
        navigate("/");
    };

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--background-color)", display: "flex", flexDirection: "column" }}>
            <Navbar />

            <main className="container-fluid" style={{ padding: "2rem", flexGrow: 1 }}>
                <div className="container">
                    <PageHeader title="Perfil de Tienda" description={`Panel de gestión para ${user.nombre || 'su tienda'}.`} />

                    <div className="row">
                        <div className="col-12 col-md-6">
                            <ProfileInfoCard user={user} />
                            <div style={{ marginTop: '1rem' }}>
                                <ActionPanel handleLogout={handleLogout} />
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="card-custom" style={{ padding: '1rem' }}>
                                <h3 style={{ marginTop: 0 }}>Reporte rápido</h3>
                                <p style={{ marginTop: 0, color: 'var(--muted-color)' }}>Resumen de productos y acciones rápidas.</p>

                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <Link to="/product-report" className="btn-custom" style={{ padding: '8px 12px', backgroundColor: 'var(--pink-accent)', color: 'var(--background-color)' }}>
                                        Ver Reporte Completo
                                    </Link>
                                    <Link to="/tienda-panel" className="btn-custom" style={{ padding: '8px 12px', backgroundColor: 'var(--primary-color)', color: '#fff' }}>
                                        Ir al Panel de Tienda
                                    </Link>
                                    <button className="btn-custom" style={{ padding: '8px 12px' }} onClick={() => console.log('Abrir editor de catálogo')}>
                                        Editar Catálogo
                                    </button>
                                </div>

                                {/* TABLA DE PRODUCTOS */}
                                <ProductTable products={products} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <AppFooter />
        </div>
    );
}
