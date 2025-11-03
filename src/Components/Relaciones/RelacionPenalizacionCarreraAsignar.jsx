import React, { useState } from "react";
import "./Relaciones/General.css";
import PenalizacionService from "../../Service/PenalizacionService";

export default function RelacionPenalizacionCarreraAsignar() {
  const [form, setForm] = useState({ idCarrera: "", idPenalizacion: "" });
  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const asignar = async () => {
    try {
      await PenalizacionService.asignarACarrera(Number(form.idCarrera), Number(form.idPenalizacion));
      alert("Penalización asignada a la carrera ");
      setForm({ idCarrera: "", idPenalizacion: "" });
    } catch { alert("No se pudo asignar "); }
  };

  return (
    <div className="relation-container">
      <h2>Asignar Penalización a Carrera</h2>
      <label>ID Carrera</label>
      <input name="idCarrera" type="number" value={form.idCarrera} onChange={onChange} />
      <label>ID Penalización</label>
      <input name="idPenalizacion" type="number" value={form.idPenalizacion} onChange={onChange} />
      <button className="btn-primary" onClick={asignar}>Asignar</button>
    </div>
  );
}