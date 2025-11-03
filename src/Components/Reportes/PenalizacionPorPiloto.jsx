import { useEffect, useState } from "react";
import "./General1.css";
import PenalizacionReportService from "../../Service/PenalizacionReportService";

 function PenalizacionPorPiloto() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    PenalizacionReportService.getPenalizacionPorPiloto()
      .then(r => setRows(r.data || []))
      .catch(() => alert("Error cargando penalizaciones por piloto"));
  }, []);

  return (
    <div className="report-container">
      <h2>Penalizaciones por Piloto</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID Piloto</th>
              <th>Piloto</th>
              <th>ID Penalización</th>
              <th>Momento</th>
              <th>Minutos Penalizados</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((x, i) => (
              <tr key={i}>
                <td>{x.idPiloto}</td>
                <td>{x.piloto}</td>
                <td>{x.idPenalizacion ?? x.id_penalizacion}</td>
                <td>{x.momento}</td>
                <td>{x.minutosPenalizados ?? x.tiempo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default PenalizacionPorPiloto;