/**
 * Formulario de envio (shipping)
 */

export default function ShippingForm() {
    return (
        <div className="card-custom mb-4">
            <h3>Información de Envío</h3>
            
            <div className="row">
                <div className="col-12 col-md-6 mb-3">
                    <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                        Nombre Completo
                    </label>
                    <input 
                        type="text" 
                        className="form-control-custom"
                        placeholder="Ingresa tu nombre completo"
                    />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                        Teléfono
                    </label>
                    <input 
                        type="tel" 
                        className="form-control-custom"
                        placeholder="Tu número de teléfono (+56)"
                    />
                </div>

                <div className="col-12 col-md-8 mb-3">
                    <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                        Dirección (Calle y Número)
                    </label>
                    <input 
                        type="text" 
                        className="form-control-custom"
                        placeholder="Ej: Soberania 1234"
                    />
                </div>

                <div className="col-12 col-md-4 mb-3">
                    <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                        Depto (Opcional)
                    </label>
                    <input 
                        type="text" 
                        className="form-control-custom"
                        placeholder="Ej: Depto 501"
                    />
                </div>

                <div className="col-12 col-md-6 mb-3">
                    <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                        Comuna
                    </label>
                    <input 
                        type="text" 
                        className="form-control-custom"
                        placeholder="Tu comuna"
                    />
                </div>

                <div className="col-12 col-md-6 mb-3">
                    <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                        Región
                    </label>
                    <input 
                        type="text" 
                        className="form-control-custom"
                        placeholder="Tu región"
                    />
                </div>
            </div>
        </div>
    );
}