import { useEffect, useState } from "react";
import "./Reportes.css";
import TecnicoReportService from "../../Service/TecnicoReportService";

export default function TecnicoRendimiento() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    TecnicoReportService.getRendimientoTecnico()
      .then((r) => setRows(r.data || []))
      .catch(() => alert("Error cargando rendimiento de técnicos"));
  }, []);

  return (
    <div className="report-container">
      <h2>Rendimiento de Técnicos por Servicios Realizados</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID Técnico</th>
              <th>Técnico</th>
              <th>Total Servicios Realizados</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((x, i) => (
              <tr key={i}>
                <td>{x.idTecnico ?? x.id_tecnico}</td>
                <td>{x.tecnico}</td>
                <td>{x.totalServiciosRealizados ?? x.total_servicios_realizados}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}