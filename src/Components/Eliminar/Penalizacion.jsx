import React, { useState } from "react";
import "./EliminarPenalizacion.css";
import PenalizacionService from "../../Service/PenalizacionService";
import { useNavigate } from "react-router-dom";

export default function EliminarPenalizacion() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [penalizacion, setPenalizacion] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // Buscar penalización por ID
  const buscar = async () => {
    try {
      const res = await PenalizacionService.getPenalizacionById(Number(id));
      setPenalizacion(res.data);
      setLoaded(true);
    } catch {
      alert("Penalización no encontrada");
      setLoaded(false);
    }
  };

  // Eliminar penalización
  const eliminar = async () => {
    try {
      await PenalizacionService.deletePenalizacion(Number(id));
      alert("Penalización eliminada correctamente");
      navigate("/lista-penalizaciones");
    } catch {
      alert("No se pudo eliminar la penalización");
    }
  };

  return (
    <div className="delete-container">
      <h2>Eliminar Penalización</h2>

      <div className="block">
        <label>ID</label>
        <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
        <div className="buttons">
          <button className="btn btn-primary" onClick={buscar}>Cargar</button>
          <button className="btn btn-secondary" onClick={() => navigate("/lista-penalizaciones")}>Regresar</button>
        </div>
      </div>

      {loaded && penalizacion && (
        <div className="block">
          <p><strong>Descripción:</strong> {penalizacion.descripcion}</p>
          <div className="buttons">
            <button className="btn btn-danger" onClick={eliminar}>Eliminar Penalización</button>
          </div>
        </div>
      )}
    </div>
  );
}
