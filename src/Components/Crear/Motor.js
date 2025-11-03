// src/components/CrearMotor.js
import React, { useState } from "react";
import MotorService from "../service/MotorService";
import "./CrearMotor.css";
import { useNavigate } from "react-router-dom";

const CrearMotor = () => {
  const [motor, setMotor] = useState({
    idmotor: "",
    nombre: "",
    potencia: "",
    fabricante: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setMotor({ ...motor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    MotorService.crearMotor(motor)
      .then(() => {
        alert("✅ Motor creado correctamente");
        navigate("/listar-motor");
      })
      .catch((error) => {
        console.error("Error al crear motor:", error);
        alert("❌ Error al crear motor");
      });
  };

  const volver = () => navigate("/listar-motor");

  return (
    <div className="crear-motor-container">
      <h2>Crear Nuevo Motor</h2>
      <form className="form-crear-motor" onSubmit={handleSubmit}>
        <label>ID:</label>
        <input type="number" name="idmotor" value={motor.idmotor} onChange={handleChange} required />

        <label>Nombre:</label>
        <input type="text" name="nombre" value={motor.nombre} onChange={handleChange} required />

        <label>Potencia:</label>
        <input type="text" name="potencia" value={motor.potencia} onChange={handleChange} required />

        <label>Fabricante:</label>
        <input type="text" name="fabricante" value={motor.fabricante} onChange={handleChange} required />

        <div className="button-container">
          <button type="submit">Guardar</button>
          <button type="button" onClick={volver}>
            Volver
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrearMotor;
