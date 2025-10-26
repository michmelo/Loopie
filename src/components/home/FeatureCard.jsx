/**
 * Destacar característica de la página
 * @param {{ icon: string, title: string, description: string }} props
 */
export default function FeatureCard({ icon, title, description }) {
    return (
        <div className="col-md-4">
            <div className="card-custom text-center" style={{ height: "100%" }}>
                <div style={{
                    fontSize: "3rem",
                    marginBottom: "1rem"
                }}>
                    {icon}
                </div>
                <h3 style={{
                    color: "var(--primary-color)",
                    marginBottom: "1rem"
                }}>
                    {title}
                </h3>
                <p style={{
                    color: "var(--secondary-color)"
                }}>
                    {description}
                </p>
            </div>
        </div>
    );
}