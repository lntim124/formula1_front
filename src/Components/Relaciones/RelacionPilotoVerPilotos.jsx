import React, { useState } from "react";
import "./General.css";              // usa tu css unificado
import PilotoService from "../../Service/PilotoService";

 function RelacionPilotoVerPilotos() {
  const [placaAuto, setPlacaAuto] = useState("");
  const [pilotos, setPilotos] = useState([]);

  const cargar = async () => {
    try {
      const res = await PilotoService.verPilotosDeAuto(placaAuto.trim());
      setPilotos(res.data || []);
    } catch (e) {
      console.error(e);
      setPilotos([]);
      alert("No se pudo consultar ");
    }
  };

  return (
    <div className="relation-container">
      <h2>Pilotos de un Auto</h2>

      <label>Placa del Auto</label>
      <input
        value={placaAuto}
        onChange={(e) => setPlacaAuto(e.target.value)}
        placeholder="Ej: RB-001"
      />

      <button className="btn-primary" onClick={cargar}>Ver pilotos</button>

      <div className="result-box" style={{ marginTop: 12 }}>
        {pilotos.length === 0
          ? "Sin resultados"
          : (
            <ul>
              {pilotos.map((p, i) => (
                <li key={i}>
                  ID: {p.id} — {p.primerNombre} {p.primerApellido}
                </li>
              ))}
            </ul>
          )}
      </div>
    </div>
  );
}
export default RelacionPilotoVerPilotos;