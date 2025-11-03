import React, { useState } from "react";
import { crearTipoPenalizacion } from "../../Service/TipoPenalizacionService";
import "./TipoPenalizacion.css";
import { useNavigate } from "react-router-dom";

const TipoPenalizacion = () => {
  const [tipo, setTipo] = useState({
    idTipoPenalizacion: "",
    nombre: "",
    descripcion: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setTipo({ ...tipo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const creado = await crearTipoPenalizacion(tipo);
    if (creado) {
      alert("Tipo de penalización creado correctamente");
      navigate("/listar-tipo-penalizacion");
    } else {
      alert("Error al crear tipo de penalización");
    }
  };

  const volver = () => navigate("/listar-tipo-penalizacion");

  return (
    <div className="crear-tipo-container">
      <h2>Crear Tipo de Penalización</h2>
      <form className="form-crear-tipo" onSubmit={handleSubmit}>
        <label>ID:</label>
        <input
          type="number"
          name="idTipoPenalizacion"
          value={tipo.idTipoPenalizacion}
          onChange={handleChange}
          required
        />

        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={tipo.nombre}
          onChange={handleChange}
          required
        />

        <label>Descripción:</label>
        <input
          type="text"
          name="descripcion"
          value={tipo.descripcion}
          onChange={handleChange}
          required
        />

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

export default TipoPenalizacion;
