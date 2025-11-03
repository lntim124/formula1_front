import React, { useState } from "react";
import "./Buscar.css";
import JefeEquipoService from "../../Service/JefeEquipoService";

export default function BuscarJefeEquipo() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const buscar = async () => {
    try {
      const res = await JefeEquipoService.getJefeEquipoById(Number(id));
      setData(res.data);
    } catch {
      setData(null);
      alert("No encontrado");
    }
  };

  return (
    <div className="search-container">
      <h2>Buscar Jefe de Equipo</h2>
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
            <div>Fecha Inicio</div><div>{data.fechaInicio}</div>
          </div>
        </div>
      )}
    </div>
  );
}