import React, { useState } from "react";
import { buscarTipoPenalizacion } from "../service/tipoPenalizacionService";
import "./BuscarTipoPenalizacion.css";
import { useNavigate } from "react-router-dom";

const BuscarTipoPenalizacion = () => {
  const [id, setId] = useState("");
  const [resultado, setResultado] = useState(null);
  const navigate = useNavigate();

  const handleBuscar = async (e) => {
    e.preventDefault();
    const data = await buscarTipoPenalizacion(id);
    setResultado(data);
  };

  const volver = () => navigate("/listar-tipo-penalizacion");

  return (
    <div className="buscar-tipo-container">
      <h2>Buscar Tipo de Penalización</h2>
      <form onSubmit={handleBuscar} className="form-buscar">
        <input
          type="number"
          placeholder="Ingrese ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <button type="submit">Buscar</button>
        <button type="button" onClick={volver}>
          Volver
        </button>
      </form>

      {resultado && (
        <div className="resultado">
          <p><strong>ID:</strong> {resultado.idTipoPenalizacion}</p>
          <p><strong>Nombre:</strong> {resultado.nombre}</p>
          <p><strong>Descripción:</strong> {resultado.descripcion}</p>
        </div>
      )}
    </div>
  );
};

export default BuscarTipoPenalizacion;
