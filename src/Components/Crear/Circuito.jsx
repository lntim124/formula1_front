import React, { useState } from "react";
import "./Circuito.css";
import CircuitoService from "../../Service/CircuitoService";
import { useNavigate } from "react-router-dom";

const Circuito = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    numVueltas: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      nombre: form.nombre.trim(),
      numVueltas: Number(form.numVueltas),
    };

    CircuitoService.saveCircuito(payload)
      .then((res) => {
        console.log("Circuito creado:", res.data);
        alert("Circuito creado ");
        navigate("/lista-circuito"); // ajusta a tu ruta real de listado
      })
      .catch((err) => {
        console.error(err);
        alert("No se pudo crear el circuito ");
      });
  };

  const handleBack = () => navigate("/lista-circuito");

  return (
    <div className="form-container">
      <h2 className="text-center">Crear Circuito</h2>
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

        <div className="form-group">
          <label htmlFor="numVueltas">Número de Vueltas</label>
          <input
            id="numVueltas"
            name="numVueltas"
            type="number"
            value={form.numVueltas}
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

export default Circuito;