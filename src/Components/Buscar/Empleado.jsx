import React, { useState } from "react";
import "./Buscar.css";
import EmpleadoService from "../../Service/EmpleadoService";

export default function BuscarEmpleado() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const buscar = async () => {
    try {
      const res = await EmpleadoService.getEmpleadoById(Number(id));
      setData(res.data);
    } catch {
      setData(null);
      alert("No encontrado");
    }
  };

  return (
    <div className="search-container">
      <h2>Buscar Empleado</h2>
      <div className="row">
        <div>
          <label>ID</label>
          <input type="number" value={id} onChange={e=>setId(e.target.value)} />
        </div>
      </div>
      <div className="buttons">
        <button className="btn btn-primary" onClick={buscar}>Buscar</button>
      </div>

      {data && (
        <div className="result-box">
          <div className="kv">
            <div>ID</div><div>{data.id}</div>
            <div>Nombre</div><div>{data.primerNombre} {data.primerApellido}</div>
            <div>Fecha Nacimiento</div><div>{data.fechaNacimiento}</div>
            <div>ID Nacionalidad</div><div>{data.idNacionalidad}</div>
            <div>ID Estado</div><div>{data.idEstado}</div>
          </div>
        </div>
      )}
    </div>
  );
}