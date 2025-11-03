import React, { useState } from "react";
import "./Modelo.css";
import ModeloService from "../../Service/ModeloService";
import { useNavigate } from "react-router-dom";

export default function EditarModelo() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [loaded, setLoaded] = useState(false);

  // Buscar modelo por ID
  const buscar = async () => {
    try {
      const res = await ModeloService.getModeloById(Number(id));
      setNombre(res.data.nombre || "");
      setDescripcion(res.data.descripcion || "");
      setLoaded(true);
    } catch {
      alert("Modelo no encontrado");
      setLoaded(false);
    }
  };

  // Guardar cambios
  const guardar = async () => {
    try {
      await ModeloService.updateModelo(Number(id), {
        idModelo: Number(id),
        nombre,
        descripcion
      });
      alert("Modelo actualizado correctamente");
      navigate("/lista-modelos");
    } catch {
      alert("No se pudo actualizar el modelo");
    }
  };

  return (
    <div className="edit-container">
      <h2>Editar Modelo</h2>

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
            onClick={() => navigate("/lista-modelos")}
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
          <label>Descripción</label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
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
