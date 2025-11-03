import React, { useState } from "react";
import "./Servicio.css";
import ServicioService from "../../Service/ServicioService";
import { useNavigate } from "react-router-dom";

export default function EliminarServicio() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [servicio, setServicio] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // Buscar servicio por ID
  const buscar = async () => {
    try {
      const res = await ServicioService.getServicioById(Number(id));
      setServicio(res.data);
      setLoaded(true);
    } catch {
      alert("Servicio no encontrado");
      setLoaded(false);
    }
  };

  // Eliminar servicio
  const eliminar = async () => {
    try {
      await ServicioService.deleteServicio(Number(id));
      alert("Servicio eliminado correctamente");
      navigate("/lista-servicios");
    } catch {
      alert("No se pudo eliminar el servicio");
    }
  };

  return (
    <div className="delete-container">
      <h2>Eliminar Servicio</h2>

      <div className="block">
        <label>ID</label>
        <input type="number" value={id} onChange={e => setId(e.target.value)} />
        <div className="buttons">
          <button className="btn btn-primary" onClick={buscar}>Cargar</button>
          <button className="btn btn-secondary" onClick={() => navigate("/lista-servicios")}>Regresar</button>
        </div>
      </div>

      {loaded && servicio && (
        <div className="block">
          <p><strong>Descripción:</strong> {servicio.descripcion}</p>
          <div className="buttons">
            <button className="btn btn-danger" onClick={eliminar}>Eliminar Servicio</button>
          </div>
        </div>
      )}
    </div>
  );
}
