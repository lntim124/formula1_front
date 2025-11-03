import React, { useState } from "react";
import "./Estado.css";
import EstadoService from "../../Service/EstadoService";
import { useNavigate } from "react-router-dom";

const Estado = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ nombre: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    EstadoService.saveEstado({ nombre: form.nombre.trim() })
      .then((res) => {
        console.log("Estado creado:", res.data);
        alert("Estado creado ");
        navigate("/lista-estado"); // ajusta a tu ruta real del listado
      })
      .catch((err) => {
        console.error(err);
        alert("No se pudo crear el estado ");
      });
  };

  const handleBack = () => navigate("/lista-estado");

  return (
    <div className="form-container">
      <h2 className="text-center">Crear Estado</h2>
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

export default Estado;