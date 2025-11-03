import { useEffect, useState } from "react";
import "./Reportes.css";
import CircuitoReportService from "../../Service/CircuitoReportService";

export default function CircuitoGanador() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    CircuitoReportService.getGanador()
      .then((r) => setRows(r.data || []))
      .catch(() => alert("Error cargando ganadores por circuito"));
  }, []);

  return (
    <div className="report-container">
      <h2>Ganadores por Circuito</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID Circuito</th>
              <th>Circuito</th>
              <th>Carrera</th>
              <th>Piloto Ganador</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((x, i) => (
              <tr key={i}>
                <td>{x.idCircuito}</td>
                <td>{x.circuito}</td>
                <td>{x.carrera}</td>
                <td>{x.pilotoGanador}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}