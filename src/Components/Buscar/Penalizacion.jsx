
import React, { useState } from "react";
import PenalizacionService from "../service/PenalizacionService";
import "./Penalizacion.css";
import { useNavigate } from "react-router-dom";

const Penalizacion = () => {
  const [idPenalizacion, setIdPenalizacion] = useState("");
  const [penalizacion, setPenalizacion] = useState(null);
  const navigate = useNavigate();

  const buscarPenalizacion = () => {
    if (!idPenalizacion) {
      alert("Por favor ingrese un ID para buscar");
      return;
    }

    PenalizacionService.buscarPorId(idPenalizacion)
      .then((response) => {
        setPenalizacion(response.data);
      })
      .catch(() => {
        alert(" Penalización no encontrada");
        setPenalizacion(null);
      });
  };

  const volver = () => navigate("/listar-penalizacion");

  return (
    <div className="buscar-penalizacion-container">
      <h2>Buscar Penalización</h2>

      <div className="buscar-input">
        <input
          type="number"
          placeholder="Ingrese ID de la penalización"
          value={idPenalizacion}
          onChange={(e) => setIdPenalizacion(e.target.value)}
        />
        <button onClick={buscarPenalizacion}>Buscar</button>
      </div>

      {penalizacion && (
        <div className="penalizacion-detalle">
          <h3>Detalles</h3>
          <p><strong>ID:</strong> {penalizacion.idPenalizacion}</p>
          <p><strong>Motivo:</strong> {penalizacion.motivo}</p>
          <p><strong>Duración:</strong> {penalizacion.duracion}</p>
          <p><strong>Puntos Restados:</strong> {penalizacion.puntosRestados}</p>
        </div>
      )}

      <div className="button-container">
        <button onClick={volver}>Volver</button>
      </div>
    </div>
  );
};

export default BuscarPenalizacion;
