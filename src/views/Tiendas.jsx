// IMPORTS
import Navbar from "../components/Navbar";
import AppFooter from "../components/Footer";
import PageHeader from "../components/PageHeader";
import StoreCard from "../components/tienda/StoreCard";
import ProductTable from "../components/products/ProductTable";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts, getAllUsers } from "../data/api/api";


// Estado de tiendas generado a partir de productos (agrupado por campo tienda)
const initialStores = [];

// Navegación (simulación) y ejemplo de agregar producto demo al carrito
export default function Tiendas() {
    // const { addToCart } = useCart(); // demo helper removed

    const navigate = useNavigate();
    const [stores, setStores] = useState(initialStores);

    const [allProducts, setAllProducts] = useState([]);
    const [showProducts, setShowProducts] = useState(false);

    useEffect(() => {
        let mounted = true;

        (async () => {
            try {
                const res = await getAllProducts();
                let products = [];
                if (Array.isArray(res)) products = res;
                else if (res?.products) products = res.products;

                // Agrupar por campo `tienda` presente en cada producto
                const grouped = products.reduce((acc, p) => {
                    const tiendaId = p.tienda || p.store || 'unknown';
                    if (!acc[tiendaId]) {
                        acc[tiendaId] = { id: tiendaId, count: 0, sample: p };
                    }
                    acc[tiendaId].count += 1;
                    return acc;
                }, {});

                // Intentar obtener nombres de tiendas desde API de usuarios
                let users = [];
                try {
                    const ures = await getAllUsers();
                    if (Array.isArray(ures)) users = ures;
                    else if (ures?.users) users = ures.users;
                } catch (err) {
                    console.warn('Tiendas: getAllUsers falló', err);
                }

                const userMap = users.reduce((acc, u) => {
                    // Normalizar posibles claves (id, username, userId)
                    const key = u.id || u.userId || u.username || u.email || null;
                    if (key) acc[key] = u;
                    return acc;
                }, {});

                const list = Object.values(grouped).map((g) => {
                    const user = userMap[g.id];
                    const title = user ? (user.nombre ? `${user.nombre} ${user.apellido || ''}`.trim() : user.username || user.email || String(g.id)) : String(g.id);
                    return {
                        id: g.id,
                        title,
                        description: `${g.count} producto${g.count > 1 ? 's' : ''}`,
                        target: `/tiendas/${g.id}`,
                        thumbnail: g.sample?.imagen || g.sample?.imageUrl || null,
                    };
                });

                if (mounted) {
                    setStores(list);
                    setAllProducts(products);
                }
            } catch (err) {
                console.error('Tiendas: error cargando productos', err);
                if (mounted) setStores(initialStores);
            }
        })();

        return () => { mounted = false; };
    }, []);

    const handleViewStore = (store) => {
        // ruta target
        if (store?.target) {
            navigate(store.target);
            return;
        }

        // ruta id
        if (store?.id) {
            navigate(`/tiendas/${store.id}`);
            return;
        }

        console.warn("handleViewStore: store inválida", store);
    };

    // demo addToCart removed
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

                    <div style={{ margin: '1rem 0', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <button className="btn-custom" onClick={() => setShowProducts((s) => !s)}>
                            {showProducts ? 'Ver tiendas' : 'Mostrar productos'}
                        </button>
                        <small style={{ color: 'var(--muted-color)' }}>{showProducts ? 'Lista de productos (demo)' : 'Agrupado por tienda'}</small>
                    </div>

                    <div className="row">
                        {showProducts ? (
                            allProducts.length === 0 ? (
                                <div className="card-custom">No se encontraron productos (cargando...)</div>
                            ) : (
                                <div className="col-12">
                                    <ProductTable products={allProducts.map(p => ({
                                        id: p.id || p._id || p.codigo || 'n/a',
                                        name: p.name || p.nombre || p.title || 'Producto',
                                        stock: p.stock != null ? p.stock : (p.cantidad || 0),
                                        price: p.price || p.precio || p.precioNumero || 0,
                                        category: p.category || p.categoria || p.tipo || 'General'
                                    }))} />
                                </div>
                            )
                        ) : (
                            (stores.length === 0 ? (
                                <div className="card-custom">No se encontraron tiendas (cargando...)</div>
                            ) : (
                                stores.map(store => (
                                    <StoreCard
                                        key={store.id}
                                        id={store.id}
                                        title={store.title}
                                        description={store.description}
                                        onClick={() => handleViewStore(store)}
                                        thumbnail={store.thumbnail}
                                    />
                                ))
                            ))
                        )}
                    </div>
                </div>
            </main>
            
            <AppFooter />
        </div>
    );
}