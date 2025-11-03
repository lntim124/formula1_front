import React, { useState } from "react";
import "./Eliminar.css";
import CircuitoService from "../../Service/CircuitoService";
import { useNavigate } from "react-router-dom";

export default function EliminarCircuito() {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const eliminar = async () => {
    try {
      await CircuitoService.deleteCircuito(Number(id));
      alert("Circuito eliminado ");
      navigate("/lista-circuito");
    } catch {
      alert("No se pudo eliminar ");
    }
  };

  return (
    <div className="delete-container">
      <h2>Eliminar Circuito</h2>
      <label>ID Circuito</label>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button className="btn-primary" onClick={eliminar}>Eliminar</button>
      <button className="btn-secondary" onClick={() => navigate("/lista-circuito")}>Regresar</button>
    </div>
  );
}