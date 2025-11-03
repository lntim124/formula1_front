import React, { useState } from "react";
import TipoPenalizacionService from "../../Service/tipoPenalizacionService";  
import "./TipoPenalizacion.css";
import { useNavigate } from "react-router-dom";

const TipoPenalizacion = () => {
  const [id, setId] = useState("");
  const [resultado, setResultado] = useState(null);
  const navigate = useNavigate();

  const handleBuscar = async (e) => {
    e.preventDefault();
    try {
      const res = await TipoPenalizacionService.getTipoPenalizacionById(Number(id));
      setResultado(res.data || null);
    } catch (err) {
      console.error(err);
      setResultado(null);
      alert("No se encontró el Tipo de Penalización");
    }
  };

  const volver = () => navigate("/listar-tipo-penalizacion"); // tu ruta

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
        <button type="button" onClick={volver}>Volver</button>
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

export default TipoPenalizacion;