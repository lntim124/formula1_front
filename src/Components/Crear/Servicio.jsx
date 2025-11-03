import React, { useState } from "react";
import ServicioService from "../../Service/ServicioService";
import "./Servicio.css";
import { useNavigate } from "react-router-dom";

const Servicio = () => {
  const [servicio, setServicio] = useState({
    idServicio: "",
    descripcion: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setServicio({ ...servicio, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ServicioService.crear(servicio)
      .then(() => {
        alert("Servicio creado correctamente");
        navigate("/listar-servicio");
      })
      .catch((error) => {
        console.error("Error al crear servicio:", error);
        alert("Error al crear servicio");
      });
  };

  return (
    <div className="crear-servicio-container">
      <h2>Crear Nuevo Servicio</h2>
      <form className="form-crear-servicio" onSubmit={handleSubmit}>
        <label>ID:</label>
        <input
          type="number"
          name="idServicio"
          value={servicio.idServicio}
          onChange={handleChange}
          required
        />

        <label>Descripción:</label>
        <input
          type="text"
          name="descripcion"
          value={servicio.descripcion}
          onChange={handleChange}
          required
        />

        <div className="button-container">
          <button type="submit">Guardar</button>
          <button type="button" onClick={() => navigate("/listar-servicio")}>
            Volver
          </button>
        </div>
      </form>
    </div>
  );
};

export default Servicio;
