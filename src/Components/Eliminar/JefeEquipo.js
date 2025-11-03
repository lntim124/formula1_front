import React, { useState } from "react";
import "./Eliminar.css";
import JefeEquipoService from "../../Service/JefeEquipoService";
import { useNavigate } from "react-router-dom";

export default function EliminarJefeEquipo() {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const eliminar = async () => {
    try {
      await JefeEquipoService.deleteJefeEquipo(Number(id));
      alert("Jefe de equipo eliminado ");
      navigate("/lista-jefeequipo");
    } catch {
      alert("No se pudo eliminar ");
    }
  };

  return (
    <div className="delete-container">
      <h2>Eliminar Jefe de Equipo</h2>
      <label>ID</label>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button className="btn-primary" onClick={eliminar}>Eliminar</button>
      <button className="btn-secondary" onClick={() => navigate("/lista-jefeequipo")}>Regresar</button>
    </div>
  );
}