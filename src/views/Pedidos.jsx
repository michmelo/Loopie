import Navbar from "../components/Navbar";
import AppFooter from "../components/Footer";
import PageHeader from "../components/PageHeader";
import OrderSummary from "../components/carrito/OrderSummary";
import { Link } from "react-router-dom";
import { usePedidos } from "../hooks/usePedidos";
import { formatToCLP, parseCLP } from "../utils/price";

// PEDIDO INDIVIDUAL
function OrderCard({ order }) {
    const id = String(order.id ?? order.idPedido ?? "—");
    const fecha = order.fecha || order.date || "Sin fecha";
    const estado = order.estado || order.status || "Pendiente";

    const totalNum =
        typeof order.total === "number" ? order.total : parseCLP(order.total);
    const totalFmt = totalNum > 0 ? formatToCLP(totalNum) : (order.total || "—");

    const isOk =
        estado === "Enviado" ||
        estado === "Pagado" ||
        estado === "pagado" ||
        estado === "Completado";

    return (
        <div
            className="card-custom"
            style={{ marginBottom: "1rem", padding: "1rem" }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div>
                    <strong>{id}</strong>
                    <div style={{ color: "var(--muted-color)" }}>{fecha}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                    <div style={{ fontWeight: 600 }}>{totalFmt}</div>
                    <div
                        style={{
                            color: isOk ? "green" : "#a63a3a",
                            fontWeight: 500,
                        }}
                    >
                        {estado}
                    </div>
                </div>
            </div>

            <hr />
            <ul style={{ paddingLeft: "1rem", marginTop: 0 }}>
                {Array.isArray(order.items) &&
                    order.items.map((it) => {
                        const qty = it.cant || it.qty || it.cantidad || 1;
                        const name =
                            it.name || it.nombre || it.title || "Producto sin nombre";
                        const priceNum =
                            typeof it.precio === "number"
                                ? it.precio
                                : parseCLP(it.precio || it.price || "0");
                        const priceFmt =
                            priceNum > 0
                                ? formatToCLP(priceNum)
                                : it.precio || it.price || "—";

                        return (
                            <li key={it.id || name} style={{ marginBottom: "0.25rem" }}>
                                {qty} × {name}
                                <span style={{ color: "var(--muted-color)" }}>
                                    {" "}
                                    — {priceFmt}
                                </span>
                            </li>
                        );
                    })}
            </ul>

            <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
                <Link
                    to="#"
                    className="btn-custom"
                    style={{ padding: "6px 10px" }}
                    onClick={(e) => e.preventDefault()}
                >
                    Ver Detalle
                </Link>
                <button
                    className="btn-custom"
                    style={{
                        padding: "6px 10px",
                        backgroundColor: "var(--secondary-color)",
                    }}
                    onClick={() => console.log("Repetir pedido", id)}
                >
                    Repetir Pedido
                </button>
            </div>
        </div>
    );
}

// HISTORIAL DE PEDIDOS
export default function Pedidos() {
    const { orders } = usePedidos();

    // Calcula el resumen usando el último pedido (si existe)
    let resumen = {
        subtotal: formatToCLP(0),
        envio: formatToCLP(0),
        total: formatToCLP(0),
    };

    if (orders && orders.length > 0) {
        const last = orders[orders.length - 1];

        const totalNum =
            typeof last.total === "number" ? last.total : parseCLP(last.total);
        const envioNum = 3500; // mismo envío que en Checkout
        const subtotalNum = Math.max(totalNum - envioNum, 0);

        resumen = {
            subtotal: formatToCLP(subtotalNum),
            envio: formatToCLP(envioNum),
            total: formatToCLP(totalNum),
        };
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "var(--background-color)",
            }}
        >
            <Navbar />

            <main
                className="container-fluid"
                style={{ padding: "2rem", flexGrow: 1 }}
            >
                <div className="container">
                    <PageHeader
                        title="Historial de Pedidos"
                        description="Aquí verás tus pedidos recientes."
                    />

                    <div className="row">
                        <div className="col-12 col-lg-8">
                            {!orders || orders.length === 0 ? (
                                <div className="card-custom" style={{ padding: "1rem" }}>
                                    <p>No tienes pedidos aún. Cuando compres, aparecerán aquí.</p>
                                    <Link to="/tiendas" className="btn-custom">
                                        Ir a Tiendas
                                    </Link>
                                </div>
                            ) : (
                                orders.map((o) => <OrderCard key={o.id} order={o} />)
                            )}
                        </div>

                        <div className="col-12 col-lg-4">
                            <OrderSummary
                                subtotal={resumen.subtotal}
                                envio={resumen.envio}
                                total={resumen.total}
                            />
                        </div>
                    </div>
                </div>
            </main>

            <AppFooter />
        </div>
    );
}
