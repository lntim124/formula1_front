import React, { useEffect, useState } from "react";
import "./AutTec.css";
import AutTecService from "../../Service/AutTecService";

export default function ListarAutTec() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    AutTecService.getAllAutTec()
      .then(res => setRows(res.data || []))
      .catch(() => alert("Error cargando Aut_Tec"));
  }, []);

  return (
    <div className="list-container">
      <h2>Aut_Tec</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Placa</th>
              <th>ID Técnico</th>
              <th>ID Servicio</th>
              <th>Hora Entrada</th>
              <th>Hora Salida</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={`${r.placa}-${r.idTecnico}-${i}`}>
                <td>{r.placa}</td>
                <td>{r.idTecnico}</td>
                <td>{r.idServicio}</td>
                <td>{r.horaEntrada}</td>
                <td>{r.horaSalida}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}