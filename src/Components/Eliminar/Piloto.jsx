import React, { useState } from "react";
import "./EliminarPiloto.css";
import PilotoService from "../../Service/PilotoService";
import { useNavigate } from "react-router-dom";

export default function EliminarPiloto() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [piloto, setPiloto] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // Buscar piloto por ID
  const buscar = async () => {
    try {
      const res = await PilotoService.getPilotoById(Number(id));
      setPiloto(res.data);
      setLoaded(true);
    } catch {
      alert("Piloto no encontrado");
      setLoaded(false);
    }
  };

  // Eliminar piloto
  const eliminar = async () => {
    try {
      await PilotoService.deletePiloto(Number(id));
      alert("Piloto eliminado correctamente");
      navigate("/lista-pilotos");
    } catch {
      alert("No se pudo eliminar el piloto");
    }
  };

  return (
    <div className="delete-container">
      <h2>Eliminar Piloto</h2>

      <div className="block">
        <label>ID</label>
        <input type="number" value={id} onChange={e => setId(e.target.value)} />
        <div className="buttons">
          <button className="btn btn-primary" onClick={buscar}>Cargar</button>
          <button className="btn btn-secondary" onClick={() => navigate("/lista-pilotos")}>Regresar</button>
        </div>
      </div>

      {loaded && piloto && (
        <div className="block">
          <p><strong>Nombre:</strong> {piloto.nombre}</p>
          <div className="buttons">
            <button className="btn btn-danger" onClick={eliminar}>Eliminar Piloto</button>
          </div>
        </div>
      )}
    </div>
  );
}
