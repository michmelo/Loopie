/**
 * Navegación: Login -> Register.
 * @param {{ quest: string, linkText: string, to: string }} props
 */

import { useNavigate } from "react-router-dom";

export default function AuthLink({ quest, linkText, to }) {
    const navigate = useNavigate();

    return (
        <div className="text-center mt-4">
            <p style={{ color: "var(--secondary-color)", marginBottom: "0.5rem" }}>
                {quest}
            </p>
            <button 
                onClick={() => navigate(to)}
                style={{
                    background: "none",
                    border: "none",
                    color: "var(--accent-color)",
                    textDecoration: "underline",
                    cursor: "pointer",
                    fontSize: "1rem",
                    fontWeight: "500"
                }}
            >
                {linkText}
            </button>
        </div>
    );
}