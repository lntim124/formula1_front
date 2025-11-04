import React, { useState } from "react";
import EmpleadoService from "../../Service/EmpleadoService";
import "./Empleado.css";

const CrearEmpleado = ({ onChangeView }) => {
  const [form, setForm] = useState({
    fechaNacimiento: "",
    primerNombre: "",
    primerApellido: "",
    idNacionalidad: "",
    idEstado: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    EmpleadoService.saveEmpleado(form)
      .then(() => {
        alert("Empleado registrado correctamente");
        onChangeView("listar-empleado");
      })
      .catch(() => alert("Error creando empleado"));
  };

  const handleBack = () => {
    onChangeView("listar-empleado");
  };

  return (
    <div className="form-container">
      <h2>Registrar Empleado</h2>
      <form onSubmit={handleSubmit}>
        <input name="primerNombre" placeholder="Primer nombre" onChange={handleChange} required />
        <input name="primerApellido" placeholder="Primer apellido" onChange={handleChange} required />
        <input name="fechaNacimiento" type="date" onChange={handleChange} required />
        <input name="idNacionalidad" placeholder="ID Nacionalidad" onChange={handleChange} required />
        <button type="submit">Guardar</button>
        <button type="button" onClick={handleBack}>Regresar</button>
      </form>
    </div>
  );
};

export default CrearEmpleado;

