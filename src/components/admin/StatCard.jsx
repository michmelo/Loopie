/**
 * Estadísticas rápidas para admin.
 * @param {{ title: string, value: string, buttonText: string }} props
 */

export default function StatCard({ title, value, buttonText }) {
    return (
        <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="card-custom text-center">
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}></div>
                <h3>{title}</h3>
                <p style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--accent-color)" }}>{value}</p>
                <button className="btn-custom">{buttonText}</button>
            </div>
        </div>
    );
}