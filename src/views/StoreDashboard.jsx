import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import AppFooter from "../components/Footer";
import StoreCard from "../components/tienda/StoreCard";
import ProductTable from "../components/products/ProductTable";
import ProductInfoPanel from "../components/products/ProductInfoPanel";
import ProductImageGallery from "../components/products/ProductImageGallery";
import QuickTools from "../components/admin/QuickTools";
import RecentActivity from "../components/admin/RecentActivity";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { getAllProducts } from "../data/api/api";


const mockOrders = [
  { id: 'O1001', customer: 'María R.', total: '45.990', status: 'Enviado' },
  { id: 'O1002', customer: 'Pablo S.', total: '12.990', status: 'Pendiente' },
];

export default function StoreDashboard() {
  const { user, isAuthenticated } = useAuth();

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
        console.error('StoreDashboard: error cargando productos', err);
        if (mounted) setProducts([]);
      } 
    })();

    return () => { mounted = false; };
    
  }, []);

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  const role = user?.rol || user?.role;
  if (!(role === "tienda")) return <Navigate to="/no-auth" replace />;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--background-color)', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main className="container-fluid" style={{ padding: '2rem', flexGrow: 1 }}>
        <div className="container">
          <PageHeader title="Panel de Tienda" description={`Gestión rápida de productos y pedidos para ${user?.nombre || 'su tienda'}`} />

          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="card-custom" style={{ padding: '1rem', marginBottom: '1rem' }}>
                <StoreCard store={user} />
              </div>

              <div className="card-custom" style={{ padding: '1rem', marginBottom: '1rem' }}>
                <h4 style={{ marginTop: 0 }}>Herramientas rápidas</h4>
                <QuickTools />
              </div>

              <div className="card-custom" style={{ padding: '1rem' }}>
                <h4 style={{ marginTop: 0 }}>Actividad reciente</h4>
                <RecentActivity items={mockOrders} />
              </div>
            </div>

            <div className="col-12 col-lg-8">
              <div className="card-custom" style={{ padding: '1rem', marginBottom: '1rem' }}>
                <h3 style={{ marginTop: 0 }}>Productos</h3>
                <p style={{ color: 'var(--muted-color)' }}>Lista de productos publicados. Puedes editar el stock o ver detalles.</p>
                <ProductTable products={products} />
              </div>

              <div className="card-custom" style={{ padding: '1rem' }}>
                <h3 style={{ marginTop: 0 }}>Detalle de producto (ejemplo)</h3>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <ProductImageGallery images={products?.[0]?.images || []} />
                  <ProductInfoPanel product={products?.[0] || null} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
