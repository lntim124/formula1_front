import React, { useState } from "react";
import "./Relaciones/General.css";
import PenalizacionService from "../../Service/PenalizacionService";

export default function RelacionPenalizacionCarreraEliminar() {
  const [form, setForm] = useState({ idCarrera: "", idPenalizacion: "" });
  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const quitar = async () => {
    try {
      await PenalizacionService.eliminarDeCarrera(Number(form.idCarrera), Number(form.idPenalizacion));
      alert("Penalización removida de la carrera ");
      setForm({ idCarrera: "", idPenalizacion: "" });
    } catch { alert("No se pudo eliminar "); }
  };

  return (
    <div className="relation-container">
      <h2>Quitar Penalización de Carrera</h2>
      <label>ID Carrera</label>
      <input name="idCarrera" type="number" value={form.idCarrera} onChange={onChange} />
      <label>ID Penalización</label>
      <input name="idPenalizacion" type="number" value={form.idPenalizacion} onChange={onChange} />
      <button className="btn-danger" onClick={quitar}>Quitar</button>
    </div>
  );
}