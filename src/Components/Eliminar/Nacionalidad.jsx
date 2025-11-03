import React, { useState } from "react";
import "./Nacionalidad.css";
import NacionalidadService from "../../Service/NacionalidadService";
import { useNavigate } from "react-router-dom";

export default function EliminarNacionalidad() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [nacionalidad, setNacionalidad] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // Buscar nacionalidad por ID
  const buscar = async () => {
    try {
      const res = await NacionalidadService.getNacionalidadById(Number(id));
      setNacionalidad(res.data);
      setLoaded(true);
    } catch {
      alert("Nacionalidad no encontrada");
      setLoaded(false);
    }
  };

  // Eliminar nacionalidad
  const eliminar = async () => {
    try {
      await NacionalidadService.deleteNacionalidad(Number(id));
      alert("Nacionalidad eliminada correctamente");
      navigate("/lista-nacionalidades");
    } catch {
      alert("No se pudo eliminar la nacionalidad");
    }
  };

  return (
    <div className="delete-container">
      <h2>Eliminar Nacionalidad</h2>

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

      {loaded && nacionalidad && (
        <div className="block">
          <p><strong>Nombre:</strong> {nacionalidad.nombre}</p>
          <div className="buttons">
            <button className="btn btn-danger" onClick={eliminar}>
              Eliminar Nacionalidad
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
