/**
 * Contenedor centralizado para formularios de autenticación (Login/Register).
 * @param {{ children: React.ReactNode }} props
 */
export default function AuthFormContainer({ children }) {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ flexGrow: 1 }}>
            <div className="card-custom" style={{ maxWidth: "500px", width: "100%" }}>
                {children}
            </div>
        </div>
    );
}