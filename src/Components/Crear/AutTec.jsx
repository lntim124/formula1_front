import React, { useState } from "react";
import "./AutTec.css";
import AutTecService from "../../Service/AutTecService";
import { useNavigate } from "react-router-dom";

const AutTec = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    placa: "",
    idTecnico: "",
    idServicio: "",
    horaEntrada: "", // input type="time" → "HH:MM"
    horaSalida: "",  // input type="time" → "HH:MM"
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await AutTecService.saveAutTec({
        placa: form.placa.trim(),
        idTecnico: Number(form.idTecnico),
        idServicio: Number(form.idServicio),
        // Tu tabla usa TIME → enviamos "HH:MM:SS"
        horaEntrada: form.horaEntrada ? `${form.horaEntrada}:00` : "",
        horaSalida: form.horaSalida ? `${form.horaSalida}:00` : "",
      });
      alert("Relación Aut_Tec creada");
      navigate("/lista-auttec"); // ajusta a tu ruta real de listado
    } catch (err) {
      console.error(err);
      alert("No se pudo crear la relación");
    }
  };

  const onBack = () => navigate("/lista-auttec");

  const fields = [
    { label: "Placa", name: "placa", type: "text" },
    { label: "ID Técnico", name: "idTecnico", type: "number" },
    { label: "ID Servicio", name: "idServicio", type: "number" },
    { label: "Hora Entrada", name: "horaEntrada", type: "time" },
    { label: "Hora Salida", name: "horaSalida", type: "time" },
  ];

  return (
    <div className="form-container">
      <h2 className="text-center">Registrar Aut_Tec</h2>
      <form className="form" onSubmit={onSubmit}>
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

export default AutTec;