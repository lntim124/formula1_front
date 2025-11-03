import React, { useState } from "react";
import "./Estado.css";
import EstadoService from "../../Service/EstadoService";
import { useNavigate } from "react-router-dom";

export default function Estado() {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const eliminar = async () => {
    try {
      await EstadoService.deleteEstado(Number(id));
      alert("Estado eliminado ✅");
      navigate("/lista-estado");
    } catch {
      alert("No se pudo eliminar ❌");
    }
  };

  return (
    <div className="delete-container">
      <h2>Eliminar Estado</h2>
      <label>ID</label>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button className="btn-primary" onClick={eliminar}>Eliminar</button>
      <button className="btn-secondary" onClick={() => navigate("/lista-estado")}>Regresar</button>
    </div>
  );
}