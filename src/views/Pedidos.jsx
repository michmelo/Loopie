import Navbar from "../components/Navbar";
import AppFooter from "../components/Footer";
import PageHeader from "../components/PageHeader";
import OrderSummary from "../components/carrito/OrderSummary";
import { Link } from "react-router-dom";

const mockOrders = [
    {
        id: "O-1001",
        date: "2025-10-10",
        total: "45.990",
        status: "Enviado",
        items: [
            { id: "P001", name: "Jeans Skinny Azul", cant: 1, precio: "34.990" },
            { id: "P002", name: "Calcetines", cant: 2, precio: "5.500" },
        ],
    },
    {
        id: "O-1002",
        date: "2025-09-28",
        total: "12.990",
        status: "Pendiente",
        items: [
            { id: "P010", name: "Polera Algodón Negra", cant: 1, precio: "12.990" },
        ],
    },
];

// PEDIDO INDIVIDUAL
function OrderCard({ order }) {
    return (
        <div className="card-custom" style={{ marginBottom: '1rem', padding: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <strong>{order.id}</strong>
                    <div style={{ color: 'var(--muted-color)' }}>{order.date}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: '600' }}>{order.total}</div>
                    <div style={{ color: order.status === 'Enviado' ? 'green' : '#a63a3a' }}>{order.status}</div>
                </div>
            </div>

            <hr />
            <ul style={{ paddingLeft: '1rem', marginTop: 0 }}>
                {order.items.map((it) => (
                    <li id={it.id} style={{ marginBottom: '0.25rem' }}>{it.qty} × {it.name} <span style={{ color: 'var(--muted-color)' }}> — {it.price}</span></li>
                ))}
            </ul>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                <Link to="#" className="btn-custom" style={{ padding: '6px 10px' }} onClick={(e) => e.preventDefault()}>
                    Ver Detalle
                </Link>
                <button className="btn-custom" style={{ padding: '6px 10px', backgroundColor: 'var(--secondary-color)' }} onClick={() => console.log('Repetir pedido', order.id)}>
                    Repetir Pedido
                </button>
            </div>
        </div>
    );
}

// HISTORIAL DE PEDIDOS
export default function Pedidos() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />

            <main className="container-fluid" style={{ padding: "2rem", flexGrow: 1 }}>
                <div className="container">
                    <PageHeader title="Historial de Pedidos" description="Aquí verás tus pedidos recientes." />

                    <div className="row">
                        <div className="col-12 col-lg-8">
                            {mockOrders.length === 0 ? (
                                <div className="card-custom" style={{ padding: '1rem' }}>
                                    <p>No tienes pedidos aún. Cuando compres, aparecerán aquí.</p>
                                    <Link to="/tiendas" className="btn-custom">Ir a Tiendas</Link>
                                </div>
                            ) : (
                                mockOrders.map((o) => <OrderCard id={o.id} order={o} />)
                            )}
                        </div>

                        <div className="col-12 col-lg-4">
                            <OrderSummary subtotal="58.480" envio="4.990" total="63.470" />
                        </div>
                    </div>
                </div>
            </main>

            <AppFooter />
        </div>
    );
}
