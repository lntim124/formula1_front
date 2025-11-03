import React, { useState } from "react";
import TecnicoService from "../../Service/TecnicoService";
import "./Tecnico.css";
import { useNavigate } from "react-router-dom";

const CrearTecnico = () => {
  const [tecnico, setTecnico] = useState({
    id: "",
    nombre: "",
    aniosExperiencia: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setTecnico({ ...tecnico, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    TecnicoService.crear(tecnico)
      .then(() => {
        alert("Técnico creado correctamente");
        navigate("/listar-tecnico");
      })
      .catch((error) => {
        console.error("Error al crear técnico:", error);
        alert("Error al crear técnico");
      });
  };

  return (
    <div className="crear-tecnico-container">
      <h2>Crear Nuevo Técnico</h2>
      <form className="form-crear-tecnico" onSubmit={handleSubmit}>
        <label>ID:</label>
        <input
          type="number"
          name="id"
          value={tecnico.id}
          onChange={handleChange}
          required
        />

        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={tecnico.nombre}
          onChange={handleChange}
          required
        />

        <label>Años de Experiencia:</label>
        <input
          type="number"
          name="aniosExperiencia"
          value={tecnico.aniosExperiencia}
          onChange={handleChange}
          required
        />

        <div className="button-container">
          <button type="submit">Guardar</button>
          <button type="button" onClick={() => navigate("/listar-tecnico")}>
            Volver
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrearTecnico;
