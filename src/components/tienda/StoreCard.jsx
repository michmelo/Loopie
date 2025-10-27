/**
 * Tarjeta de tiendas para vistas de panel o listado.
 * @param {{ title: string, description: string, onClick: () => void }} props
 */
export default function StoreCard({ title, description, onClick }) {
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card-custom">
                <h3>{title}</h3>
                <p>{description}</p>
                <button className="btn-custom" onClick={onClick}>Ver Productos</button>
            </div>
        </div>
    );
}