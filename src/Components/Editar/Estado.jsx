import React, { useState } from "react";
import "./Estado.css";
import EstadoService from "../../Service/EstadoService";
import { useNavigate } from "react-router-dom";

function Estado() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [loaded, setLoaded] = useState(false);

  const buscar = async () => {
    try {
      const res = await EstadoService.getEstadoById(Number(id));
      setNombre(res.data.nombre ?? "");
      setLoaded(true);
    } catch {
      alert("No encontrado");
      setLoaded(false);
    }
  };

  const guardar = async () => {
    try {
      await EstadoService.updateEstado(Number(id), { idEstado:Number(id), nombre: nombre.trim() });
      alert("Actualizado ");
      navigate("/lista-estado");
    } catch {
      alert("No se pudo actualizar ");
    }
  };

  return (
    <div className="edit-container">
      <h2>Editar Estado</h2>

      <div className="block">
        <label>ID</label>
        <input type="number" value={id} onChange={e=>setId(e.target.value)} />
        <div className="buttons">
          <button className="btn btn-primary" onClick={buscar}>Cargar</button>
          <button className="btn btn-secondary" onClick={()=>navigate("/lista-estado")}>Regresar</button>
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
export default Estado;
