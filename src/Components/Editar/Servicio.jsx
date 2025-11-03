import React, { useState } from "react";
import "./Servicio.css";
import ServicioService from "../../Service/ServicioService";
import { useNavigate } from "react-router-dom";

export default function EditarServicio() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [loaded, setLoaded] = useState(false);

  // Buscar servicio por ID
  const buscar = async () => {
    try {
      const res = await ServicioService.getServicioById(Number(id));
      setDescripcion(res.data.descripcion || "");
      setLoaded(true);
    } catch {
      alert("Servicio no encontrado");
      setLoaded(false);
    }
  };

  // Guardar cambios
  const guardar = async () => {
    try {
      await ServicioService.updateServicio(Number(id), { idServicio: Number(id), descripcion });
      alert("Servicio actualizado correctamente");
      navigate("/lista-servicios");
    } catch {
      alert("No se pudo actualizar el servicio");
    }
  };

  return (
    <div className="edit-container">
      <h2>Editar Servicio</h2>

      <div className="block">
        <label>ID</label>
        <input type="number" value={id} onChange={e => setId(e.target.value)} />
        <div className="buttons">
          <button className="btn btn-primary" onClick={buscar}>Cargar</button>
          <button className="btn btn-secondary" onClick={() => navigate("/lista-servicios")}>Regresar</button>
        </div>
      </div>

      {loaded && (
        <div className="block">
          <label>Descripción</label>
          <input type="text" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
          <div className="buttons">
            <button className="btn btn-success" onClick={guardar}>Guardar cambios</button>
          </div>
        </div>
      )}
    </div>
  );
}
