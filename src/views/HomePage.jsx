// IMPORTS
import Navbar from "../components/Navbar";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import CTASection from "../components/home/CTASection";
import AppFooter from "../components/Footer";


// HOMEPAGE
/**
 * Página principal de la aplicación Loopie
 * Incluye la barra de navegación y contenido principal
 */
export default function HomePage() {

    // Lógica y Hooks
    const { isAuthenticated } = useAuth();

    const navigate = useNavigate();

    // Lógica CTA
    const handlePrimaryAction = () => {
        if (isAuthenticated) {
            navigate("/perfil");
        } else {
            navigate("/login");
        }
    };

    // RENDER
    return (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--background-color)", display: "flex", flexDirection: "column" }}>
            <Navbar />
                        
            <main className="container-fluid" style={{ padding: "0", flexGrow: 1 }}>
                <HeroSection />
                <FeaturesSection />
                <CTASection 
                    isAuthenticated={isAuthenticated}
                    handlePrimaryAction={handlePrimaryAction}
                />
            </main>

            <AppFooter />
        </div>
    );
}