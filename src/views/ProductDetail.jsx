// IMPORTS
import Navbar from "../components/Navbar";
import AppFooter from "../components/Footer";
import ProductImageGallery from "../components/products/ProductImageGallery";
import ProductInfoPanel from "../components/products/ProductInfoPanel";
import { parseCLP, formatToCLP } from "../utils/price";
import { useCart } from "../hooks/useCart";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../data/api/api";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                const res = await getAllProducts();
                let products = [];
                if (Array.isArray(res)) products = res;
                else if (res?.products) products = res.products;

                const found = products.find(p => String(p.id) === String(id));
                if (mounted) setProduct(found || null);
            } catch (err) {
                console.error('ProductDetail: error cargando productos', err);
                if (mounted) setProduct(null);
            }
        })();
        return () => { mounted = false; };
    }, [id]);

    const handleAddToCart = (prod) => {
        const item = { id: prod.id, name: prod.nombre || prod.name || prod.title, precio: prod.precio || prod.price || 0, cant: 1 };
        addToCart(item);
    };

    if (!product) {
        return (
            <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
                <Navbar />
                <main className="container-fluid" style={{ padding: "2rem", flexGrow: 1 }}>
                    <div className="container">
                        <div className="card-custom">Producto no encontrado o cargando...</div>
                    </div>
                </main>
                <AppFooter />
            </div>
        );
    }

    const precioNum = parseCLP(product.precio || product.price);
    const productDetails = {
        id: product.id,
        name: product.nombre || product.name || product.title,
        precioNumero: precioNum,
        precioFormateado: formatToCLP(precioNum),
        descr: product.descripcion || product.descr || '',
        cant: product.stock ? 1 : 0,
        imageUrl: product.imagen || product.imageUrl || '',
    };

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--background-color)", display: "flex", flexDirection: "column" }}>
            <Navbar />
            <main className="container-fluid" style={{ padding: "2rem", flexGrow: 1 }}>
                <div className="container">
                    <div className="row">
                        <ProductImageGallery 
                            imageUrl={productDetails.imageUrl} 
                            productName={productDetails.name} 
                        />

                        <ProductInfoPanel 
                            product={productDetails}
                            onAddToCart={() => handleAddToCart(product)}
                        />
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    );
}