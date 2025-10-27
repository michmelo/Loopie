/**
 * Tarjeta que representa una categoría de producto.
 * @param {{ title: string, description: string, icon: string, onClick: () => void }} props
 */
export default function CategoryCard({ title, description, icon, onClick }) {
    return (
        <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="card-custom text-center">
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{icon}</div>
                <h3>{title}</h3>
                <p>{description}</p>
                <button className="btn-custom" onClick={onClick}>Explorar</button>
            </div>
        </div>
    );
}