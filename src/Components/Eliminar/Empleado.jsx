import React, { useState } from "react";
import "./Eliminar.css";
import EmpleadoService from "../../Service/EmpleadoService";
import { useNavigate } from "react-router-dom";

export default function EliminarEmpleado() {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const eliminar = async () => {
    try {
      await EmpleadoService.deleteEmpleado(Number(id));
      alert("Empleado eliminado ✅");
      navigate("/lista-empleado");
    } catch {
      alert("No se pudo eliminar ❌");
    }
  };

  return (
    <div className="delete-container">
      <h2>Eliminar Empleado</h2>
      <label>ID</label>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button className="btn-primary" onClick={eliminar}>Eliminar</button>
      <button className="btn-secondary" onClick={() => navigate("/lista-empleado")}>Regresar</button>
    </div>
  );
}