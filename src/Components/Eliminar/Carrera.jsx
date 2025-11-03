import React, { useState } from "react";
import "./Carrera.css";
import CarreraService from "../../Service/CarreraService";
import { useNavigate } from "react-router-dom";

 function Carrera() {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const eliminar = async () => {
    try {
      await CarreraService.deleteCarrera(Number(id));
      alert("Carrera eliminada ✅");
      navigate("/lista-carrera");
    } catch {
      alert("No se pudo eliminar ❌");
    }
  };

  return (
    <div className="delete-container">
      <h2>Eliminar Carrera</h2>
      <label>ID</label>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button className="btn-primary" onClick={eliminar}>Eliminar</button>
      <button className="btn-secondary" onClick={() => navigate("/lista-carrera")}>Regresar</button>
    </div>
  );
}
export default Carrera;
