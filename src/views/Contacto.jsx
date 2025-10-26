import { useState } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import AppFooter from "../components/Footer";
import AuthMessage from "../components/auth/AuthMessage";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const validateEmail = (v) => /\S+@\S+\.\S+/.test(v);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: "error", text: "Por favor completa los campos requeridos." });
      return;
    }

    if (!validateEmail(email)) {
      setStatus({ type: "error", text: "Por favor ingresa un correo electrónico válido." });
      return;
    }

    // SIMULADO
    setStatus({ type: "success", text: "Mensaje enviado. Gracias por contactarnos." });

    // LIMPIAR FORMULARIO
    setTimeout(() => {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 800);
  };

  return (
    <div>
      {status && <AuthMessage type={status.type} message={status.text} />}

      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <div className="form-group" style={{ marginBottom: ".75rem" }}>
          <label>Nombre</label>
          <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre" />
        </div>

        <div className="form-group" style={{ marginBottom: ".75rem" }}>
          <label>Correo</label>
          <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="correo@ejemplo.com" />
        </div>

        <div className="form-group" style={{ marginBottom: ".75rem" }}>
          <label>Asunto</label>
          <input className="form-control" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Asunto" />
        </div>

        <div className="form-group" style={{ marginBottom: ".75rem" }}>
          <label>Mensaje</label>
          <textarea className="form-control" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} placeholder="Escribe tu mensaje aquí" />
        </div>

        <div style={{ display: "flex", gap: ".5rem", marginTop: ".5rem" }}>
          <button type="submit" className="btn btn-primary">Enviar</button>
          <button type="button" className="btn btn-secondary" onClick={() => { setName(""); setEmail(""); setSubject(""); setMessage(""); setStatus(null); }}>Limpiar</button>
        </div>
      </form>
    </div>
  );
}

// RENDER
export default function Contacto() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--background-color)" }}>
      <Navbar />

      <main className="container-fluid" style={{ padding: "2rem", flexGrow: 1 }}>
        <div className="container">
          <PageHeader title="Contáctanos" description="¿Tienes dudas o quieres colaborar? Escríbenos y te responderemos pronto." />

          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <div className="card-custom">
                <h3>Escríbenos</h3>
                <p style={{ color: "var(--secondary-color)" }}>
                  Para consultas generales, colaboraciones o soporte, completa el formulario y te responderemos pronto.
                </p>

                {/* Mensajes de estado */}
                <ContactForm />

                <hr />

                <h4 style={{ marginTop: "1rem" }}>Oficinas</h4>
                <p style={{ color: "var(--secondary-color)" }}>Libertad 736, Viña del Mar, Chile</p>
                <p style={{ color: "var(--secondary-color)" }}>Av. Providencia 432, Santiago, Chile</p>

              </div>
            </div>
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
