import React, { useState } from "react";
import "./Carrera.css";
import CarreraService from "../../Service/CarreraService";

 function Carrera() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const buscar = async () => {
    try {
      const res = await CarreraService.getCarreraById(Number(id));
      setData(res.data);
    } catch {
      setData(null);
      alert("No encontrado");
    }
  };

  return (
    <div className="search-container">
      <h2>Buscar Carrera</h2>
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
            <div>ID</div><div>{data.idCarrera}</div>
            <div>Nombre</div><div>{data.nombre}</div>
            <div>Fecha</div><div>{data.fecha}</div>
            <div>Hora Inicio</div><div>{data.horaInicio}</div>
            <div>Hora Fin</div><div>{data.horaFin}</div>
            <div>ID Jefe Equipo</div><div>{data.idJefeEquipo}</div>
            <div>ID Circuito</div><div>{data.idCircuito}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrera;
