import React, { useEffect, useState } from "react";
import "./Empleado.css";
import EmpleadoService from "../../Service/EmpleadoService";
import { useNavigate } from "react-router-dom";

function Empleado() {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();
const irACrear = () => navigate("/crear-empleado");

  useEffect(() => {
    EmpleadoService.getAllEmpleado()
      .then(res => setRows(res.data || []))
      .catch(() => alert("Error cargando Empleados"));
  }, []);

  return (
    <div className="list-container">
      <h2>Empleados</h2>
      <button type="button"  onClick={irACrear}>
            Crear Empleado
          </button>
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
export default Empleado;
