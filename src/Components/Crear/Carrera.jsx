import React, { useState } from "react";
import "./Carrera.css";
import CarreraService from "../../Service/CarreraService";
import { useNavigate } from "react-router-dom";

const Carrera = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    fecha: "",        // DATE -> "YYYY-MM-DD"
    horaInicio: "",   // TIME -> "HH:MM"
    horaFin: "",      // TIME -> "HH:MM"
    idJefeEquipo: "",
    idCircuito: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // El backend espera TIME; enviamos "HH:MM:SS"
    const payload = {
      nombre: form.nombre.trim(),
      fecha: form.fecha,
      horaInicio: form.horaInicio ? `${form.horaInicio}:00` : "",
      horaFin: form.horaFin ? `${form.horaFin}:00` : "",
      idJefeEquipo: Number(form.idJefeEquipo),
      idCircuito: Number(form.idCircuito),
    };

    CarreraService.saveCarrera(payload)
      .then((res) => {
        console.log("Carrera creada:", res.data);
        alert("Carrera creada");
        navigate("/lista-carrera"); // ajusta a tu ruta de listado
      })
      .catch((err) => {
        console.error(err);
        alert("No se pudo crear la carrera ");
      });
  };

  const onBack = () => navigate("/lista-carrera");

  const fields = [
    { label: "Nombre", name: "nombre", type: "text" },
    { label: "Fecha", name: "fecha", type: "date" },
    { label: "Hora Inicio", name: "horaInicio", type: "time" },
    { label: "Hora Fin", name: "horaFin", type: "time" },
    { label: "ID Jefe de Equipo", name: "idJefeEquipo", type: "number" },
    { label: "ID Circuito", name: "idCircuito", type: "number" },
  ];

  return (
    <div className="form-container">
      <h2 className="text-center">Crear Carrera</h2>
      <form onSubmit={onSubmit} className="form">
        {fields.map((f, i) => (
          <div className="form-group" key={i}>
            <label htmlFor={f.name}>{f.label}</label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              value={form[f.name]}
              onChange={onChange}
              required
              className="form-control"
            />
          </div>
        ))}
        <div className="button-container">
          <button type="submit" className="btn btn-primary">Guardar</button>
          <button type="button" className="btn btn-secondary" onClick={onBack}>Regresar</button>
        </div>
      </form>
    </div>
  );
};

export default Carrera;