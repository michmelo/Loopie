import { useState } from "react";
import Navbar from "../components/Navbar";
import AppFooter from "../components/Footer";
import PageHeader from "../components/PageHeader";

// FORMULARIO CAMBIAR CONTRASEÑA - DEMO
export default function CambiarContrasena() {

    // Definición de estados a utilizar
    const [form, setForm] = useState({ current: "", nuevo: "", confirm: "" });
    const [saved, setSaved] = useState(false);
    const [error, setError] = useState("");

    // Manejo de los cambios en los inputs
    const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        // Validación mínima
        if (form.nuevo === "" || form.confirm === "") {
            setError("Completa los campos de nueva contraseña.");
            return;
        }
        if (form.nuevo !== form.confirm) {
            setError("La contraseña nueva y la confirmación no coinciden.");
            return;
        }
        // Fake "saved"
        setSaved(true);
    };

    const handleEdit = () => {
        setSaved(false);
        setError("");
    };

    const handleClear = () => setForm({ current: "", nuevo: "", confirm: "" });

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />

            <main className="container-fluid" style={{ padding: "2rem", flexGrow: 1 }}>
                <div className="container">
                    <PageHeader title="Cambiar Contraseña" description="Formulario sencillo para maquetar el cambio de contraseña." />

                    <div className="card-custom" style={{ padding: '1rem', maxWidth: 600 }}>
                        {!saved ? (
                            <form onSubmit={handleSubmit}>
                                <div style={{ display: 'grid', gap: '0.5rem' }}>
                                    <input name="current" type="password" placeholder="Contraseña actual" value={form.current} onChange={handleChange} />
                                    <input name="nuevo" type="password" placeholder="Nueva contraseña" value={form.nuevo} onChange={handleChange} />
                                    <input name="confirm" type="password" placeholder="Confirmar nueva contraseña" value={form.confirm} onChange={handleChange} />
                                </div>

                                {error && <div style={{ color: 'var(--danger-color)', marginTop: '0.5rem' }}>{error}</div>}

                                <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                    <button className="btn-custom" type="submit">Guardar</button>
                                    <button type="button" className="btn-custom" style={{ backgroundColor: 'var(--secondary-color)' }} onClick={handleClear}>Limpiar</button>
                                </div>
                            </form>
                        ) : (
                            <div>
                                <h4 style={{ marginTop: 0 }}>Contraseña actualizada</h4>
                                <p style={{ color: 'var(--muted-color)' }}>Se ha generado el cambio de contraseña.</p>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <button className="btn-custom" onClick={handleEdit}>Editar</button>
                                    <button className="btn-custom" style={{ backgroundColor: 'var(--danger-color)' }} onClick={() => { handleClear(); setSaved(false); }}>Revertir</button>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </main>
            <AppFooter />
        </div>
    );
}
