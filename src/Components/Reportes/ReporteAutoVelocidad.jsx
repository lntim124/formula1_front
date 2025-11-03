import React, { useEffect, useState } from "react";
import "./Reportes.css";
import AutoReportService from "../../Service/AutoReportService";

export default function ReporteAutoVelocidad() {
  const [data, setData] = useState([]);

  useEffect(() => {
    AutoReportService.getVelocidadAutos()
      .then((res) => setData(res.data || []))
      .catch(() => alert("Error al cargar el reporte de velocidad"));
  }, []);

  return (
    <div className="report-container">
      <h2>Velocidad Promedio de Autos por Circuito</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Placa</th>
              <th>Modelo</th>
              <th>Circuito</th>
              <th>Velocidad (km/h)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                <td>{row.placa}</td>
                <td>{row.modelo}</td>
                <td>{row.circuito}</td>
                <td>{row.velocidad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}