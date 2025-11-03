import React, { useState } from "react";
import "./EliminarMotor.css";
import MotorService from "../../Service/MotorService";
import { useNavigate } from "react-router-dom";

export default function EliminarMotor() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [motor, setMotor] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // Buscar motor por ID
  const buscar = async () => {
    try {
      const res = await MotorService.getMotorById(Number(id));
      setMotor(res.data);
      setLoaded(true);
    } catch {
      alert("Motor no encontrado");
      setLoaded(false);
    }
  };

  // Eliminar motor
  const eliminar = async () => {
    try {
      await MotorService.deleteMotor(Number(id));
      alert("Motor eliminado correctamente");
      navigate("/lista-motores");
    } catch {
      alert("No se pudo eliminar el motor");
    }
  };

  return (
    <div className="delete-container">
      <h2>Eliminar Motor</h2>

      <div className="block">
        <label>ID</label>
        <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
        <div className="buttons">
          <button className="btn btn-primary" onClick={buscar}>Cargar</button>
          <button className="btn btn-secondary" onClick={() => navigate("/lista-motores")}>Regresar</button>
        </div>
      </div>

      {loaded && motor && (
        <div className="block">
          <p><strong>Nombre:</strong> {motor.nombre}</p>
          <p><strong>Potencia:</strong> {motor.potencia}</p>
          <div className="buttons">
            <button className="btn btn-danger" onClick={eliminar}>Eliminar Motor</button>
          </div>
        </div>
      )}
    </div>
  );
}
