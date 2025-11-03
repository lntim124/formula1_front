import React, { useState } from "react";
import "./EditarNacionalidad.css";
import NacionalidadService from "../../Service/NacionalidadService";
import { useNavigate } from "react-router-dom";

export default function EditarNacionalidad() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [loaded, setLoaded] = useState(false);

  // Buscar nacionalidad por ID
  const buscar = async () => {
    try {
      const res = await NacionalidadService.getNacionalidadById(Number(id));
      setNombre(res.data.nombre || "");
      setLoaded(true);
    } catch {
      alert("Nacionalidad no encontrada");
      setLoaded(false);
    }
  };

  // Guardar cambios
  const guardar = async () => {
    try {
      await NacionalidadService.updateNacionalidad(Number(id), {
        idNacionalidad: Number(id),
        nombre
      });
      alert("Nacionalidad actualizada correctamente");
      navigate("/lista-nacionalidades");
    } catch {
      alert("No se pudo actualizar la nacionalidad");
    }
  };

  return (
    <div className="edit-container">
      <h2>Editar Nacionalidad</h2>

      <div className="block">
        <label>ID</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <div className="buttons">
          <button className="btn btn-primary" onClick={buscar}>
            Cargar
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/lista-nacionalidades")}
          >
            Regresar
          </button>
        </div>
      </div>

      {loaded && (
        <div className="block">
          <label>Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <div className="buttons">
            <button className="btn btn-success" onClick={guardar}>
              Guardar cambios
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

