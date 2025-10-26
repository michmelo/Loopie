/**
 * Producto individual en el carrito
 * @param {{ name: string, cant: number, precio: string, onRemove: () => void }} props
 */
export default function CartItem({ name, cant: cant, precio: precio, onRemove }) {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            padding: "1rem",
            border: "1px solid var(--accent-color)",
            borderRadius: "var(--border-radius-md)",
            marginBottom: "1rem"
        }}>
            <div style={{
                width: "80px",
                height: "80px",
                backgroundColor: "var(--light-color)",
                borderRadius: "var(--border-radius-md)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "1rem",
                fontSize: "2rem"
            }}>
            </div>
            <div style={{ flex: 1 }}>
                <h4>{name}</h4>
                <p style={{ color: "var(--secondary-color)", margin: "0" }}>
                    Cantidad: {cant} | Precio: {precio}
                </p>
            </div>
            <button className="btn-custom" onClick={onRemove} style={{ marginLeft: "1rem" }}>
                Eliminar
            </button>
        </div>
    );
}