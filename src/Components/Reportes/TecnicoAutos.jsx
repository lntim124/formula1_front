import { useEffect, useState } from "react";
import "./General1.css";
import TecnicoReportService from "../../Service/TecnicoReportService";

 function TecnicoAutos() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    TecnicoReportService.getAutosPorTecnico()
      .then((r) => setRows(r.data || []))
      .catch(() => alert("Error cargando autos por técnico"));
  }, []);

  return (
    <div className="report-container">
      <h2>Autos Atendidos por Técnico</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID Técnico</th>
              <th>Técnico</th>
              <th>Auto (Placa)</th>
              <th>Servicio</th>
              <th>Hora Entrada</th>
              <th>Hora Salida</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((x, i) => (
              <tr key={i}>
                <td>{x.idTecnico ?? x.id_tecnico}</td>
                <td>{x.tecnico}</td>
                <td>{x.auto}</td>
                <td>{x.servicio}</td>
                <td>{x.horaEntrada}</td>
                <td>{x.horaSalida}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default TecnicoAutos;