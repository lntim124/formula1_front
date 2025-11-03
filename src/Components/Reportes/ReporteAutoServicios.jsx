import React, { useEffect, useState } from "react";
import "./Reportes.css";
import AutoReportService from "../../Service/AutoReportService";

export default function ReporteAutoServicios() {
  const [data, setData] = useState([]);

  useEffect(() => {
    AutoReportService.getServiciosAutos()
      .then((res) => setData(res.data || []))
      .catch(() => alert("Error al cargar el reporte de servicios"));
  }, []);

  return (
    <div className="report-container">
      <h2>Servicios Realizados a Autos</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Placa</th>
              <th>Técnico</th>
              <th>Servicio</th>
              <th>Hora Entrada</th>
              <th>Hora Salida</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                <td>{row.placa}</td>
                <td>{row.tecnico}</td>
                <td>{row.servicio}</td>
                <td>{row.horaEntrada}</td>
                <td>{row.horaSalida}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}