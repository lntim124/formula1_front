import React, { useState } from "react";
import "./EditarPilCarr.css";
import PilCarrService from "../../Service/PilCarrService";
import { useNavigate } from "react-router-dom";

export default function EditarPilCarr() {
  const navigate = useNavigate();
  const [idPiloto, setIdPiloto] = useState("");
  const [idCarrera, setIdCarrera] = useState("");
  const [rankingFinal, setRankingFinal] = useState("");
  const [loaded, setLoaded] = useState(false);

  // Buscar relación por IDs
  const buscar = async () => {
    try {
      const res = await PilCarrService.getPilCarrByIds(Number(idPiloto), Number(idCarrera));
      setRankingFinal(res.data.rankingFinal || "");
      setLoaded(true);
    } catch {
      alert("Relación Piloto-Carrera no encontrada");
      setLoaded(false);
    }
  };

  // Guardar cambios
  const guardar = async () => {
    try {
      await PilCarrService.updatePilCarr(Number(idPiloto), Number(idCarrera), {
        idPiloto: Number(idPiloto),
        idCarrera: Number(idCarrera),
        rankingFinal
      });
      alert("Relación actualizada correctamente");
      navigate("/lista-pilcarr");
    } catch {
      alert("No se pudo actualizar la relación");
    }
  };

  return (
    <div className="edit-container">
      <h2>Editar Piloto-Carrera</h2>

      <div className="block">
        <label>ID Piloto</label>
        <input type="number" value={idPiloto} onChange={e => setIdPiloto(e.target.value)} />
        <label>ID Carrera</label>
        <input type="number" value={idCarrera} onChange={e => setIdCarrera(e.target.value)} />
        <div className="buttons">
          <button className="btn btn-primary" onClick={buscar}>Cargar</button>
          <button className="btn btn-secondary" onClick={() => navigate("/lista-pilcarr")}>Regresar</button>
        </div>
      </div>

      {loaded && (
        <div className="block">
          <label>Ranking Final</label>
          <input type="number" value={rankingFinal} onChange={e => setRankingFinal(e.target.value)} />
          <div className="buttons">
            <button className="btn btn-success" onClick={guardar}>Guardar cambios</button>
          </div>
        </div>
      )}
    </div>
  );
}
