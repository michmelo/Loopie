// IMPORTS
import { useState } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import CartItem from "../components/carrito/CartItem";
import OrderSummary from "../components/carrito/OrderSummary";
import AppFooter from "../components/Footer";


// formateo de precio
const formatToCLP = (number) => '$' + number.toLocaleString('es-CL');

export default function Carrito() {
  // DATOS SIMULADOS 
  const [cartItems, setCartItems] = useState([
      { id: 1, name: "Jeans Slim Fit Clásico", cant: 1, precio: 13990 },
      { id: 2, name: "Polera de Algodón Blanca", cant: 3, precio: 4990 },
  ]);

  // ELIMINAR ITEM
  const handleRemoveItem = (itemId) => {
      setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  // CALCULOS CARRITO
  const calcularTotalesCarrito = () => {
      const totalEnvio = 3500;
      const subtotal = cartItems.reduce(
      (acc, item) => acc + item.precio * item.cant,
      0
      );

      const total = subtotal + totalEnvio;

      return {
      subtotal: formatToCLP(subtotal),
      envio: formatToCLP(totalEnvio),
      total: formatToCLP(total),
      };
  };

  const orderTotals = calcularTotalesCarrito();

return (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--background-color)", display: "flex", flexDirection: "column" }}>
      <Navbar />

  <main className="container-fluid" style={{ padding: "2rem", flexGrow: 1 }}>
        <div className="container">
          <PageHeader
            title="Mi Carrito de Compras"
            description="Revisa las prendas que has seleccionado antes de finalizar tu compra."
          />

          <div className="row">
            {/* LISTA PRODUCTOS */}
            <div className="col-12 col-lg-8">
              <div className="card-custom mb-4">
                <h3>Prendas en tu carrito</h3>

                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <CartItem
                      id={item.id}
                      name={item.name}
                      cant={item.cant}
                      precio={formatToCLP(item.precio)}
                      onRemove={() => handleRemoveItem(item.id)}
                    />
                  ))
                ) : (
                  <p>Tu carrito está vacío 🛒</p>
                )}
              </div>
            </div>

            {/* RESUMEN PEDIDO */}
            <OrderSummary
              subtotal={orderTotals.subtotal}
              envio={orderTotals.envio}
              total={orderTotals.total}
            />
          </div>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}