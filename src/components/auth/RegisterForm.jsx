import { useState } from "react";
import { validateField } from "../../utils/validation";

/**
 * Formulario de registro de usuario
 * @param {{ formData: object, handleInputChange: (e) => void, handleRegister: (e) => void }} props
 */
export default function RegisterForm({ formData, handleInputChange, handleRegister }) {
    const [errors, setErrors] = useState({});

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const error = validateField(name, value, formData);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    // CAMPOS FORM
    const formFields = [
        { name: "username", type: "text", placeholder: "Nombre de usuario" },
        { name: "email", type: "email", placeholder: "Correo electrónico" },
        { name: "firstName", type: "text", placeholder: "Nombre" },
        { name: "lastName", type: "text", placeholder: "Apellido" },
        { name: "password", type: "password", placeholder: "Contraseña (mínimo 3 caracteres)" },
        { name: "confirmPassword", type: "password", placeholder: "Confirmar contraseña" }
    ];

    return (
        <form onSubmit={handleRegister} className="d-flex flex-column gap-3 align-items-center">
            {formFields.map(field => (
                <div key={field.name} style={{ width: "100%", maxWidth: "400px" }}>
                    <input
                        id={field.name}
                        type={field.type}
                        name={field.name}
                        className={`form-control-custom ${errors[field.name] ? "is-invalid" : ""}`}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required
                        style={{ width: "100%" }}
                    />
                    {errors[field.name] && (
                        <div className="text-danger small mt-1" style={{ fontSize: "0.85rem" }}>
                            {errors[field.name]}
                        </div>
                    )}
                </div>
            ))}

            {/* Botón de envío */}
            <button type="submit" className="btn-custom mt-3" style={{ width: "100%", maxWidth: "400px" }}>
                Registrarse
            </button>
        </form>
    );
}