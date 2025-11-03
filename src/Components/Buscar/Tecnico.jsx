import React, { useState } from "react";
import TecnicoService from "../../Service/TecnicoService";
import "./Tecnico.css";

const Tecnico = () => {
  const [id, setId] = useState("");
  const [tecnico, setTecnico] = useState(null);

  const handleBuscar = (e) => {
    e.preventDefault();
    TecnicoService.buscar(id)
      .then((data) => setTecnico(data))
      .catch(() => {
        alert("Técnico no encontrado");
        setTecnico(null);
      });
  };

  return (
    <div className="buscar-tecnico-container">
      <h2>Buscar Técnico por ID</h2>
      <form onSubmit={handleBuscar} className="form-buscar-tecnico">
        <input
          type="number"
          placeholder="Ingrese ID del técnico"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <button type="submit">Buscar</button>
      </form>

      {tecnico && (
        <div className="resultado-tecnico">
          <p><strong>ID:</strong> {tecnico.id}</p>
          <p><strong>Nombre:</strong> {tecnico.nombre}</p>
          <p><strong>Experiencia:</strong> {tecnico.aniosExperiencia} años</p>
        </div>
      )}
    </div>
  );
};

export default Tecnico;
