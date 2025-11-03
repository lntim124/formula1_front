import React, { useState } from "react";
import axios from "axios";
import "./BuscarPiloto.css";

const BuscarPiloto = () => {
  const [id, setId] = useState("");
  const [piloto, setPiloto] = useState(null);
  const [error, setError] = useState("");

  const buscarPiloto = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/piloto/buscar/${id}`);
      setPiloto(response.data);
      setError("");
    } catch (error) {
      setPiloto(null);
      setError("Piloto no encontrado");
    }
  };

  return (
    <div className="buscar-piloto-container">
      <h2>Buscar Piloto</h2>

      <div className="form-buscar">
        <label>ID del Piloto:</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={buscarPiloto}>Buscar</button>
      </div>

      {error && <p className="mensaje">{error}</p>}

      {piloto && (
        <div className="resultado">
          <h3>Datos del Piloto</h3>
          <p><b>ID:</b> {piloto.id}</p>
          <p><b>Nombre:</b> {piloto.nombre}</p>
          <p><b>Edad:</b> {piloto.edad}</p>
          <p><b>Nacionalidad:</b> {piloto.nacionalidad}</p>
        </div>
      )}
    </div>
  );
};

export default BuscarPiloto;
