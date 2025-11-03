import React, { useState } from "react";
import "./AutCir.css";
import AutCirService from "../../Service/AutCirService";
import { useNavigate } from "react-router-dom";

const CrearAutCir = () => {
  const navigate = useNavigate();

  // Estado inicial del formulario
  const [autCir, setAutCir] = useState({
    idCircuito: "",
    placa: "",
    velocidad: "",
  });

  // Maneja los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAutCir({ ...autCir, [name]: value });
  };

  // Envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    AutCirService.saveAutCir({
      idCircuito: Number(autCir.idCircuito),
      placa: autCir.placa.trim(),
      velocidad: Number(autCir.velocidad),
    })
      .then((response) => {
        console.log("Aut_Cir guardado:", response.data);
        alert("Registro creado correctamente");
        navigate("/lista-autcir"); // Ajusta la ruta si tu lista tiene otro nombre
      })
      .catch((error) => {
        console.error("Error al guardar Aut_Cir:", error);
        alert("Error al guardar el registro");
      });
  };

  // Botón para volver
  const handleBack = () => {
    navigate("/lista-autcir"); // Ajusta a tu ruta real
  };

  return (
    <div className="form-container">
      <h2 className="text-center">Agregar Aut_Cir</h2>

      <form onSubmit={handleSubmit} className="form">
        {[
          { label: "ID Circuito", name: "idCircuito", type: "number" },
          { label: "Placa", name: "placa", type: "text" },
          { label: "Velocidad (km/h)", name: "velocidad", type: "number", step: "0.01" },
        ].map((field, index) => (
          <div className="form-group" key={index}>
            <label htmlFor={field.name}>{field.label}</label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              step={field.step || ""}
              value={autCir[field.name]}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
        ))}

        <div className="button-container">
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleBack}>
            Regresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrearAutCir;