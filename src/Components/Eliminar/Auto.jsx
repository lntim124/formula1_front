import React, { useState } from "react";
import "./Eliminar.css";
import AutoService from "../../Service/AutoService";
import { useNavigate } from "react-router-dom";

export default function EliminarAuto() {
  const navigate = useNavigate();
  const [placa, setPlaca] = useState("");

  const eliminar = async () => {
    try {
      await AutoService.deleteAuto(placa.trim());
      alert("Auto eliminado ✅");
      navigate("/lista-auto");
    } catch {
      alert("No se pudo eliminar ❌");
    }
  };

  return (
    <div className="delete-container">
      <h2>Eliminar Auto</h2>
      <label>Placa</label>
      <input
        value={placa}
        onChange={(e) => setPlaca(e.target.value)}
      />
      <button className="btn-primary" onClick={eliminar}>Eliminar</button>
      <button className="btn-secondary" onClick={() => navigate("/lista-auto")}>Regresar</button>
    </div>
  );
}