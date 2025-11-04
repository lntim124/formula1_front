import React, { useEffect, useState } from "react";
import "./Auto.css";
import AutoService from "../../Service/AutoService";

 function ListarAuto({ irACrear }) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    AutoService.getAllAuto()
      .then(res => setRows(res.data || []))
      .catch(() => alert("Error cargando Autos"));
  }, []);

  return (
    <div className="list-container">
      <div className="header-row">
      <h2>Autos</h2>
    <button type="button" onClick={irACrear} className="btn-crear">
        Crear Auto
        </button>
        </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Placa</th>
              <th>N° Chasis</th>
              <th>ID Motor</th>
              <th>Fecha Estreno</th>
              <th>ID Modelo</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={`${r.placa}-${i}`}>
                <td>{r.placa}</td>
                <td>{r.numeroChasis}</td>
                <td>{r.idMotor}</td>
                <td>{r.fechaEstreno}</td>
                <td>{r.idModelo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ListarAuto;
