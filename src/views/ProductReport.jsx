// IMPORTS
import Navbar from "../components/Navbar";
import AppFooter from "../components/Footer";
import PageHeader from "../components/PageHeader";
import ProductTable from "../components/products/ProductTable";
import { useEffect, useState } from "react";
import { getAllProducts } from "../data/api/api";

// PRODUCT REPORT
/* Panel de administración para ver y gestionar el listado de productos. */

export default function ProductReport() {
    
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
                console.error('ProductReport: error cargando productos', err);
                if (mounted) setProducts([]);
            }
        })();

        return () => { mounted = false; };
    
    }, []);

    // RENDER
    return (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--background-color)", display: "flex", flexDirection: "column" }}>
            <Navbar />
            
            {/* CONTENIDO */}
            <main className="container-fluid" style={{ padding: "2rem", flexGrow: 1 }}>
                <div className="container">
                    <PageHeader 
                        title="Inventario de Productos"
                        description="Gestiona el listado, stock y precios de todos los productos de la tienda."
                    />
                    
                    {/* Botón agregar nuevo producto */}
                    <div className="row mb-4">
                        <div className="col-12 text-right">
                             <button 
                                className="btn-custom" 
                                style={{ padding: '12px 24px', backgroundColor: 'var(--pink-accent)', color: 'var(--background-color)' }}
                                onClick={() => console.log('Abrir formulario de nuevo producto')}
                             >
                                + Agregar Nuevo Producto
                            </button>
                        </div>
                    </div>

                    {/* Reporte de productos */}
                    <ProductTable products={products} />

                </div>
            </main>
            
            <AppFooter />
        </div>
    );
}