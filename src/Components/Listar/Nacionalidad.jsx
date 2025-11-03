
import React, { useEffect, useState } from "react";
import NacionalidadService from "../../Service/NacionalidadService";
import "./Nacionalidad.css";
import { useNavigate } from "react-router-dom";

const Nacionalidad = () => {
  const [nacionalidades, setNacionalidades] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    cargarNacionalidades();
  }, []);

  const cargarNacionalidades = () => {
    NacionalidadService.listarNacionalidades()
      .then((response) => setNacionalidades(response.data))
      .catch((error) =>
        console.error("Error al obtener las nacionalidades:", error)
      );
  };

  const irACrear = () => navigate("/crear-nacionalidad");
  const irABuscar = () => navigate("/buscar-nacionalidad");

  return (
    <div className="listar-nacionalidad-container">
      <h2>Lista de Nacionalidades</h2>

      <div className="button-container">
        <button onClick={irACrear}>Agregar Nuevo</button>
        <button onClick={irABuscar}>Buscar Nacionalidad</button>
      </div>

      <table className="tabla-nacionalidades">
        <thead>
          <tr>
            <th>ID</th>
            <th>País</th>
            <th>Continente</th>
          </tr>
        </thead>
        <tbody>
          {nacionalidades.length > 0 ? (
            nacionalidades.map((n) => (
              <tr key={n.idNacionalidad}>
                <td>{n.idNacionalidad}</td>
                <td>{n.pais}</td>
                <td>{n.continente}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No hay nacionalidades registradas
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Nacionalidad;
