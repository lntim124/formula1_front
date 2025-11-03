import { useEffect, useState } from "react";
import "./General1.css";
import CircuitoReportService from "../../Service/CircuitoReportService";

 function CircuitoResumen() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    CircuitoReportService.getResumen()
      .then((r) => setRows(r.data || []))
      .catch(() => alert("Error cargando resumen de carreras"));
  }, []);

  return (
    <div className="report-container">
      <h2>Resumen General de Carreras</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID Carrera</th>
              <th>Carrera</th>
              <th>Fecha</th>
              <th>Circuito</th>
              <th>Jefe Equipo</th>
              <th>Total Pilotos</th>
              <th>Piloto Ganador</th>
              <th>Total Penalizaciones</th>
              <th>Minutos Penalizados</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((x, i) => (
              <tr key={i}>
                <td>{x.idCarrera}</td>
                <td>{x.carrera}</td>
                <td>{x.fecha}</td>
                <td>{x.circuito}</td>
                <td>{x.jefeEquipo}</td>
                <td>{x.totalPilotos ?? x.total_pilotos}</td>
                <td>{x.pilotoGanador}</td>
                <td>{x.totalPenalizaciones ?? x.total_penalizaciones}</td>
                <td>{x.minutosPenalizados ?? x.minutos_penalizados}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default CircuitoResumen;