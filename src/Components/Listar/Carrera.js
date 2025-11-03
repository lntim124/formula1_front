import React, { useEffect, useState } from "react";
import "./Listar.css";
import CarreraService from "../../Service/CarreraService";

export default function ListarCarrera() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    CarreraService.getAllCarrera()
      .then(res => setRows(res.data || []))
      .catch(() => alert("Error cargando Carreras"));
  }, []);

  return (
    <div className="list-container">
      <h2>Carreras</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Hora Inicio</th>
              <th>Hora Fin</th>
              <th>ID Jefe Equipo</th>
              <th>ID Circuito</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.idCarrera}>
                <td>{r.idCarrera}</td>
                <td>{r.nombre}</td>
                <td>{r.fecha}</td>
                <td>{r.horaInicio}</td>
                <td>{r.horaFin}</td>
                <td>{r.idJefeEquipo}</td>
                <td>{r.idCircuito}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}