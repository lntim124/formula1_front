import React, { useState } from "react";
import "./EliminarTipoPenalizacion.css";
import TipoPenalizacionService from "../../Service/TipoPenalizacionService";
import { useNavigate } from "react-router-dom";

export default function EliminarTipoPenalizacion() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [tipo, setTipo] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const buscar = async () => {
    try {
      const res = await TipoPenalizacionService.getTipoPenalizacionById(Number(id));
      setTipo(res.data);
      setLoaded(true);
    } catch {
      alert("Tipo de penalización no encontrado");
      setLoaded(false);
    }
  };

  const eliminar = async () => {
    try {
      await TipoPenalizacionService.deleteTipoPenalizacion(Number(id));
      alert("Tipo de penalización eliminado correctamente");
      navigate("/tipo-penalizacion");
    } catch {
      alert("No se pudo eliminar el tipo de penalización");
    }
  };

  return (
    <div className="delete-container">
      <h2>Eliminar Tipo de Penalización</h2>

      <div className="block">
        <label>ID</label>
        <input type="number" value={id} onChange={e => setId(e.target.value)} />
        <div className="buttons">
          <button className="btn btn-primary" onClick={buscar}>Cargar</button>
          <button className="btn btn-secondary" onClick={() => navigate("/tipo-penalizacion")}>Regresar</button>
        </div>
      </div>

      {loaded && tipo && (
        <div className="block">
          <p><strong>Nombre:</strong> {tipo.nombre}</p>
          <p><strong>Descripción:</strong> {tipo.descripcion}</p>
          <div className="buttons">
            <button className="btn btn-danger" onClick={eliminar}>Eliminar Tipo</button>
          </div>
        </div>
      )}
    </div>
  );
}
