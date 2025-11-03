// src/components/CrearNacionalidad.js
import React, { useState } from "react";
import NacionalidadService from "../service/NacionalidadService";
import "./CrearNacionalidad.css";
import { useNavigate } from "react-router-dom";

const CrearNacionalidad = () => {
  const [nacionalidad, setNacionalidad] = useState({
    idNacionalidad: "",
    pais: "",
    continente: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNacionalidad({ ...nacionalidad, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    NacionalidadService.crearNacionalidad(nacionalidad)
      .then(() => {
        alert("✅ Nacionalidad creada correctamente");
        navigate("/listar-nacionalidad");
      })
      .catch((error) => {
        console.error("Error al crear nacionalidad:", error);
        alert(" Error al crear nacionalidad");
      });
  };

  const volver = () => navigate("/listar-nacionalidad");

  return (
    <div className="crear-nacionalidad-container">
      <h2>Crear Nueva Nacionalidad</h2>
      <form className="form-crear-nacionalidad" onSubmit={handleSubmit}>
        <label>ID:</label>
        <input
          type="number"
          name="idNacionalidad"
          value={nacionalidad.idNacionalidad}
          onChange={handleChange}
          required
        />

        <label>País:</label>
        <input
          type="text"
          name="pais"
          value={nacionalidad.pais}
          onChange={handleChange}
          required
        />

        <label>Continente:</label>
        <input
          type="text"
          name="continente"
          value={nacionalidad.continente}
          onChange={handleChange}
          required
        />

        <div className="button-container">
          <button type="submit">Guardar</button>
          <button type="button" onClick={volver}>
            Volver
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrearNacionalidad;
