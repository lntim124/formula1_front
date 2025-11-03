import React, { useState } from "react";
import PenalizacionService from "../service/PenalizacionService";
import "./CrearPenalizacion.css";
import { useNavigate } from "react-router-dom";

const CrearPenalizacion = () => {
  const [penalizacion, setPenalizacion] = useState({
    idPenalizacion: "",
    motivo: "",
    duracion: "",
    puntosRestados: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setPenalizacion({ ...penalizacion, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    PenalizacionService.crearPenalizacion(penalizacion)
      .then(() => {
        alert("Penalización creada correctamente");
        navigate("/listar-penalizacion");
      })
      .catch((error) => {
        console.error("Error al crear penalización:", error);
        alert("Error al crear penalización");
      });
  };

  const volver = () => navigate("/listar-penalizacion");

  return (
    <div className="crear-penalizacion-container">
      <h2>Crear Nueva Penalización</h2>
      <form className="form-crear-penalizacion" onSubmit={handleSubmit}>
        <label>ID:</label>
        <input
          type="number"
          name="idPenalizacion"
          value={penalizacion.idPenalizacion}
          onChange={handleChange}
          required
        />

        <label>Motivo:</label>
        <input
          type="text"
          name="motivo"
          value={penalizacion.motivo}
          onChange={handleChange}
          required
        />

        <label>Duración:</label>
        <input
          type="text"
          name="duracion"
          value={penalizacion.duracion}
          onChange={handleChange}
          required
        />

        <label>Puntos Restados:</label>
        <input
          type="number"
          name="puntosRestados"
          value={penalizacion.puntosRestados}
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

export default CrearPenalizacion;
