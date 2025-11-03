import React, { useState } from "react";
import "./Relaciones/General.css";
import TecnicoService from "../../Service/TecnicoService";

export default function RelacionTecnicoVerEspecialidades() {
  const [idTecnico, setIdTecnico] = useState("");
  const [rows, setRows] = useState([]);

  const cargar = async () => {
    try {
      const res = await TecnicoService.verEspecialidades(Number(idTecnico));
      setRows(res.data || []);
    } catch {
      setRows([]);
      alert("No se pudo consultar ");
    }
  };

  return (
    <div className="relation-container">
      <h2>Especialidades de un Técnico</h2>
      <label>ID Técnico</label>
      <input type="number" value={idTecnico} onChange={e=>setIdTecnico(e.target.value)} />
      <button className="btn-primary" onClick={cargar}>Ver especialidades</button>

      <div className="result-box">
        {rows.length === 0 ? "Sin resultados" : (
          <ul>
            {rows.map((esp, i) => <li key={i}>ID: {esp.idEspecialidad} — {esp.nombre}</li>)}
          </ul>
        )}
      </div>
    </div>
  );
}