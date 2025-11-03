import React, { useState } from "react";
import ServicioService from "../../Service/ServicioService";
import "./Servicio.css";

const Servicio = () => {
  const [id, setId] = useState("");
  const [servicio, setServicio] = useState(null);

  const handleBuscar = (e) => {
    e.preventDefault();
    ServicioService.buscar(id)
      .then((data) => setServicio(data))
      .catch(() => {
        alert("Servicio no encontrado");
        setServicio(null);
      });
  };

  return (
    <div className="buscar-servicio-container">
      <h2>Buscar Servicio por ID</h2>
      <form onSubmit={handleBuscar} className="form-buscar-servicio">
        <input
          type="number"
          placeholder="Ingrese ID del servicio"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <button type="submit">Buscar</button>
      </form>

      {servicio && (
        <div className="resultado-servicio">
          <p><strong>ID:</strong> {servicio.idServicio}</p>
          <p><strong>Descripción:</strong> {servicio.descripcion}</p>
        </div>
      )}
    </div>
  );
};

export default BuscarServicio;
