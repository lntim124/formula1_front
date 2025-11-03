import React, { useState } from "react";
import "./Buscar.css";
import AutCirService from "../../Service/AutCirService";

export default function BuscarAutCir() {
  const [idCircuito, setIdCircuito] = useState("");
  const [placa, setPlaca] = useState("");
  const [data, setData] = useState(null);

  const buscar = async () => {
    try {
      const res = await AutCirService.getAutCirById(Number(idCircuito), placa.trim());
      setData(res.data);
    } catch {
      setData(null);
      alert("No encontrado");
    }
  };

  return (
    <div className="search-container">
      <h2>Buscar Aut_Cir</h2>
      <div className="row">
        <div>
          <label>ID Circuito</label>
          <input type="number" value={idCircuito} onChange={e=>setIdCircuito(e.target.value)} />
        </div>
        <div>
          <label>Placa</label>
          <input value={placa} onChange={e=>setPlaca(e.target.value)} />
        </div>
      </div>
      <div className="buttons">
        <button className="btn btn-primary" onClick={buscar}>Buscar</button>
      </div>

      {data && (
        <div className="result-box">
          <div className="kv">
            <div>ID Circuito</div><div>{data.idCircuito}</div>
            <div>Placa</div><div>{data.placa}</div>
            <div>Velocidad</div><div>{data.velocidad}</div>
          </div>
        </div>
      )}
    </div>
  );
}