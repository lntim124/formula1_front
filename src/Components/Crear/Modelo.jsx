import React, { useState } from "react";
import axios from "axios";
import "./Modelo.css";
import { useNavigate } from "react-router-dom";

const CrearModelo = () => {
  const [modelo, setModelo] = useState({
    idModelo: "",
    nombre: "",
    marca: "",
    anio: "",
  });

  const navigate = useNavigate();

  const manejarCambio = (e) => {
    setModelo({ ...modelo, [e.target.name]: e.target.value });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/modelo/crear", modelo);
      alert("Modelo creado correctamente");
      navigate("/listar-modelo");
    } catch (error) {
      console.error("Error al crear el modelo:", error);
      alert("Ocurrió un error al crear el modelo");
    }
  };

  const irAListar = () => {
    navigate("/listar-modelo");
  };

  return (
    <div className="crear-modelo-container">
      <h2>Crear Nuevo Modelo</h2>

      <form className="form-crear-modelo" onSubmit={manejarEnvio}>
        <label>ID Modelo:</label>
        <input
          type="number"
          name="idModelo"
          value={modelo.idModelo}
          onChange={manejarCambio}
          required
        />

        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={modelo.nombre}
          onChange={manejarCambio}
          required
        />

        <label>Marca:</label>
        <input
          type="text"
          name="marca"
          value={modelo.marca}
          onChange={manejarCambio}
          required
        />

        <label>Año:</label>
        <input
          type="number"
          name="anio"
          value={modelo.anio}
          onChange={manejarCambio}
          required
        />

        <div className="button-container">
          <button type="submit">Guardar</button>
          <button type="button" onClick={irAListar}>
            Volver
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrearModelo;
