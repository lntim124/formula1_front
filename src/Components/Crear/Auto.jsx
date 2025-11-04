import React, { useState } from "react";
import "./Auto.css";
import AutoService from "../../Service/AutoService";
import { useNavigate } from "react-router-dom";

const Auto = () => {
  const navigate = useNavigate();

  const [auto, setAuto] = useState({
    placa: "",
    numeroChasis: "",
    idMotor: "",
    fechaEstreno: "",
    idModelo: "",
  });

  const handleChange = (e) => {
    
    const { name, value } = e.target;
    
    setAuto({ ...auto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  AutoService.saveAuto({
      placa: auto.placa.trim(),
      numeroChasis: auto.numeroChasis.trim(),
      idmotor: Number(auto.idMotor),
      fechaEstreno: auto.fechaEstreno,
      idmodelo: Number(auto.idModelo),
    })
      .then((response) => {
        console.log("Auto guardado:", response.data);
        alert("Auto creado correctamente ");
        navigate("/listar-auto");
      })
      .catch((error) => {
        console.error("Error al guardar el auto", error);
        alert("No se pudo crear el auto ");
      });
  };

  const handleBack = () => {
    navigate("/listar-auto");
  };

  return (
    <div className="form-container">
      <h2 className="text-center">Registrar Auto</h2>

      <form onSubmit={handleSubmit} className="form">
        {[
          { label: "Placa", name: "placa", type: "text" },
          { label: "Número de Chasis", name: "numeroChasis", type: "text" },
          { label: "ID Motor", name: "idMotor", type: "number" },
          { label: "Fecha de Estreno", name: "fechaEstreno", type: "date" },
          { label: "ID Modelo", name: "idModelo", type: "number" },
        ].map((field, index) => (
          <div className="form-group" key={index}>
            <label htmlFor={field.name}>{field.label}</label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={auto[field.name]}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
        ))}

        <div className="button-container">
          <button type="submit" className="btn btn-primary">Guardar</button>
          <button type="button" className="btn btn-secondary" onClick={handleBack}>Regresar</button>
        </div>
      </form>
    </div>
  );
};

export default Auto;