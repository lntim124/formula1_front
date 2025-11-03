import React, { useState } from "react";
import "./Especialidad.css";
import EspecialidadService from "../../Service/EspecialidadService";

 function Especialidad() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const buscar = async () => {
    try {
      const res = await EspecialidadService.getEspecialidadById(Number(id));
      setData(res.data);
    } catch {
      setData(null);
      alert("No encontrado");
    }
  };

  return (
    <div className="search-container">
      <h2>Buscar Especialidad</h2>
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
            <div>ID</div><div>{data.idEspecialidad}</div>
            <div>Nombre</div><div>{data.nombre}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Especialidad;
