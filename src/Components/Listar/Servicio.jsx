import React, { useEffect, useState } from "react";
import ServicioService from "../../Service/ServicioService";
import "./Servicio.css";
import { useNavigate } from "react-router-dom";

const Servicio = () => {
  const [servicios, setServicios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    ServicioService.listar()
      .then((data) => setServicios(data))
      .catch((error) => console.error("Error al listar servicios:", error));
  }, []);

  return (
    <div className="listar-servicio-container">
      <h2>Lista de Servicios</h2>
      <button className="btn-nuevo" onClick={() => navigate("/crear-servicio")}>
        Nuevo Servicio
      </button>

      <table className="tabla-servicios">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {servicios.length > 0 ? (
            servicios.map((s) => (
              <tr key={s.idServicio}>
                <td>{s.idServicio}</td>
                <td>{s.descripcion}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No hay servicios registrados</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Servicio;
