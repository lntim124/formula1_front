import React, { useEffect, useState } from "react";
import PenalizacionService from "../service/PenalizacionService";
import "./ListarPenalizacion.css";
import { useNavigate } from "react-router-dom";

const Penalizacion = () => {
  const [penalizaciones, setPenalizaciones] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    cargarPenalizaciones();
  }, []);

  const cargarPenalizaciones = () => {
    PenalizacionService.listarPenalizaciones()
      .then((response) => setPenalizaciones(response.data))
      .catch((error) =>
        console.error("Error al obtener las penalizaciones:", error)
      );
  };

  const irACrear = () => navigate("/crear-penalizacion");
  const irABuscar = () => navigate("/buscar-penalizacion");

  return (
    <div className="listar-penalizacion-container">
      <h2>Lista de Penalizaciones</h2>

      <div className="button-container">
        <button onClick={irACrear}>Agregar Nueva</button>
        <button onClick={irABuscar}>Buscar Penalización</button>
      </div>

      <table className="tabla-penalizaciones">
        <thead>
          <tr>
            <th>ID</th>
            <th>Motivo</th>
            <th>Duración</th>
            <th>Puntos Restados</th>
          </tr>
        </thead>
        <tbody>
          {penalizaciones.length > 0 ? (
            penalizaciones.map((p) => (
              <tr key={p.idPenalizacion}>
                <td>{p.idPenalizacion}</td>
                <td>{p.motivo}</td>
                <td>{p.duracion}</td>
                <td>{p.puntosRestados}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No hay penalizaciones registradas
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Penalizacion;
