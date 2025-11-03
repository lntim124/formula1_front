import React, { useState } from "react";
import "./Relaciones/General.css";
import PenalizacionService from "../../Service/PenalizacionService";

export default function RelacionPenalizacionVerTipos() {
  const [idPenalizacion, setIdPenalizacion] = useState("");
  const [rows, setRows] = useState([]);

  const cargar = async () => {
    try {
      const res = await PenalizacionService.verTipos(Number(idPenalizacion));
      setRows(res.data || []);
    } catch {
      setRows([]);
      alert("No se pudo consultar ");
    }
  };

  return (
    <div className="relation-container">
      <h2>Tipos de una Penalización</h2>
      <label>ID Penalización</label>
      <input type="number" value={idPenalizacion} onChange={e=>setIdPenalizacion(e.target.value)} />
      <button className="btn-primary" onClick={cargar}>Ver tipos</button>

      <div className="result-box">
        {rows.length === 0 ? "Sin resultados" : (
          <ul>
            {rows.map((t, i) => (
              <li key={i}>
                ID: {t.idTipoPenalizacion} — {t.nombre} — {t.descripcion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}