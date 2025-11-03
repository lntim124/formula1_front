import React, { useState } from "react";
import "./TipoPenalizacion.css";
import TipoPenalizacionService from "../../Service/tipoPenalizacionService";
import { useNavigate } from "react-router-dom";

 function TipoPenalizacion() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [loaded, setLoaded] = useState(false);

  const buscar = async () => {
    try {
      const res = await TipoPenalizacionService.getTipoPenalizacionById(Number(id));
      setNombre(res.data.nombre || "");
      setDescripcion(res.data.descripcion || "");
      setLoaded(true);
    } catch {
      alert("Tipo de penalización no encontrado");
      setLoaded(false);
    }
  };

  const guardar = async () => {
    try {
      await TipoPenalizacionService.updateTipoPenalizacion(Number(id), { idTipoPenalizacion: Number(id), nombre, descripcion });
      alert("Tipo de penalización actualizado correctamente");
      navigate("/tipo-penalizacion");
    } catch {
      alert("No se pudo actualizar el tipo de penalización");
    }
  };

  return (
    <div className="edit-container">
      <h2>Editar Tipo de Penalización</h2>

      <div className="block">
        <label>ID</label>
        <input type="number" value={id} onChange={e => setId(e.target.value)} />
        <div className="buttons">
          <button className="btn btn-primary" onClick={buscar}>Cargar</button>
          <button className="btn btn-secondary" onClick={() => navigate("/tipo-penalizacion")}>Regresar</button>
        </div>
      </div>

      {loaded && (
        <div className="block">
          <label>Nombre</label>
          <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} />

          <label>Descripción</label>
          <textarea value={descripcion} onChange={e => setDescripcion(e.target.value)} />

          <div className="buttons">
            <button className="btn btn-success" onClick={guardar}>Guardar cambios</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default TipoPenalizacion;
