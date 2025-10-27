import Navbar from "../components/Navbar";
import AppFooter from "../components/Footer";
import PageHeader from "../components/PageHeader";
import { useEffect, useState } from "react";
import { getAllProducts } from "../data/api/api";
import { useNavigate } from "react-router-dom";
import { formatToCLP, parseCLP } from "../utils/price";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await getAllProducts();
        let list = [];
        if (Array.isArray(res)) list = res;
        else if (res?.products) list = res.products;
        if (mounted) setProducts(list);
      } catch (err) {
        console.error('AllProducts: error cargando productos', err);
        if (mounted) setProducts([]);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--background-color)", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main className="container-fluid" style={{ padding: "2rem", flexGrow: 1 }}>
        <div className="container">
          <PageHeader title="Todos los Productos" description="Listado completo de productos disponibles" />

          {loading ? (
            <div className="card-custom">Cargando productos...</div>
          ) : products.length === 0 ? (
            <div className="card-custom">No se encontraron productos.</div>
          ) : (
            <div className="row">
              {products.map((p) => {
                const id = p.id || p._id || p.codigo || 'n/a';
                const name = p.nombre || p.name || p.title || 'Producto';
                const priceNum = parseCLP(p.precio || p.price || p.precioNumero);
                const price = formatToCLP(priceNum);
                const image = p.imagen || p.imageUrl || null;

                return (
                  <div key={id} className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card-custom" style={{ padding: 12 }}>
                      {image && (
                        <div style={{ height: 160, marginBottom: 8 }}>
                          <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 6 }} />
                        </div>
                      )}

                      <h4 style={{ marginTop: 0 }}>{name}</h4>
                      <div style={{ color: 'var(--muted-color)', marginBottom: 8 }}>{price}</div>

                      <div style={{ display: 'flex', gap: 8 }}>
                        <button className="btn-custom" onClick={() => navigate(`/producto/${id}`)}>Ver detalle</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
