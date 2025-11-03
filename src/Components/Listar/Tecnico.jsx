import React, { useEffect, useState } from "react";
import TecnicoService from "../service/TecnicoService";
import "./Tecnico.css";
import { useNavigate } from "react-router-dom";

const Tecnico = () => {
  const [tecnicos, setTecnicos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    TecnicoService.listar()
      .then((data) => setTecnicos(data))
      .catch((error) => console.error("Error al listar técnicos:", error));
  }, []);

  return (
    <div className="listar-tecnico-container">
      <h2>Lista de Técnicos</h2>
      <button className="btn-nuevo" onClick={() => navigate("/crear-tecnico")}>
        Nuevo Técnico
      </button>

      <table className="tabla-tecnicos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Experiencia</th>
          </tr>
        </thead>
        <tbody>
          {tecnicos.length > 0 ? (
            tecnicos.map((t) => (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.nombre}</td>
                <td>{t.aniosExperiencia}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No hay técnicos registrados</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Tecnico;
