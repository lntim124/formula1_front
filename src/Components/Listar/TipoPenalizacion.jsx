import React, { useEffect, useState } from "react";
import {
  listarTipoPenalizaciones,
  eliminarTipoPenalizacion,
} from "../service/tipoPenalizacionService";
import "./TipoPenalizacion.css";
import { useNavigate } from "react-router-dom";

const ListarTipoPenalizacion = () => {
  const [tipos, setTipos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    cargarTipos();
  }, []);

  const cargarTipos = async () => {
    const data = await listarTipoPenalizaciones();
    setTipos(data);
  };

  const irACrear = () => navigate("/crear-tipo-penalizacion");

  return (
    <div className="listar-tipo-container">
      <h2>Listado de Tipos de Penalización</h2>
      <button className="btn-crear" onClick={irACrear}>
        Crear Nuevo
      </button>

      <table className="tabla-tipo-penalizacion">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {tipos.length > 0 ? (
            tipos.map((tipo) => (
              <tr key={tipo.idTipoPenalizacion}>
                <td>{tipo.idTipoPenalizacion}</td>
                <td>{tipo.nombre}</td>
                <td>{tipo.descripcion}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No hay tipos de penalización registrados.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListarTipoPenalizacion;
