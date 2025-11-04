import React, { useEffect, useState } from "react";
import "./Empleado.css";
import EmpleadoService from "../../Service/EmpleadoService";

function ListarEmpleado({ irACrear }) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    EmpleadoService.getAllEmpleado()
      .then(res => setRows(res.data || []))
      .catch((e) => {
        alert("Error cargando Empleados");
        console.error(e);
      });
  }, []);
  
  return (
    <div className="list-container">
      <div className="header-row">
        <h2>Empleados</h2>
        <button type="button" onClick={irACrear} className="btn-crear">
          Crear Empleado
        </button>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Fecha Nacimiento</th>
              <th>ID Nacionalidad</th>
              <th>ID Estado</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.primerNombre} {r.primerApellido}</td>
                <td>{r.fechaNacimiento}</td>
                <td>{r.idNacionalidad}</td>
                <td>{r.idEstado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListarEmpleado;
