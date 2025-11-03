import React, { useState } from "react";
import axios from "axios";
import "./BuscarPilCarr.css";
import { useNavigate } from "react-router-dom";

const BuscarPilCarr = () => {
  const [idPiloto, setIdPiloto] = useState("");
  const [idCarrera, setIdCarrera] = useState("");
  const [resultado, setResultado] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const manejarBusqueda = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/pilCarr/buscar/${idPiloto}/${idCarrera}`);
      setResultado(response.data);
      setMensaje("");
    } catch (error) {
      console.error("Error al buscar la relación:", error);
      setResultado(null);
      setMensaje("❌ No se encontró la relación especificada");
    }
  };

  const irAListar = () => {
    navigate("/listar-pilcarr");
  };

  return (
    <div className="buscar-pilcarr-container">
      <h2>Buscar Relación Piloto-Carrera</h2>

      <form onSubmit={manejarBusqueda} className="form-buscar">
        <label>ID Piloto:</label>
        <input
          type="number"
          value={idPiloto}
          onChange={(e) => setIdPiloto(e.target.value)}
          required
        />

        <label>ID Carrera:</label>
        <input
          type="number"
          value={idCarrera}
          onChange={(e) => setIdCarrera(e.target.value)}
          required
        />

        <button type="submit">Buscar</button>
      </form>

      {mensaje && <p className="mensaje">{mensaje}</p>}

      {resultado && (
        <div className="resultado">
          <h3>Resultado</h3>
          <p><strong>ID Piloto:</strong> {resultado.idPiloto}</p>
          <p><strong>ID Carrera:</strong> {resultado.idCarrera}</p>
          <p><strong>Ranking Final:</strong> {resultado.rankingFinal}</p>
        </div>
      )}

      <button className="volver-btn" onClick={irAListar}>
        Volver a la Lista
      </button>
    </div>
  );
};

export default BuscarPilCarr;
