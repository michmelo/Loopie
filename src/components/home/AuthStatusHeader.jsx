/**
 * Muestra el estado de autenticación del usuario (saludo y botón de logout).
 * @param {{ user: object, isAuthenticated: boolean, logout: () => void }} props
 */
export default function AuthStatusHeader({ user, isAuthenticated, logout }) {
    if (!isAuthenticated) {
        return null;
    }

    const userName = user?.name ?? user?.email ?? "usuario";

    return (
        <div style={{ padding: "0.75rem 1rem", textAlign: "right" }}>
            <span style={{ marginRight: "1rem", color: "var(--secondary-color)" }}>
                Hola, {userName}
            </span>
            <button
                className="btn-custom"
                onClick={() => { logout(); }}
                style={{ padding: "6px 12px", fontSize: "0.9rem" }}
            >
                Cerrar sesión
            </button>
        </div>
    );
}