/**
 * Perfil de usuario (info básica)
 * @param {{ user: { id?: string, nombre?: string, apellido?: string, user?: string, email?: string, password?: string, rol?: string, direccion?: string } }} props
 */
export default function ProfileInfoCard({ user }) {
      return (
        <div className="card-custom mb-4" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h3 style={{ borderBottom: "1px solid var(--accent-color)", paddingBottom: "10px" }}>
                Datos Personales
            </h3>

            <div className="row g-3">
                <div className="col12 col-md-6">
                    <strong>Username:</strong>
                    <p style={{ color: "var(--secondary-color)" }}>{user.user}</p>
                </div>
                <div className="col-12 col-md-6">
                    <strong>Nombre:</strong>
                    <p style={{ color: "var(--secondary-color)" }}>{user.nombre}</p>
                </div>
                <div className="col-12 col-md-6">
                    <strong>Apellido:</strong>
                    <p style={{ color: "var(--secondary-color)" }}>{user.apellido}</p>
                </div>
                <div className="col-12 col-md-6">
                    <strong>Correo Electrónico:</strong>
                    <p style={{ color: "var(--secondary-color)" }}>{user.email}</p>
                </div>
                <div className="col-12 col-md-6">
                    <strong>Rol:</strong>
                    <p style={{ color: "var(--secondary-color)", textTransform: "capitalize" }}>
                        {user.rol}
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <strong>Dirección:</strong>
                    <p style={{ color: "var(--secondary-color)" }}>{user.direccion}</p>
                </div>
            </div>
        </div>
    );
}