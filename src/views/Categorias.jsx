// IMPORTS
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import CategoryCard from "../components/categoria/CategoryCard";
import AppFooter from "../components/Footer";
import { useEffect, useState } from "react";
import { getAllProducts } from "../data/api/api";
import { useNavigate } from "react-router-dom";

export default function Categorias() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                const res = await getAllProducts();
                let products = [];
                if (Array.isArray(res)) products = res;
                else if (res?.products) products = res.products;

                const map = products.reduce((acc, p) => {
                    const cat = p.categoria || p.category || 'Otros';
                    if (!acc[cat]) acc[cat] = { title: cat, count: 0 };
                    acc[cat].count += 1;
                    return acc;
                }, {});

                const list = Object.values(map).map((c, i) => ({ id: i + 1, title: c.title, description: `${c.count} productos`, icon: '🛍️' }));
                if (mounted) setCategories(list);
            } catch (err) {
                console.error('Categorias: error cargando productos', err);
                if (mounted) setCategories([]);
            }
        })();
        return () => { mounted = false; };
    }, []);

    const handleCategoryClick = (categoryTitle) => {
        navigate(`/categorias/${encodeURIComponent(categoryTitle)}`);
    };

    // RENDER
    return (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--background-color)", display: "flex", flexDirection: "column" }}>
            <Navbar />
            
            {/* CONTENIDO */}
            <main className="container-fluid" style={{ padding: "2rem", flexGrow: 1 }}>
                <div className="container">
                    
                    <PageHeader 
                        title="Categorías"
                        description="Explora nuestras prendas organizadas por categorías"
                    />

                    {/* GRID DE CATEGORIAS */}
                    <div className="row">
                        {categories.length === 0 ? (
                            <div className="card-custom">No hay categorías disponibles.</div>
                        ) : (
                            categories.map(category => (
                                <CategoryCard
                                    key={category.id}
                                    id={category.id}
                                    title={category.title}
                                    description={category.description}
                                    icon={category.icon}
                                    onClick={() => handleCategoryClick(category.title)}
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