import React, { useState } from "react";
import axios from "axios";
import "./PilCarr.css";
import { useNavigate } from "react-router-dom";

const PilCarr = () => {
  const [formData, setFormData] = useState({
    idPiloto: "",
    idCarrera: "",
    rankingFinal: "",
  });

  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/pilCarr/crear", formData);
      if (response.data) {
        setMensaje("Relación Piloto-Carrera creada con éxito");
        setFormData({ idPiloto: "", idCarrera: "", rankingFinal: "" });
      } else {
        setMensaje("No se pudo crear la relación");
      }
    } catch (error) {
      console.error("Error al crear la relación:", error);
      setMensaje("Error al conectar con el servidor");
    }
  };

  const irAListar = () => {
    navigate("/listar-pilcarr");
  };

  return (
    <div className="crear-pilcarr-container">
      <h2>Crear Relación Piloto-Carrera</h2>

      <form onSubmit={manejarEnvio} className="form-pilcarr">
        <label>ID Piloto:</label>
        <input
          type="number"
          name="idPiloto"
          value={formData.idPiloto}
          onChange={manejarCambio}
          required
        />

        <label>ID Carrera:</label>
        <input
          type="number"
          name="idCarrera"
          value={formData.idCarrera}
          onChange={manejarCambio}
          required
        />

        <label>Ranking Final:</label>
        <input
          type="number"
          name="rankingFinal"
          value={formData.rankingFinal}
          onChange={manejarCambio}
          required
        />

        <button type="submit">Guardar</button>
      </form>

      {mensaje && <p className="mensaje">{mensaje}</p>}

      <button className="volver-btn" onClick={irAListar}>
        Volver a la Lista
      </button>
    </div>
  );
};

export default PilCarr;
