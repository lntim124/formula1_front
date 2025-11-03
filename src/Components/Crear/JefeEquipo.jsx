import React, { useState } from "react";
import "./JefeEquipo.css";
import JefeEquipoService from "../../Service/JefeEquipoService";
import { useNavigate } from "react-router-dom";

const Equipo = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: "",
    fechaInicio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      id: Number(form.id),
      fechaInicio: form.fechaInicio,
    };

    JefeEquipoService.saveJefeEquipo(payload)
      .then((res) => {
        console.log("Jefe de Equipo creado:", res.data);
        alert("Jefe de equipo registrado ");
        navigate("/lista-jefeequipo"); // ajusta a tu ruta real
      })
      .catch((err) => {
        console.error(err);
        alert("No se pudo crear el jefe de equipo ");
      });
  };

  const handleBack = () => navigate("/lista-jefeequipo");

  return (
    <div className="form-container">
      <h2 className="text-center">Registrar Jefe de Equipo</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="id">ID (Empleado asociado)</label>
          <input
            id="id"
            name="id"
            type="number"
            value={form.id}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="fechaInicio">Fecha de Inicio</label>
          <input
            id="fechaInicio"
            name="fechaInicio"
            type="date"
            value={form.fechaInicio}
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

export default JefeEquipo;