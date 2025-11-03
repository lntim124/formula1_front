import React, { useState } from "react";
import "./EliminarTecnico.css";
import TecnicoService from "../../Service/TecnicoService";
import { useNavigate } from "react-router-dom";

export default function EliminarTecnico() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [tecnico, setTecnico] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // Buscar técnico por ID
  const buscar = async () => {
    try {
      const res = await TecnicoService.getTecnicoById(Number(id));
      setTecnico(res.data);
      setLoaded(true);
    } catch {
      alert("Técnico no encontrado");
      setLoaded(false);
    }
  };

  // Eliminar técnico
  const eliminar = async () => {
    try {
      await TecnicoService.deleteTecnico(Number(id));
      alert("Técnico eliminado correctamente");
      navigate("/lista-tecnicos");
    } catch {
      alert("No se pudo eliminar el técnico");
    }
  };

  return (
    <div className="delete-container">
      <h2>Eliminar Técnico</h2>

      <div className="block">
        <label>ID</label>
        <input type="number" value={id} onChange={e => setId(e.target.value)} />
        <div className="buttons">
          <button className="btn btn-primary" onClick={buscar}>Cargar</button>
          <button className="btn btn-secondary" onClick={() => navigate("/lista-tecnicos")}>Regresar</button>
        </div>
      </div>

      {loaded && tecnico && (
        <div className="block">
          <p><strong>Nombre:</strong> {tecnico.nombre}</p>
          <div className="buttons">
            <button className="btn btn-danger" onClick={eliminar}>Eliminar Técnico</button>
          </div>
        </div>
      )}
    </div>
  );
}
