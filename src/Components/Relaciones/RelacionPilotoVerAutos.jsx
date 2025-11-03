import React, { useState } from "react";
import "./General.css";
import PilotoService from "../../Service/PilotoService";

export default function RelacionPilotoVerAutos() {
  const [idPiloto, setIdPiloto] = useState("");
  const [autos, setAutos] = useState([]);

  const cargar = async () => {
    try {
      const res = await PilotoService.verAutosDePiloto(Number(idPiloto));
      setAutos(res.data || []);
    } catch (e) {
      console.error(e);
      setAutos([]);
      alert("No se pudo consultar ");
    }
  };

  return (
    <div className="relation-container">
      <h2>Autos de un Piloto</h2>
      <label>ID Piloto</label>
      <input type="number" value={idPiloto} onChange={(e) => setIdPiloto(e.target.value)} />
      <button className="btn-primary" onClick={cargar}>Ver autos</button>

      <div className="result-box">
        {autos.length === 0 ? <div>Sin resultados</div> : (
          <ul>
            {autos.map((a, i) => (
              <li key={i}>
                Placa: {a.placa} — Chasis: {a.numeroChasis} — Modelo: {a.idModelo} — Motor: {a.idMotor}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}