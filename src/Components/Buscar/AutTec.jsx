import React, { useState } from "react";
import "./AutTec.css";
import AutTecService from "../../Service/AutTecService";

 function AutTec() {
  const [placa, setPlaca] = useState("");
  const [idTecnico, setIdTecnico] = useState("");
  const [data, setData] = useState(null);

  const buscar = async () => {
    try {
      const res = await AutTecService.getAutTecById(placa.trim(), Number(idTecnico));
      setData(res.data);
    } catch {
      setData(null);
      alert("No encontrado");
    }
  };

  return (
    <div className="search-container">
      <h2>Buscar Aut_Tec</h2>
      <div className="row">
        <div>
          <label>Placa</label>
          <input value={placa} onChange={e=>setPlaca(e.target.value)} />
        </div>
        <div>
          <label>ID Técnico</label>
          <input type="number" value={idTecnico} onChange={e=>setIdTecnico(e.target.value)} />
        </div>
      </div>
      <div className="buttons">
        <button className="btn btn-primary" onClick={buscar}>Buscar</button>
      </div>

      {data && (
        <div className="result-box">
          <div className="kv">
            <div>Placa</div><div>{data.placa}</div>
            <div>ID Técnico</div><div>{data.idTecnico}</div>
            <div>ID Servicio</div><div>{data.idServicio}</div>
            <div>Hora Entrada</div><div>{data.horaEntrada}</div>
            <div>Hora Salida</div><div>{data.horaSalida}</div>
          </div>
        </div>
      )}
    </div>
  );
}
export default AutTec;
