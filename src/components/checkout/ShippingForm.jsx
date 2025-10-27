/**
 * Formulario de envio (shipping)
 */

import { useState } from "react";

export default function ShippingForm() {
    const [values, setValues] = useState({
        nombre: "",
        telefono: "",
        direccion: "",
        depto: "",
        comuna: "",
        region: "",
    });

    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
        let msg = "";
        if (name === 'nombre' && !value.trim()) msg = 'El nombre es requerido';
        if (name === 'telefono' && !value.trim()) msg = 'El teléfono es requerido';
        if (name === 'direccion' && !value.trim()) msg = 'La dirección es requerida';
        if (name === 'comuna' && !value.trim()) msg = 'La comuna es requerida';
        if (name === 'region' && !value.trim()) msg = 'La región es requerida';
        setErrors((e) => ({ ...e, [name]: msg }));
        return msg === "";
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((v) => ({ ...v, [name]: value }));
    };

    const handleBlur = (e) => {
        validateField(e.target.name, e.target.value);
    };

    return (
        <div className="card-custom mb-4">
            <h3>Información de Envío</h3>

            <div className="row">
                <div className="col-12 col-md-6 mb-3">
                    <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                        Nombre Completo
                    </label>
                    <input
                        name="nombre"
                        value={values.nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        className="form-control-custom"
                        placeholder="Ingresa tu nombre completo"
                    />
                    {errors.nombre && (
                        <div style={{ color: '#a63a3a', fontSize: '0.85rem', marginTop: 6 }}>{errors.nombre}</div>
                    )}
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                        Teléfono
                    </label>
                    <input
                        name="telefono"
                        value={values.telefono}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="tel"
                        className="form-control-custom"
                        placeholder="Tu número de teléfono (+56)"
                    />
                    {errors.telefono && (
                        <div style={{ color: '#a63a3a', fontSize: '0.85rem', marginTop: 6 }}>{errors.telefono}</div>
                    )}
                </div>

                <div className="col-12 col-md-8 mb-3">
                    <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                        Dirección (Calle y Número)
                    </label>
                    <input
                        name="direccion"
                        value={values.direccion}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        className="form-control-custom"
                        placeholder="Ej: Soberania 1234"
                    />
                    {errors.direccion && (
                        <div style={{ color: '#a63a3a', fontSize: '0.85rem', marginTop: 6 }}>{errors.direccion}</div>
                    )}
                </div>

                <div className="col-12 col-md-4 mb-3">
                    <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                        Depto (Opcional)
                    </label>
                    <input
                        name="depto"
                        value={values.depto}
                        onChange={handleChange}
                        type="text"
                        className="form-control-custom"
                        placeholder="Ej: Depto 501"
                    />
                </div>

                <div className="col-12 col-md-6 mb-3">
                    <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                        Comuna
                    </label>
                    <input
                        name="comuna"
                        value={values.comuna}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        className="form-control-custom"
                        placeholder="Tu comuna"
                    />
                    {errors.comuna && (
                        <div style={{ color: '#a63a3a', fontSize: '0.85rem', marginTop: 6 }}>{errors.comuna}</div>
                    )}
                </div>

                <div className="col-12 col-md-6 mb-3">
                    <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                        Región
                    </label>
                    <input
                        name="region"
                        value={values.region}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        className="form-control-custom"
                        placeholder="Tu región"
                    />
                    {errors.region && (
                        <div style={{ color: '#a63a3a', fontSize: '0.85rem', marginTop: 6 }}>{errors.region}</div>
                    )}
                </div>
            </div>
        </div>
    );
}