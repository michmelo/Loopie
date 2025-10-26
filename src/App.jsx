// IMPORTS
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./views/HomePage";
import Login from "./views/Login";
import Register from "./views/Register";
import Tiendas from "./views/Tiendas";
import Ofertas from "./views/Ofertas";
import Categorias from "./views/Categorias";
import Carrito from "./views/Carrito";
import Checkout from "./views/Checkout";
import AdminPanel from "./views/AdminPanel";
import Profile from "./views/Profile";
import { AuthProvider } from "./context/AuthProvider";
import { useAuth } from "./hooks/useAuth";
import StoreDashboard from "./views/StoreDashboard";
import AccessDenied from "./views/AccessDenied";
import SobreNosotras from "./views/SobreNosotras";
import Contacto from "./views/Contacto";
import PaymentSuccess from "./views/PaymentSuccess";
import PaymentError from "./views/PaymentError";
import ProductReport from "./views/ProductReport";
import Pedidos from "./views/Pedidos";
import Direccion from "./views/Direccion";
import CambiarContrasena from "./views/CambiarContrasena";

// COMPONENTE PRINCIPAL
/**
 * Componente raíz de la aplicación. Configura el enrutamiento y el contexto de autenticación
 */
function AppRoutes() {

  const { isAuthenticated, isAdmin, user } = useAuth();
  const isStore = Boolean(user && (user.rol === "tienda" || user.role === "store"));

  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<HomePage />} />
      <Route path="/tiendas" element={<Tiendas />} />
      <Route path="/ofertas" element={<Ofertas />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/sobre-nosotras" element={<SobreNosotras />} />
      <Route path="/contacto" element={<Contacto />} />

      {/* Rutas de autenticación (solo accesibles si NO estás autenticado) */}
      <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/perfil" replace />} />
      <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/perfil" replace />} />

      {/* Rutas privadas (requieren autenticación) */}
      <Route path="/perfil" element={isAuthenticated ? <Profile /> : <Navigate to="/login" replace />} />
      <Route path="/carrito" element={isAuthenticated ? <Carrito /> : <Navigate to="/login" replace />} />
      <Route path="/checkout" element={isAuthenticated ? <Checkout /> : <Navigate to="/login" replace />} />
      <Route path="/payment-success" element={isAuthenticated ? <PaymentSuccess /> : <Navigate to="/login" replace />} />
      <Route path="/payment-error" element={isAuthenticated ? <PaymentError /> : <Navigate to="/login" replace />} />

      {/* Rutas admin (requieren rol admin) */}
      <Route path="/admin" element={isAdmin ? <AdminPanel /> : <Navigate to="/no-admin" replace />} />
      <Route path="/product-report" element={isAdmin ? <ProductReport /> : <Navigate to="/no-admin" replace />} />

      {/* Rutas tienda: (requieren rol tienda) */}
      <Route path="/tienda-panel" element={isStore ? <StoreDashboard /> : <Navigate to="/no-auth" replace />} />

      {/* Rutas usuario - subsecciones (requieren rol usuario)*/}
      <Route path="/pedidos" element={isAuthenticated ? <Pedidos /> : <Navigate to="/login" replace />} />
      <Route path="/direccion" element={isAuthenticated ? <Direccion /> : <Navigate to="/login" replace />} />
      <Route path="/cambiar-contrasena" element={isAuthenticated ? <CambiarContrasena /> : <Navigate to="/login" replace />} />

      {/* Rutas acceso denegado */}
      <Route path="/no-auth" element={<AccessDenied mode="auth" />} />
      <Route path="/no-admin" element={<AccessDenied mode="admin" />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App


