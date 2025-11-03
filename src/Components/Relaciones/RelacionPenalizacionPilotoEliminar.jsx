import React, { useState } from "react";
import "./Relaciones/General.css";
import PenalizacionService from "../../Service/PenalizacionService";

export default function RelacionPenalizacionPilotoEliminar() {
  const [form, setForm] = useState({ idPiloto: "", idPenalizacion: "" });
  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const quitar = async () => {
    try {
      await PenalizacionService.eliminarDePiloto(Number(form.idPiloto), Number(form.idPenalizacion));
      alert("Penalización removida del piloto ");
      setForm({ idPiloto: "", idPenalizacion: "" });
    } catch { alert("No se pudo eliminar "); }
  };

  return (
    <div className="relation-container">
      <h2>Quitar Penalización de Piloto</h2>
      <label>ID Piloto</label>
      <input name="idPiloto" type="number" value={form.idPiloto} onChange={onChange} />
      <label>ID Penalización</label>
      <input name="idPenalizacion" type="number" value={form.idPenalizacion} onChange={onChange} />
      <button className="btn-danger" onClick={quitar}>Quitar</button>
    </div>
  );
}