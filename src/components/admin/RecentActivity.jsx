/**
 * Panel para ver la actividad reciente en el sistema.
 */

export default function RecentActivity() {
    const activities = [
        { title: "Nuevo pedido #1234", time: "Hace 5 minutos" },
        { title: "Usuario registrado", time: "Hace 15 minutos" },
        { title: "Producto actualizado", time: "Hace 1 hora" },
        { title: "Pedido completado #1233", time: "Hace 2 horas" }
    ];

    return (
        <div className="col-12 col-lg-6 mb-4">
            <div className="card-custom">
                <h3>Actividad Reciente</h3>
                
                <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                    {activities.map((activity, index) => (
                        <div 
                            key={index}
                            style={{
                                padding: "0.75rem",
                                borderBottom: "1px solid var(--accent-color)",
                                marginBottom: "0.5rem"
                            }}
                        >
                            <strong>{activity.title}</strong><br />
                            <small style={{ color: "var(--secondary-color)" }}>
                                {activity.time}
                            </small>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}