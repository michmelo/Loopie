/**
 * Mensajes de error o éxito paara el usuario
 * @param {{ type: 'error' | 'success', message: string }} props
 */
export default function AuthMessage({ type, message }) {
    if (!message) return null;

    const isError = type === 'error';

    const style = isError 
        ? { 
            backgroundColor: "rgba(219, 106, 139, 0.1)", 
            color: "var(--primary-color)",
            border: "1px solid var(--pink-accent)"
        }
        : { 
            backgroundColor: "var(--light-color)",
            color: "var(--primary-color)",
            border: "1px solid var(--accent-color)"
        };

    return (
        <div 
            className="alert mt-3 text-center" 
            role="alert" 
            style={{ 
                ...style, 
                padding: "1rem", 
                borderRadius: "var(--border-radius-md)" 
            }}
        >
            {message}
        </div>
    );
}