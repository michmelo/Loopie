import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import AppFooter from "../components/Footer";
import ProfileInfoCard from "../components/perfil/ProfileInfoCard";
import ActionPanel from "../components/perfil/ActionPanel";
import ProductTable from "../components/products/ProductTable";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";
import { getAllProducts } from "../data/api/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

/**
 * Vista de perfil para tiendas.
 */

export default function StoreProfile() {
    const navigate = useNavigate();
    const { id: storeId } = useParams();
    const { user, logout, isAdmin } = useAuth();

    const isStore = Boolean(user && (user.rol === "tienda" || user.role === "store"));

    // Protege la vista: solo usuarios con rol tienda (o admin) pueden acceder
    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }
        if (!isStore && !isAdmin) {
            navigate('/no-auth');
            return;
        }
    }, [user, isAdmin, isStore, navigate]);

    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();

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

    // Allow public view of a store's products. If no authenticated user, we still show products.

    const handleLogout = () => {
        logout?.();
        navigate("/");
    };

    const handleAddFirstProduct = () => {
        if (!products || products.length === 0) return;
        const p = products[0];
        const item = { id: p.id || `p-${Date.now()}`, name: p.name || p.title || 'Producto', precio: p.precio || p.price || 0, cant: 1 };
        addToCart(item);
        console.log('Producto agregado al carrito desde StoreProfile:', item);
    };

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--background-color)", display: "flex", flexDirection: "column" }}>
            <Navbar />

            <main className="container-fluid" style={{ padding: "2rem", flexGrow: 1 }}>
                <div className="container">
                    <PageHeader title="Perfil de Tienda" description={`Productos para la tienda ${storeId || (user?.nombre || 'su tienda')}.`} />

                    <div className="row">
                        <div className="col-12 col-md-6">
                            <ProfileInfoCard user={user} />
                            <div style={{ marginTop: '1rem' }}>
                                <ActionPanel handleLogout={handleLogout} />
                            </div>
                            <div style={{ marginTop: '0.5rem' }}>
                                <button className="btn-custom" onClick={handleAddFirstProduct}>Agregar primer producto al carrito</button>
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

                                {/* TABLA DE PRODUCTOS (filtrada por tienda si corresponde) */}
                                <ProductTable products={products.filter(p => String(p.tienda || p.store || '') === String(storeId || ''))} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <AppFooter />
        </div>
    );
}
