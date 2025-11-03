import React, { useState } from "react";
import "./Editar.css";
import EspecialidadService from "../../Service/EspecialidadService";
import { useNavigate } from "react-router-dom";

export default function EditarEspecialidad() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [loaded, setLoaded] = useState(false);

  const buscar = async () => {
    try {
      const res = await EspecialidadService.getEspecialidadById(Number(id));
      setNombre(res.data.nombre ?? "");
      setLoaded(true);
    } catch {
      alert("No encontrada");
      setLoaded(false);
    }
  };

  const guardar = async () => {
    try {
      await EspecialidadService.updateEspecialidad(Number(id), { idEspecialidad:Number(id), nombre: nombre.trim() });
      alert("Actualizada ");
      navigate("/lista-especialidad");
    } catch {
      alert("No se pudo actualizar ");
    }
  };

  return (
    <div className="edit-container">
      <h2>Editar Especialidad</h2>

      <div className="block">
        <label>ID</label>
        <input type="number" value={id} onChange={e=>setId(e.target.value)} />
        <div className="buttons">
          <button className="btn btn-primary" onClick={buscar}>Cargar</button>
          <button className="btn btn-secondary" onClick={()=>navigate("/lista-especialidad")}>Regresar</button>
        </div>
      </div>

      {loaded && (
        <div className="block">
          <label>Nombre</label>
          <input value={nombre} onChange={e=>setNombre(e.target.value)} />
          <div className="buttons">
            <button className="btn btn-success" onClick={guardar}>Guardar cambios</button>
          </div>
        </div>
      )}
    </div>
  );
}