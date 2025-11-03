import { useEffect, useState } from "react";
import "./Reportes.css";
import CircuitoReportService from "../../Service/CircuitoReportService";

export default function RendimientoCircuito() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    CircuitoReportService.getRendimiento()
      .then((r) => setRows(r.data || []))
      .catch(() => alert("Error cargando rendimiento por circuito"));
  }, []);

  return (
    <div className="report-container">
      <h2>Rendimiento Promedio por Circuito</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID Circuito</th>
              <th>Circuito</th>
              <th>Promedio Posición Pilotos</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((x, i) => (
              <tr key={i}>
                <td>{x.idCircuito}</td>
                <td>{x.circuito}</td>
                <td>{x.promedioPosicionPilotos ?? x.promedioPosicionPiloto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}