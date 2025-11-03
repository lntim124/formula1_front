import React, { useState } from "react";
import "./Tecnico.css";
import TecnicoService from "../../Service/TecnicoService";
import { useNavigate } from "react-router-dom";

 function Tecnico() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [loaded, setLoaded] = useState(false);

  // Buscar técnico por ID
  const buscar = async () => {
    try {
      const res = await TecnicoService.getTecnicoById(Number(id));
      setNombre(res.data.nombre || "");
      setLoaded(true);
    } catch {
      alert("Técnico no encontrado");
      setLoaded(false);
    }
  };

  // Guardar cambios
  const guardar = async () => {
    try {
      await TecnicoService.updateTecnico(Number(id), { id: Number(id), nombre });
      alert("Técnico actualizado correctamente");
      navigate("/lista-tecnicos");
    } catch {
      alert("No se pudo actualizar el técnico");
    }
  };

  return (
    <div className="edit-container">
      <h2>Editar Técnico</h2>

      <div className="block">
        <label>ID</label>
        <input type="number" value={id} onChange={e => setId(e.target.value)} />
        <div className="buttons">
          <button className="btn btn-primary" onClick={buscar}>Cargar</button>
          <button className="btn btn-secondary" onClick={() => navigate("/lista-tecnicos")}>Regresar</button>
        </div>
      </div>

      {loaded && (
        <div className="block">
          <label>Nombre</label>
          <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
          <div className="buttons">
            <button className="btn btn-success" onClick={guardar}>Guardar cambios</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tecnico;

