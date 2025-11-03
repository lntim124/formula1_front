import React, { useState } from "react";
import "./EliminarModelo.css";
import ModeloService from "../../Service/ModeloService";
import { useNavigate } from "react-router-dom";

export default function EliminarModelo() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [modelo, setModelo] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // Buscar modelo por ID
  const buscar = async () => {
    try {
      const res = await ModeloService.getModeloById(Number(id));
      setModelo(res.data);
      setLoaded(true);
    } catch {
      alert("Modelo no encontrado");
      setLoaded(false);
    }
  };

  // Eliminar modelo
  const eliminar = async () => {
    try {
      await ModeloService.deleteModelo(Number(id));
      alert("Modelo eliminado correctamente");
      navigate("/lista-modelos");
    } catch {
      alert("No se pudo eliminar el modelo");
    }
  };

  return (
    <div className="delete-container">
      <h2>Eliminar Modelo</h2>

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

      {loaded && modelo && (
        <div className="block">
          <p>
            <strong>Nombre:</strong> {modelo.nombre}
          </p>
          <p>
            <strong>Descripción:</strong> {modelo.descripcion}
          </p>
          <div className="buttons">
            <button className="btn btn-danger" onClick={eliminar}>
              Eliminar Modelo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
