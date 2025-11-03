import React, { useState } from "react";
import "./Piloto.css";
import PilotoService from "../../Service/PilotoService";
import { useNavigate } from "react-router-dom";

function Piloto() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [loaded, setLoaded] = useState(false);

  // Buscar piloto por ID
  const buscar = async () => {
    try {
      const res = await PilotoService.getPilotoById(Number(id));
      setNombre(res.data.nombre || "");
      setLoaded(true);
    } catch {
      alert("Piloto no encontrado");
      setLoaded(false);
    }
  };

  // Guardar cambios
  const guardar = async () => {
    try {
      await PilotoService.updatePiloto(Number(id), {
        id: Number(id),
        nombre
      });
      alert("Piloto actualizado correctamente");
      navigate("/lista-pilotos");
    } catch {
      alert("No se pudo actualizar el piloto");
    }
  };

  return (
    <div className="edit-container">
      <h2>Editar Piloto</h2>

      <div className="block">
        <label>ID</label>
        <input type="number" value={id} onChange={e => setId(e.target.value)} />
        <div className="buttons">
          <button className="btn btn-primary" onClick={buscar}>Cargar</button>
          <button className="btn btn-secondary" onClick={() => navigate("/lista-pilotos")}>Regresar</button>
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

export default Piloto;

