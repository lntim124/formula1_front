import React, { useEffect, useState } from "react";
import "./Listar.css";
import EstadoService from "../../Service/EstadoService";

export default function ListarEstado() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    EstadoService.getAllEstado()
      .then(res => setRows(res.data || []))
      .catch(() => alert("Error cargando Estados"));
  }, []);

  return (
    <div className="list-container">
      <h2>Estados</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.idEstado}>
                <td>{r.idEstado}</td>
                <td>{r.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}