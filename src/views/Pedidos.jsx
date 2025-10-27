import Navbar from "../components/Navbar";
import AppFooter from "../components/Footer";
import PageHeader from "../components/PageHeader";
import OrderSummary from "../components/carrito/OrderSummary";
import { Link } from "react-router-dom";
import { usePedidos } from "../hooks/usePedidos";
import { formatToCLP } from "../utils/price";

// PEDIDO INDIVIDUAL
function OrderCard({ order }) {
    return (
        <div className="card-custom" style={{ marginBottom: '1rem', padding: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <strong>{String(order.id)}</strong>
                    <div style={{ color: 'var(--muted-color)' }}>{order.fecha || order.date}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: '600' }}>{typeof order.total === 'number' ? formatToCLP(order.total) : order.total}</div>
                    <div style={{ color: order.estado === 'Enviado' || order.estado === 'pagado' ? 'green' : '#a63a3a' }}>{order.estado || order.status}</div>
                </div>
            </div>

            <hr />
            <ul style={{ paddingLeft: '1rem', marginTop: 0 }}>
                {Array.isArray(order.items) && order.items.map((it) => {
                    const qty = it.cant || it.qty || 1;
                    const name = it.name || it.nombre || it.title || 'Producto';
                    const price = typeof it.precio === 'number' ? formatToCLP(it.precio) : (it.precio || it.price || '—');
                    return (
                        <li key={it.id || name} style={{ marginBottom: '0.25rem' }}>{qty} × {name} <span style={{ color: 'var(--muted-color)' }}> — {price}</span></li>
                    );
                })}
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
    const { orders } = usePedidos();

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />

            <main className="container-fluid" style={{ padding: "2rem", flexGrow: 1 }}>
                <div className="container">
                    <PageHeader title="Historial de Pedidos" description="Aquí verás tus pedidos recientes." />

                    <div className="row">
                        <div className="col-12 col-lg-8">
                            {(!orders || orders.length === 0) ? (
                                <div className="card-custom" style={{ padding: '1rem' }}>
                                    <p>No tienes pedidos aún. Cuando compres, aparecerán aquí.</p>
                                    <Link to="/tiendas" className="btn-custom">Ir a Tiendas</Link>
                                </div>
                            ) : (
                                orders.map((o) => <OrderCard key={o.id} order={o} />)
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
