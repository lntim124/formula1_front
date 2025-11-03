import { useEffect, useState } from "react";
import "./Reportes.css";
import PenalizacionReportService from "../../Service/PenalizacionReportService";

export default function PenalizacionPorCarrera() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    PenalizacionReportService.getPenalizacionPorCarrera()
      .then(r => setRows(r.data || []))
      .catch(() => alert("Error cargando penalizaciones por carrera"));
  }, []);

  return (
    <div className="report-container">
      <h2>Penalizaciones por Carrera</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID Carrera</th>
              <th>Carrera</th>
              <th>Fecha</th>
              <th>Total Penalizaciones</th>
              <th>Minutos Perdidos</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((x, i) => (
              <tr key={i}>
                <td>{x.idCarrera}</td>
                <td>{x.carrera}</td>
                <td>{x.fecha}</td>
                <td>{x.totalPenalizaciones ?? x.total_penalizaciones}</td>
                <td>{x.minutosPerdidos ?? x.minutos_penalizados}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}