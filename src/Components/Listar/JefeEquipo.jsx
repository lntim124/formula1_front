import React, { useEffect, useState } from "react";
import "./JefeEquipo.css";
import JefeEquipoService from "../../Service/JefeEquipoService";

function JefeEquipo() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    JefeEquipoService.getAllJefeEquipo()
      .then((res) => setRows(res.data || []))
      .catch(() => alert("Error cargando jefes de equipo"));
  }, []);

  return (
    <div className="list-container">
      <h2>Jefes de Equipo</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha de Inicio</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.fechaInicio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default JefeEquipo;
