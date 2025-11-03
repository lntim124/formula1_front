import React, { useEffect, useState } from "react";
import "./Listar.css";
import CircuitoService from "../../Service/CircuitoService";

export default function ListarCircuito() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    CircuitoService.getAllCircuito()
      .then(res => setRows(res.data || []))
      .catch(() => alert("Error cargando Circuitos"));
  }, []);

  return (
    <div className="list-container">
      <h2>Circuitos</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>N° Vueltas</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.idCircuito}>
                <td>{r.idCircuito}</td>
                <td>{r.nombre}</td>
                <td>{r.numVueltas ?? r.num_Vuelta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}