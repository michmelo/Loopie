// IMPORTS
import { BrowserRouter, Routes, Route } from "react-router-dom";  // Componentes de enrutamiento
import HomePage from "./HomePage";                                // Componente de página principal
import Login from "./Login";                                      // Componente de inicio de sesión
import Register from "./Register";                                // Componente de registro
import Dashboard from "./Dashboard";                              // Componente del dashboard
import Tiendas from "./views/Tiendas";                            // Componente de tiendas
import Ofertas from "./views/Ofertas";                            // Componente de ofertas
import Categorias from "./views/Categorias";                      // Componente de categorías
import Carrito from "./views/Carrito";                            // Componente del carrito
import Checkout from "./views/Checkout";                          // Componente de checkout
import AdminPanel from "./views/AdminPanel";                      // Componente del panel de administración
import { AuthProvider } from "./Context/AuthContext";            // Proveedor de contexto de autenticación

// COMPONENTE PRINCIPAL
/**
 * Componente raíz de la aplicación
 * Configura el enrutamiento y el contexto de autenticación
 */
function App() {
  return (
    // Proveedor de contexto de autenticación para toda la aplicación
    <AuthProvider>
      {/* Router para manejo de rutas */}
      <BrowserRouter>
        {/* Configuración de rutas */}
        <Routes>
          {/* Ruta principal - Página de inicio */}
          <Route path="/" element={<HomePage />} />
          
          {/* Rutas de autenticación */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Rutas principales de navegación */}
          <Route path="/tiendas" element={<Tiendas />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App


