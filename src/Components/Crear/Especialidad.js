import React, { useState } from "react";
import "./Especialidad.css";
import EspecialidadService from "../../Service/EspecialidadService";
import { useNavigate } from "react-router-dom";

const Especialidad = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      nombre: form.nombre.trim(),
    };

    EspecialidadService.saveEspecialidad(payload)
      .then((res) => {
        console.log("Especialidad creada:", res.data);
        alert("Especialidad creada ");
        navigate("/lista-especialidad"); // ajusta a tu ruta real de listado
      })
      .catch((err) => {
        console.error(err);
        alert("No se pudo crear la especialidad ");
      });
  };

  const handleBack = () => navigate("/lista-especialidad");

  return (
    <div className="form-container">
      <h2 className="text-center">Crear Especialidad</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={form.nombre}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="button-container">
          <button type="submit" className="btn btn-primary">Guardar</button>
          <button type="button" className="btn btn-secondary" onClick={handleBack}>Regresar</button>
        </div>
      </form>
    </div>
  );
};

export default Especialidad;