// IMPORTS
import Navbar from "../components/Navbar";
import AppFooter from "../components/Footer";
import ProductImageGallery from "../components/products/ProductImageGallery";
import ProductInfoPanel from "../components/products/ProductInfoPanel";
import { parseCLP, formatToCLP } from "../utils/price";


// DEMO DATOS
const mockProduct = {
    id: 101,
    name: "Vestido Midi Estampado",
    precio: "10.500",
    descr: "Vestido midi de tela ligera con estampado floral. Perfecto para primavera/verano. Incluye ajuste elástico en la cintura y cuello en V.",
    cant: 1,
    imageUrl: "/images/vestido.jpg",
};

// Parseo de precio
const precioNum = parseCLP(mockProduct.precio);

const productDetails = {
    ...mockProduct,
    precioNumero: precioNum,
    precioFormateado: formatToCLP(precioNum),
};


// DETALLE PRODUCTO
export default function ProductDetail() {
    
    // FUNCION PARA AGREGAR AL CARRITO
    const handleAddToCart = (product) => {
        try {
            const KEY = "cart";
            const raw = localStorage.getItem(KEY);
            const cart = raw ? JSON.parse(raw) : [];

            const itemToAdd = {
                ...product,
                cant: 1,
            };

            // Revisar duplicados (como es ropa usada es solo 1 ítem por producto)
            const exists = cart.some((p) => p.id === itemToAdd.id);
            if (!exists) {
                cart.push(itemToAdd);
                localStorage.setItem(KEY, JSON.stringify(cart));
            }

            return cart;
        } catch (err) {
            console.error("Error al actualizar el carrito:", err);
            return null;
        }
    };
    // RENDER
    return (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--background-color)", display: "flex", flexDirection: "column" }}>
            <Navbar />
            
            <main className="container-fluid" style={{ padding: "2rem", flexGrow: 1 }}>
                <div className="container">
                                        
                    <div className="row">
                        {/* IZQUIERDA*/}
                        <ProductImageGallery 
                            imageUrl={productDetails.imageUrl} 
                            productName={productDetails.name} 
                        />

                        {/* DERECHA */}
                        <ProductInfoPanel 
                            product={productDetails}
                            onAddToCart={handleAddToCart}
                        />
                    </div>
                </div>
            </main>
            
            <AppFooter />
        </div>
    );
}