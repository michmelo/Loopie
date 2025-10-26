import { useState } from "react";
import Navbar from "../components/Navbar";
import AppFooter from "../components/Footer";
import PageHeader from "../components/PageHeader";

// FORMULARIO EDITAR DIRECCIÓN - DEMO

export default function Direccion() {

    // Definición de estados a utilizar
    const [form, setForm] = useState({ label: "Casa", calle: "", ciudad: "", codPostal: "", fono: "" });
    const [saved, setSaved] = useState(false);

    // Manejo de los cambios en los inputs
    const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    const handleSubmit = (e) => {
        e.preventDefault();
        setSaved(true);
    };

    const handleEdit = () => setSaved(false);
    const handleClear = () => setForm({ label: "Casa", calle: "", ciudad: "", codPostal: "", fono: "" });

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />

            <main className="container-fluid" style={{ padding: "2rem", flexGrow: 1 }}>
                <div className="container">
                    <PageHeader title="Dirección de Envío" description="Actualiza tu dirección de envío." />

                    <div className="card-custom" style={{ padding: '1rem', maxWidth: 640 }}>
                        {!saved ? (
                            <form onSubmit={handleSubmit}>
                                <div style={{ display: 'grid', gap: '0.5rem' }}>
                                    <input name="label" placeholder="Etiqueta" value={form.label} onChange={handleChange} />
                                    <input name="calle" placeholder="Calle (número)" value={form.calle} onChange={handleChange} />
                                    <input name="ciudad" placeholder="Ciudad" value={form.ciudad} onChange={handleChange} />
                                    <input name="codPostal" placeholder="Código postal" value={form.codPostal} onChange={handleChange} />
                                    <input name="fono" placeholder="Teléfono" value={form.fono} onChange={handleChange} />
                                </div>

                                <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                    <button className="btn-custom" type="submit">Guardar</button>
                                    <button type="button" className="btn-custom" style={{ backgroundColor: 'var(--secondary-color)' }} onClick={handleClear}>Limpiar</button>
                                </div>
                            </form>
                        ) : (
                            <div>
                                <h4 style={{ marginTop: 0 }}>Se ha guardado la nueva dirección.</h4>
                                <div style={{ color: 'var(--muted-color)', marginBottom: '0.75rem' }}>
                                    <div><strong>{form.label}</strong></div>
                                    <div>{form.calle}</div>
                                    <div>{form.ciudad} · {form.codPostal}</div>
                                    <div>{form.fono}</div>
                                </div>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <button className="btn-custom" onClick={handleEdit}>Editar</button>
                                    <button className="btn-custom" style={{ backgroundColor: 'var(--danger-color)' }} onClick={() => { handleClear(); setSaved(false); }}>Eliminar</button>
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
