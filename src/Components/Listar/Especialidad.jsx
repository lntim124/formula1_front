import React, { useEffect, useState } from "react";
import "./Especialidad.css";
import EspecialidadService from "../../Service/EspecialidadService";

 function Especialidad() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    EspecialidadService.getAllEspecialidad()
      .then(res => setRows(res.data || []))
      .catch(() => alert("Error cargando Especialidades"));
  }, []);

  return (
    <div className="list-container">
      <h2>Especialidades</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.idEspecialidad}>
                <td>{r.idEspecialidad}</td>
                <td>{r.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Especialidad;
