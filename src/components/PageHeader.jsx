/**
 * Encabezado reutilizable con título y descripción.
 * @param {{ title: string, description: string }} props
 */

export default function PageHeader({ title, description }) {
    return (
        <div className="row mb-4">
            <div className="col-12">
                <h1 style={{
                    color: "var(--primary-color)",
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    marginBottom: "1rem",
                    textAlign: "center"
                }}>
                    {title}
                </h1>
                <p style={{
                    color: "var(--secondary-color)",
                    fontSize: "1.1rem",
                    textAlign: "center",
                    maxWidth: "600px",
                    margin: "0 auto"
                }}>
                    {description}
                </p>
            </div>
        </div>
    );
}