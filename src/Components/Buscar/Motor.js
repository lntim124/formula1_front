// src/components/BuscarMotor.js
import React, { useState } from "react";
import MotorService from "../service/MotorService";
import "./BuscarMotor.css";
import { useNavigate } from "react-router-dom";

const BuscarMotor = () => {
  const [idmotor, setIdmotor] = useState("");
  const [motor, setMotor] = useState(null);
  const navigate = useNavigate();

  const buscarMotor = () => {
    if (!idmotor) {
      alert("Por favor ingrese un ID para buscar");
      return;
    }

    MotorService.buscarPorId(idmotor)
      .then((response) => {
        setMotor(response.data);
      })
      .catch(() => {
        alert("❌ Motor no encontrado");
        setMotor(null);
      });
  };

  const volver = () => navigate("/listar-motor");

  return (
    <div className="buscar-motor-container">
      <h2>Buscar Motor</h2>

      <div className="buscar-input">
        <input
          type="number"
          placeholder="Ingrese ID del motor"
          value={idmotor}
          onChange={(e) => setIdmotor(e.target.value)}
        />
        <button onClick={buscarMotor}>Buscar</button>
      </div>

      {motor && (
        <div className="motor-detalle">
          <h3>Detalles del Motor</h3>
          <p><strong>ID:</strong> {motor.idmotor}</p>
          <p><strong>Nombre:</strong> {motor.nombre}</p>
          <p><strong>Potencia:</strong> {motor.potencia}</p>
          <p><strong>Fabricante:</strong> {motor.fabricante}</p>
        </div>
      )}

      <div className="button-container">
        <button onClick={volver}>Volver</button>
      </div>
    </div>
  );
};

export default BuscarMotor;
