import React, { useState } from "react";
import "./Empleado.css";
import EmpleadoService from "../../Service/EmpleadoService";
import { useNavigate } from "react-router-dom";

const Empleado = () => {
  const navigate = useNavigate();
  const irAListar = () => navigate("/listar-empleado");

  const [form, setForm] = useState({
    fechaNacimiento: "",
    primerNombre: "",
    primerApellido: "",
    idNacionalidad: "",
    idEstado: 1, // 1 = ACTIVO por defecto
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      fechaNacimiento: form.fechaNacimiento,
      primerNombre: form.primerNombre.trim(),
      primerApellido: form.primerApellido.trim(),
      idNacionalidad: Number(form.idNacionalidad),
      idEstado: Number(form.idEstado),
    };

    EmpleadoService.saveEmpleado(payload)
      .then((res) => {
        console.log("Empleado creado:", res.data);
        alert("Empleado registrado ");
        navigate("/dashboard"); // ajusta a tu ruta real
      })
      .catch((err) => {
        console.error(err);
        alert("No se pudo crear el empleado ");
      });
  };

  const handleBack = () =>{
    console.log("lina")
     navigate("/dashboard");
    }


  const fields = [
    { label: "Fecha de Nacimiento", name: "fechaNacimiento", type: "date" },
    { label: "Primer Nombre", name: "primerNombre", type: "text" },
    { label: "Primer Apellido", name: "primerApellido", type: "text" },
    { label: "ID Nacionalidad", name: "idNacionalidad", type: "number" },
    { label: "ID Estado (1 = Activo / 2 = Inactivo)", name: "idEstado", type: "number" },
  ];

  return (
    <div className="form-container">
      <h2 className="text-center">Registrar Empleado</h2>
      <form onSubmit={handleSubmit} className="form">
        {fields.map((f, i) => (
          <div className="form-group" key={i}>
            <label htmlFor={f.name}>{f.label}</label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              value={form[f.name]}
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

export default Empleado;