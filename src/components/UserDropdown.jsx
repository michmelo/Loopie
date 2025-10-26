import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function UserDropdown({ user, logout, navigate }) {
    const [open, setOpen] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const label = `Hola, ${user.name}`;

    return (
        <li
            className="nav-item"
            style={{ position: "relative" }}
            onMouseEnter={() => {
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                    timeoutRef.current = null;
                }
                setOpen(true);
            }}
            onMouseLeave={() => {
                // dejar un pequeño margen para que el usuario llegue al dropdown
                timeoutRef.current = setTimeout(() => setOpen(false), 220);
            }}
        >
            <button
                className="nav-link"
                onClick={() => {
                    if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                        timeoutRef.current = null;
                    }
                    setOpen((s) => !s);
                }}
                style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--primary-color)",
                    fontWeight: 500,
                    padding: "8px 16px",
                    borderRadius: "var(--border-radius-md)"
                }}
            >
                {label} <span style={{ marginLeft: 6 }}>▾</span>
            </button>

            {open && (
                <div
                    style={{
                        position: "absolute",
                        right: 0,
                        top: "calc(100% + 6px)",
                        background: "var(--background-color)",
                        border: "1px solid var(--accent-color)",
                        boxShadow: "var(--shadow-md)",
                        borderRadius: 6,
                        minWidth: 160,
                        zIndex: 1100,
                        overflow: "hidden"
                    }}
                >
                    <Link
                        to="/perfil"
                        className="nav-link"
                        style={{ display: "block", padding: "8px 12px", color: "var(--primary-color)" }}
                        onClick={() => setOpen(false)}
                    >
                        Ver mi perfil
                    </Link>

                    <button
                        className="nav-link"
                        onClick={() => { logout(); navigate('/'); setOpen(false); }}
                        style={{ display: "block", padding: "8px 12px", width: "100%", textAlign: "left", background: "transparent", border: "none", color: "var(--primary-color)" }}
                    >
                        Cerrar sesión
                    </button>
                </div>
            )}
        </li>
    );
}

export default UserDropdown;