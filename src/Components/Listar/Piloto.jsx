import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ListarPiloto.css";
import { useNavigate } from "react-router-dom";

const ListarPiloto = () => {
  const [pilotos, setPilotos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    cargarPilotos();
  }, []);

  const cargarPilotos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/piloto/listar");
      setPilotos(response.data);
    } catch (error) {
      console.error("Error al obtener los pilotos:", error);
    }
  };

  const irACrear = () => navigate("/crear-piloto");
  const irABuscar = () => navigate("/buscar-piloto");

  return (
    <div className="listar-piloto-container">
      <h2>Lista de Pilotos</h2>

      <div className="button-container">
        <button onClick={irACrear}>Agregar Piloto</button>
        <button onClick={irABuscar}>Buscar Piloto</button>
      </div>

      <table className="tabla-pilotos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Nacionalidad</th>
          </tr>
        </thead>
        <tbody>
          {pilotos.length > 0 ? (
            pilotos.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.nombre}</td>
                <td>{p.edad}</td>
                <td>{p.nacionalidad}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No hay pilotos registrados
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListarPiloto;
