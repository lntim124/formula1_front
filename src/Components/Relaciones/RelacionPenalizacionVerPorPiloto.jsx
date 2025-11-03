import React, { useState } from "react";
import "./Relaciones/General.css";
import PenalizacionService from "../../Service/PenalizacionService";

export default function RelacionPenalizacionVerPorPiloto() {
  const [idPiloto, setIdPiloto] = useState("");
  const [rows, setRows] = useState([]);

  const cargar = async () => {
    try {
      const res = await PenalizacionService.verPorPiloto(Number(idPiloto));
      setRows(res.data || []);
    } catch {
      setRows([]);
      alert("No se pudo consultar ");
    }
  };

  return (
    <div className="relation-container">
      <h2>Penalizaciones de un Piloto</h2>
      <label>ID Piloto</label>
      <input type="number" value={idPiloto} onChange={e=>setIdPiloto(e.target.value)} />
      <button className="btn-primary" onClick={cargar}>Ver penalizaciones</button>

      <div className="result-box">
        {rows.length === 0 ? "Sin resultados" : (
          <ul>
            {rows.map((p, i) => (
              <li key={i}>ID: {p.idPenalizacion} — Momento: {p.momento} — Tiempo: {p.tiempo} min</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}