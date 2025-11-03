import React, { useState } from "react";
import "./EliminarPilCarr.css";
import PilCarrService from "../../Service/PilCarrService";
import { useNavigate } from "react-router-dom";

export default function EliminarPilCarr() {
  const navigate = useNavigate();
  const [idPiloto, setIdPiloto] = useState("");
  const [idCarrera, setIdCarrera] = useState("");
  const [pilCarr, setPilCarr] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // Buscar relación por IDs
  const buscar = async () => {
    try {
      const res = await PilCarrService.getPilCarrByIds(Number(idPiloto), Number(idCarrera));
      setPilCarr(res.data);
      setLoaded(true);
    } catch {
      alert("Relación Piloto-Carrera no encontrada");
      setLoaded(false);
    }
  };

  // Eliminar relación
  const eliminar = async () => {
    try {
      await PilCarrService.deletePilCarr(Number(idPiloto), Number(idCarrera));
      alert("Relación eliminada correctamente");
      navigate("/lista-pilcarr");
    } catch {
      alert("No se pudo eliminar la relación");
    }
  };

  return (
    <div className="delete-container">
      <h2>Eliminar Piloto-Carrera</h2>

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

      {loaded && pilCarr && (
        <div className="block">
          <p><strong>Ranking Final:</strong> {pilCarr.rankingFinal}</p>
          <div className="buttons">
            <button className="btn btn-danger" onClick={eliminar}>Eliminar Relación</button>
          </div>
        </div>
      )}
    </div>
  );
}
