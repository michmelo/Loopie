/**
 * Formulario de registro de usuario
 * @param {{ formData: object, handleInputChange: (e) => void, handleRegister: (e) => void }} props
 */
export default function RegisterForm({ formData, handleInputChange, handleRegister }) {
    
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
                <input
                    id={field.name}
                    type={field.type}
                    name={field.name}
                    className="form-control-custom"
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    required
                    style={{ width: "100%", maxWidth: "400px" }}
                />
            ))}

            {/* Botón de envío */}
            <button type="submit" className="btn-custom mt-3" style={{ width: "100%", maxWidth: "400px" }}>
                Registrarse
            </button>
        </form>
    );
}