import React, { useState } from "react";
import "./Eliminar.css";
import EspecialidadService from "../../Service/EspecialidadService";
import { useNavigate } from "react-router-dom";

export default function EliminarEspecialidad() {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const eliminar = async () => {
    try {
      await EspecialidadService.deleteEspecialidad(Number(id));
      alert("Especialidad eliminada ✅");
      navigate("/lista-especialidad");
    } catch {
      alert("No se pudo eliminar ❌");
    }
  };

  return (
    <div className="delete-container">
      <h2>Eliminar Especialidad</h2>
      <label>ID</label>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button className="btn-primary" onClick={eliminar}>Eliminar</button>
      <button className="btn-secondary" onClick={() => navigate("/lista-especialidad")}>Regresar</button>
    </div>
  );
}