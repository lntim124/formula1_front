import React, { useState } from "react";
import "./Penalizacion.css";
import PenalizacionService from "../../Service/PenalizacionService";
import { useNavigate } from "react-router-dom";

function Penalizacion() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [loaded, setLoaded] = useState(false);

  // Buscar penalización por ID
  const buscar = async () => {
    try {
      const res = await PenalizacionService.getPenalizacionById(Number(id));
      setDescripcion(res.data.descripcion || "");
      setLoaded(true);
    } catch {
      alert("Penalización no encontrada");
      setLoaded(false);
    }
  };

  // Guardar cambios
  const guardar = async () => {
    try {
      await PenalizacionService.updatePenalizacion(Number(id), {
        idPenalizacion: Number(id),
        descripcion
      });
      alert("Penalización actualizada correctamente");
      navigate("/lista-penalizaciones");
    } catch {
      alert("No se pudo actualizar la penalización");
    }
  };

  return (
    <div className="edit-container">
      <h2>Editar Penalización</h2>

      <div className="block">
        <label>ID</label>
        <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
        <div className="buttons">
          <button className="btn btn-primary" onClick={buscar}>Cargar</button>
          <button className="btn btn-secondary" onClick={() => navigate("/lista-penalizaciones")}>Regresar</button>
        </div>
      </div>

      {loaded && (
        <div className="block">
          <label>Descripción</label>
          <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
          <div className="buttons">
            <button className="btn btn-success" onClick={guardar}>Guardar cambios</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Penalizacion;

