import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function UserDropdown({ user, logout, navigate }) {
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 992); // bootstrap lg breakpoint
        onResize();
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const displayName = user?.nombre || user?.name || user?.username || user?.email || "usuario";
    const label = `Hola, ${displayName}`;

    // Styles
    const liStyle = { position: isMobile ? 'static' : 'relative' };

    const buttonStyle = {
        background: "transparent",
        border: "none",
        cursor: "pointer",
        color: "var(--primary-color)",
        fontWeight: 500,
        padding: "8px 16px",
        borderRadius: "var(--border-radius-md)",
        width: isMobile ? '100%' : 'auto',
        textAlign: isMobile ? 'left' : 'inherit',
    };

    const dropdownStyle = {
        position: isMobile ? 'static' : 'absolute',
        right: isMobile ? 'auto' : 0,
        left: isMobile ? 0 : 'auto',
        top: isMobile ? 'auto' : "calc(100% + 6px)",
        background: "var(--background-color)",
        border: isMobile ? 'none' : "1px solid var(--accent-color)",
        boxShadow: isMobile ? 'none' : "var(--shadow-md)",
        borderRadius: isMobile ? 0 : 6,
        minWidth: isMobile ? '100%' : 160,
        zIndex: 1100,
        overflow: "hidden",
        marginTop: isMobile ? 6 : 0,
    };

    return (
        <li
            className="nav-item"
            style={liStyle}
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
                style={buttonStyle}
            >
                {label} <span style={{ marginLeft: 6 }}>▾</span>
            </button>

            {open && (
                <div style={dropdownStyle}>
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