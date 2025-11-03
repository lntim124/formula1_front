import React, { useState } from "react";
import "./Relaciones/General.css";
import TecnicoService from "../../Service/TecnicoService";

export default function RelacionTecnicoEspecialidadAsignar() {
  const [form, setForm] = useState({ idTecnico: "", idEspecialidad: "" });
  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const asignar = async () => {
    try {
      await TecnicoService.asignarEspecialidad(Number(form.idTecnico), Number(form.idEspecialidad));
      alert("Especialidad asignada ");
      setForm({ idTecnico: "", idEspecialidad: "" });
    } catch {
      alert("No se pudo asignar ");
    }
  };

  return (
    <div className="relation-container">
      <h2>Asignar Especialidad a Técnico</h2>
      <label>ID Técnico</label>
      <input name="idTecnico" type="number" value={form.idTecnico} onChange={onChange} />
      <label>ID Especialidad</label>
      <input name="idEspecialidad" type="number" value={form.idEspecialidad} onChange={onChange} />
      <button className="btn-primary" onClick={asignar}>Asignar</button>
    </div>
  );
}