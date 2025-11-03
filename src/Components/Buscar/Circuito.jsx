import React, { useState } from "react";
import "./Circuito.css";
import CircuitoService from "../../Service/CircuitoService";

export default function Circuito() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const buscar = async () => {
    try {
      const res = await CircuitoService.getCircuitoById(Number(id));
      setData(res.data);
    } catch {
      setData(null);
      alert("No encontrado");
    }
  };

  return (
    <div className="search-container">
      <h2>Buscar Circuito</h2>
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
            <div>ID</div><div>{data.idCircuito}</div>
            <div>Nombre</div><div>{data.nombre}</div>
            <div>N° Vueltas</div><div>{data.numVueltas ?? data.num_Vuelta}</div>
          </div>
        </div>
      )}
    </div>
  );
}