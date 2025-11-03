import React, { useState } from "react";
import "./Auto.css";
import AutoService from "../../Service/AutoService";

function Auto() {
  const [placa, setPlaca] = useState("");
  const [data, setData] = useState(null);

  const buscar = async () => {
    try {
      const res = await AutoService.getAutoByPlaca(placa.trim());
      setData(res.data);
    } catch {
      setData(null);
      alert("No encontrado");
    }
  };

  return (
    <div className="search-container">
      <h2>Buscar Auto</h2>
      <div className="row">
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
            <div>Placa</div><div>{data.placa}</div>
            <div>N° Chasis</div><div>{data.numeroChasis}</div>
            <div>Id Motor</div><div>{data.idMotor}</div>
            <div>Fecha Estreno</div><div>{data.fechaEstreno}</div>
            <div>Id Modelo</div><div>{data.idModelo}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Auto;
