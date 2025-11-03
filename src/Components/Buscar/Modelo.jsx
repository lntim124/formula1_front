import React, { useState } from "react";
import "./Modelo.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BuscarModelo = () => {
  const [id, setId] = useState("");
  const [modelo, setModelo] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleBuscar = async (e) => {
    e.preventDefault();
    setError("");
    setModelo(null);

    try {
      const response = await axios.get(`http://localhost:8080/modelo/buscar/${id}`);
      setModelo(response.data);
    } catch (err) {
      setError("No se encontró ningún modelo con ese ID.");
    }
  };

  const handleVolver = () => {
    navigate("/listar-modelo");
  };

  return (
    <div className="buscar-modelo-container">
      <h2>Buscar Modelo</h2>
      <form onSubmit={handleBuscar} className="buscar-form">
        <div className="form-group">
          <label htmlFor="id">ID del Modelo</label>
          <input
            type="number"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Ingrese el ID del modelo"
            required
          />
        </div>

        <div className="button-container">
          <button type="submit">Buscar</button>
          <button type="button" onClick={handleVolver}>Volver</button>
        </div>
      </form>

      {error && <p className="error-message">{error}</p>}

      {modelo && (
        <div className="resultado-container">
          <h3>Resultado encontrado</h3>
          <p><strong>ID:</strong> {modelo.idModelo}</p>
          <p><strong>Nombre:</strong> {modelo.nombre}</p>
          <p><strong>Marca:</strong> {modelo.marca}</p>
          <p><strong>Año:</strong> {modelo.anio}</p>
        </div>
      )}
    </div>
  );
};

export default Modelo;
