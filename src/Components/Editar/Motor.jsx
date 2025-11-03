import React, { useState } from "react";
import "./EditarMotor.css";
import MotorService from "../../Service/MotorService";
import { useNavigate } from "react-router-dom";

export default function EditarMotor() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [potencia, setPotencia] = useState("");
  const [loaded, setLoaded] = useState(false);

  // Buscar motor por ID
  const buscar = async () => {
    try {
      const res = await MotorService.getMotorById(Number(id));
      setNombre(res.data.nombre || "");
      setPotencia(res.data.potencia || "");
      setLoaded(true);
    } catch {
      alert("Motor no encontrado");
      setLoaded(false);
    }
  };

  // Guardar cambios
  const guardar = async () => {
    try {
      await MotorService.updateMotor(Number(id), {
        idmotor: Number(id),
        nombre,
        potencia
      });
      alert("Motor actualizado correctamente");
      navigate("/lista-motores");
    } catch {
      alert("No se pudo actualizar el motor");
    }
  };

  return (
    <div className="edit-container">
      <h2>Editar Motor</h2>

      <div className="block">
        <label>ID</label>
        <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
        <div className="buttons">
          <button className="btn btn-primary" onClick={buscar}>Cargar</button>
          <button className="btn btn-secondary" onClick={() => navigate("/lista-motores")}>Regresar</button>
        </div>
      </div>

      {loaded && (
        <div className="block">
          <label>Nombre</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <label>Potencia</label>
          <input type="text" value={potencia} onChange={(e) => setPotencia(e.target.value)} />
          <div className="buttons">
            <button className="btn btn-success" onClick={guardar}>Guardar cambios</button>
          </div>
        </div>
      )}
    </div>
  );
}
