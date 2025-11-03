import React, { useEffect, useState } from "react";
import "./AutCir.css";
import AutCirService from "../../Service/AutCirService";

export default function ListarAutCir() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    AutCirService.getAllAutCir()
      .then(res => setRows(res.data || []))
      .catch(() => alert("Error cargando Aut_Cir"));
  }, []);

  return (
    <div className="list-container">
      <h2>Aut_Cir</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID Circuito</th>
              <th>Placa</th>
              <th>Velocidad</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={`${r.idCircuito}-${r.placa}-${i}`}>
                <td>{r.idCircuito}</td>
                <td>{r.placa}</td>
                <td>{r.velocidad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}