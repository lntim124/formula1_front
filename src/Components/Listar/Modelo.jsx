import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ListarModelo.css";
import { useNavigate } from "react-router-dom";

const ListarModelo = () => {
  const [modelos, setModelos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    cargarModelos();
  }, []);

  const cargarModelos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/modelo/listar");
      setModelos(response.data);
    } catch (error) {
      console.error("Error al obtener los modelos:", error);
    }
  };

  const irACrear = () => {
    navigate("/crear-modelo");
  };

  const irABuscar = () => {
    navigate("/buscar-modelo");
  };

  return (
    <div className="listar-modelo-container">
      <h2>Lista de Modelos</h2>

      <div className="button-container">
        <button onClick={irACrear}>Agregar Nuevo</button>
        <button onClick={irABuscar}>Buscar Modelo</button>
      </div>

      <table className="tabla-modelos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Año</th>
          </tr>
        </thead>
        <tbody>
          {modelos.length > 0 ? (
            modelos.map((modelo) => (
              <tr key={modelo.idModelo}>
                <td>{modelo.idModelo}</td>
                <td>{modelo.nombre}</td>
                <td>{modelo.marca}</td>
                <td>{modelo.anio}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No hay modelos registrados
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListarModelo;
