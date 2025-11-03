import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PilCarr.css";
import { useNavigate } from "react-router-dom";

const PilCarr = () => {
  const [pilCarrList, setPilCarrList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    cargarPilCarr();
  }, []);

  const cargarPilCarr = async () => {
    try {
      const response = await axios.get("http://localhost:8080/pilCarr/listar");
      setPilCarrList(response.data);
    } catch (error) {
      console.error("Error al obtener las relaciones Piloto-Carrera:", error);
    }
  };

  const irACrear = () => {
    navigate("/crear-pilcarr");
  };

  const irABuscar = () => {
    navigate("/buscar-pilcarr");
  };

  return (
    <div className="listar-pilcarr-container">
      <h2>Lista de Relaciones Piloto-Carrera</h2>

      <div className="button-container">
        <button onClick={irACrear}>Agregar Nueva</button>
        <button onClick={irABuscar}>Buscar Relación</button>
      </div>

      <table className="tabla-pilcarr">
        <thead>
          <tr>
            <th>ID Piloto</th>
            <th>ID Carrera</th>
            <th>Ranking Final</th>
          </tr>
        </thead>
        <tbody>
          {pilCarrList.length > 0 ? (
            pilCarrList.map((item, index) => (
              <tr key={index}>
                <td>{item.idPiloto}</td>
                <td>{item.idCarrera}</td>
                <td>{item.rankingFinal}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No hay relaciones registradas
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PilCarr;
