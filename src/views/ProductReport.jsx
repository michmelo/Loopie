// IMPORTS
import Navbar from "../components/Navbar";
import AppFooter from "../components/Footer";
import PageHeader from "../components/PageHeader";
import ProductTable from "../components/products/ProductTable";

// DATOS SIMULADOS
const mockProducts = [
    { id: 'P001', name: 'Jeans Skinny Azul', stock: 45, price: '34.990', category: 'Jeans' },
    { id: 'P002', name: 'Polera Algodón Negra', stock: 8, price: '12.990', category: 'Poleras' },
    { id: 'P003', name: 'Chaqueta Denim Clásica', stock: 21, price: '59.990', category: 'Chaquetas' },
    { id: 'P004', name: 'Vestido Floral Verano', stock: 3, price: '29.990', category: 'Vestidos' },
    { id: 'P005', name: 'Zapatillas Urbanas', stock: 12, price: '45.990', category: 'Zapatos' },
];


// PRODUCT REPORT
/* Panel de administración para ver y gestionar el listado de productos. */

export default function ProductReport() {
    
    // TODO: IMPLEMENTAR useAuth PARA RESTRINGIR ACCESO (SOLO ADMIN)

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
                    <ProductTable products={mockProducts} />

                </div>
            </main>
            
            <AppFooter />
        </div>
    );
}