import React, { useState } from "react";
import "./General.css";
import PenalizacionService from "../../Service/PenalizacionService";

 function RelacionPenalizacionVerPorCarrera() {
  const [idCarrera, setIdCarrera] = useState("");
  const [rows, setRows] = useState([]);

  const cargar = async () => {
    try {
      const res = await PenalizacionService.verPorCarrera(Number(idCarrera));
      setRows(res.data || []);
    } catch {
      setRows([]);
      alert("No se pudo consultar ");
    }
  };

  return (
    <div className="relation-container">
      <h2>Penalizaciones de una Carrera</h2>
      <label>ID Carrera</label>
      <input type="number" value={idCarrera} onChange={e=>setIdCarrera(e.target.value)} />
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
export default RelacionPenalizacionVerPorCarrera;