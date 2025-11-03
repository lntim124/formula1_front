// src/components/BuscarNacionalidad.js
import React, { useState } from "react";
import NacionalidadService from "../../Service/NacionalidadService";
import "./Nacionalidad.css";
import { useNavigate } from "react-router-dom";

const Nacionalidad = () => {
  const [idNacionalidad, setIdNacionalidad] = useState("");
  const [nacionalidad, setNacionalidad] = useState(null);
  const navigate = useNavigate();

  const buscarNacionalidad = () => {
    if (!idNacionalidad) {
      alert("Por favor ingrese un ID para buscar");
      return;
    }

    NacionalidadService.buscarPorId(idNacionalidad)
      .then((response) => {
        setNacionalidad(response.data);
      })
      .catch(() => {
        alert("Nacionalidad no encontrada");
        setNacionalidad(null);
      });
  };

  const volver = () => navigate("/listar-nacionalidad");

  return (
    <div className="buscar-nacionalidad-container">
      <h2>Buscar Nacionalidad</h2>

      <div className="buscar-input">
        <input
          type="number"
          placeholder="Ingrese ID de la nacionalidad"
          value={idNacionalidad}
          onChange={(e) => setIdNacionalidad(e.target.value)}
        />
        <button onClick={buscarNacionalidad}>Buscar</button>
      </div>

      {nacionalidad && (
        <div className="nacionalidad-detalle">
          <h3>Detalles</h3>
          <p><strong>ID:</strong> {nacionalidad.idNacionalidad}</p>
          <p><strong>País:</strong> {nacionalidad.pais}</p>
          <p><strong>Continente:</strong> {nacionalidad.continente}</p>
        </div>
      )}

      <div className="button-container">
        <button onClick={volver}>Volver</button>
      </div>
    </div>
  );
};

export default Nacionalidad;
