/**
 * Formulario de inicio de sesión.
 * @param {{ id: string, password: string, setId: (v) => void, setPassword: (v) => void, handleLogin: (e) => void }} props
 */
export default function LoginForm({ id, password, setId, setPassword, handleLogin }) {
    return (
        <form onSubmit={handleLogin} className="d-flex flex-column gap-3 align-items-center">

            <input
                type="text"
                className="form-control-custom"
                placeholder="Usuario o correo"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
                style={{ width: "100%", maxWidth: "300px" }}
            />
            
            <input
                type="password"
                className="form-control-custom"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: "100%", maxWidth: "300px" }}
            />
            
            <button type="submit" className="btn-custom mt-3" style={{ width: "100%", maxWidth: "300px" }}>
                Ingresar
            </button>
        </form>
    );
}