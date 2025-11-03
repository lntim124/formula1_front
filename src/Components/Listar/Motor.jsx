// src/components/ListarMotor.js
import React, { useEffect, useState } from "react";
import MotorService from "../service/MotorService";
import "./ListarMotor.css";
import { useNavigate } from "react-router-dom";

const ListarMotor = () => {
  const [motores, setMotores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    MotorService.listarMotores()
      .then((response) => setMotores(response.data))
      .catch((error) => console.error("Error al obtener los motores:", error));
  }, []);

  const irACrear = () => navigate("/crear-motor");
  const irABuscar = () => navigate("/buscar-motor");

  return (
    <div className="listar-motor-container">
      <h2>Lista de Motores</h2>

      <div className="button-container">
        <button onClick={irACrear}>Agregar Nuevo</button>
        <button onClick={irABuscar}>Buscar Motor</button>
      </div>

      <table className="tabla-motores">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Potencia</th>
            <th>Fabricante</th>
          </tr>
        </thead>
        <tbody>
          {motores.length > 0 ? (
            motores.map((motor) => (
              <tr key={motor.idmotor}>
                <td>{motor.idmotor}</td>
                <td>{motor.nombre}</td>
                <td>{motor.potencia}</td>
                <td>{motor.fabricante}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No hay motores registrados
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListarMotor;
