import React, { useState } from "react";
import "./General.css";
import TecnicoService from "../../Service/TecnicoService";

export default function RelacionTecnicoEspecialidadEliminar() {
  const [form, setForm] = useState({ idTecnico: "", idEspecialidad: "" });
  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const quitar = async () => {
    try {
      await TecnicoService.eliminarEspecialidad(Number(form.idTecnico), Number(form.idEspecialidad));
      alert("Especialidad removida ");
      setForm({ idTecnico: "", idEspecialidad: "" });
    } catch {
      alert("No se pudo eliminar ");
    }
  };

  return (
    <div className="relation-container">
      <h2>Quitar Especialidad de Técnico</h2>
      <label>ID Técnico</label>
      <input name="idTecnico" type="number" value={form.idTecnico} onChange={onChange} />
      <label>ID Especialidad</label>
      <input name="idEspecialidad" type="number" value={form.idEspecialidad} onChange={onChange} />
      <button className="btn-danger" onClick={quitar}>Quitar</button>
    </div>
  );
}