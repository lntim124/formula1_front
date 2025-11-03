import React, { useState } from "react";
import "./JefeEquipo.css";
import JefeEquipoService from "../../Service/JefeEquipoService";
import { useNavigate } from "react-router-dom";

export default function EditarJefeEquipo() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [loaded, setLoaded] = useState(false);

  const buscar = async () => {
    try {
      const res = await JefeEquipoService.getJefeEquipoById(Number(id));
      setFechaInicio((res.data.fechaInicio || "").slice(0,10));
      setLoaded(true);
    } catch {
      alert("No encontrado");
      setLoaded(false);
    }
  };

  const guardar = async () => {
    try {
      await JefeEquipoService.updateJefeEquipo(Number(id), { id:Number(id), fechaInicio });
      alert("Actualizado ");
      navigate("/lista-jefeequipo");
    } catch {
      alert("No se pudo actualizar ");
    }
  };

  return (
    <div className="edit-container">
      <h2>Editar Jefe de Equipo</h2>

      <div className="block">
        <label>ID</label>
        <input type="number" value={id} onChange={e=>setId(e.target.value)} />
        <div className="buttons">
          <button className="btn btn-primary" onClick={buscar}>Cargar</button>
          <button className="btn btn-secondary" onClick={()=>navigate("/lista-jefeequipo")}>Regresar</button>
        </div>
      </div>

      {loaded && (
        <div className="block">
          <label>Fecha de Inicio</label>
          <input type="date" value={fechaInicio} onChange={e=>setFechaInicio(e.target.value)} />
          <div className="buttons">
            <button className="btn btn-success" onClick={guardar}>Guardar cambios</button>
          </div>
        </div>
      )}
    </div>
  );
}