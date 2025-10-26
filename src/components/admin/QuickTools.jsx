/**
 * Panel con herramientas, botones, acceso rápido.
 */

export default function QuickTools() {
    const tools = [
        "Agregar Producto",
        "Ver Estadísticas",
        "Enviar Notificaciones",
        "Actualizar Inventario"
    ];

    return (
        <div className="col-12 col-lg-6 mb-4">
            <div className="card-custom">
                <h3>Herramientas</h3>
                
                <div className="d-grid gap-2">
                    {tools.map((tool, index) => (
                        <button key={index} className="btn-custom">
                            {tool}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}