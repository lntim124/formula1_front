import React, { useState } from "react";
import axios from "axios";
import "./Piloto.css";

const CrearPiloto = () => {
  const [piloto, setPiloto] = useState({
    id: "",
    nombre: "",
    edad: "",
    nacionalidad: "",
  });

  const handleChange = (e) => {
    setPiloto({ ...piloto, [e.target.name]: e.target.value });
  };

  const crearPiloto = async () => {
    try {
      await axios.post("http://localhost:8080/piloto/crear", piloto);
      alert("Piloto creado con éxito");
      setPiloto({ id: "", nombre: "", edad: "", nacionalidad: "" });
    } catch (error) {
      alert("Error al crear piloto");
    }
  };

  return (
    <div className="crear-piloto-container">
      <h2>Crear Piloto</h2>

      <div className="form-crear">
        <label>ID:</label>
        <input name="id" value={piloto.id} onChange={handleChange} />

        <label>Nombre:</label>
        <input name="nombre" value={piloto.nombre} onChange={handleChange} />

        <label>Edad:</label>
        <input name="edad" type="number" value={piloto.edad} onChange={handleChange} />

        <label>Nacionalidad:</label>
        <input name="nacionalidad" value={piloto.nacionalidad} onChange={handleChange} />

        <button onClick={crearPiloto}>Guardar</button>
      </div>
    </div>
  );
};

export default CrearPiloto;
