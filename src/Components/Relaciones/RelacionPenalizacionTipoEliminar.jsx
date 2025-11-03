import React, { useState } from "react";
import "./General.css";
import PenalizacionService from "../../Service/PenalizacionService";

export default function RelacionPenalizacionTipoEliminar() {
  const [form, setForm] = useState({ idPenalizacion: "", idTipo: "" });
  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const quitar = async () => {
    try {
      await PenalizacionService.quitarTipo(Number(form.idPenalizacion), Number(form.idTipo));
      alert("Tipo removido de la penalización ");
      setForm({ idPenalizacion:"", idTipo:"" });
    } catch { alert("No se pudo eliminar "); }
  };

  return (
    <div className="relation-container">
      <h2>Quitar Tipo de Penalización</h2>
      <label>ID Penalización</label>
      <input name="idPenalizacion" type="number" value={form.idPenalizacion} onChange={onChange} />
      <label>ID Tipo</label>
      <input name="idTipo" type="number" value={form.idTipo} onChange={onChange} />
      <button className="btn-danger" onClick={quitar}>Quitar</button>
    </div>
  );
}