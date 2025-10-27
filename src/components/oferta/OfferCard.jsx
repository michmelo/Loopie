/**
 * Tarjeta oferta
 * @param {{ dscto: string, title: string, descr: string, onClick: () => void }} props
 */
export default function OfferCard({ dscto, title, descr, onClick }) {
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card-custom">
                {/* Badge de Descuento */}
                <div style={{
                    backgroundColor: "var(--accent-color)",
                    color: "var(--primary-color)",
                    padding: "0.5rem",
                    borderRadius: "var(--border-radius-md)",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginBottom: "1rem"
                }}>
                    {dscto}
                </div>
                <h3>{title}</h3>
                <p>{descr}</p>
                <button className="btn-custom" onClick={onClick}>Ver Oferta</button>
            </div>
        </div>
    );
}