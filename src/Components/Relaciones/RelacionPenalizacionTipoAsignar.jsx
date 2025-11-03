import React, { useState } from "react";
import "./General.css";
import PenalizacionService from "../../Service/PenalizacionService";

 function RelacionPenalizacionTipoAsignar() {
  const [form, setForm] = useState({
    idPenalizacion: "",
    idTipoPenalizacion: "",
    nombre: "",
    descripcion: ""
  });

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const asignar = async () => {
    try {
      await PenalizacionService.asignarTipo(Number(form.idPenalizacion), {
        idTipoPenalizacion: Number(form.idTipoPenalizacion),
        nombre: form.nombre.trim(),
        descripcion: form.descripcion.trim()
      });
      alert("Tipo asignado a la penalización ");
      setForm({ idPenalizacion:"", idTipoPenalizacion:"", nombre:"", descripcion:"" });
    } catch { alert("No se pudo asignar "); }
  };

  return (
    <div className="relation-container">
      <h2>Asignar Tipo a Penalización</h2>
      <label>ID Penalización</label>
      <input name="idPenalizacion" type="number" value={form.idPenalizacion} onChange={onChange} />
      <label>ID Tipo Penalización</label>
      <input name="idTipoPenalizacion" type="number" value={form.idTipoPenalizacion} onChange={onChange} />
      <label>Nombre del Tipo</label>
      <input name="nombre" value={form.nombre} onChange={onChange} />
      <label>Descripción</label>
      <input name="descripcion" value={form.descripcion} onChange={onChange} />
      <button className="btn-primary" onClick={asignar}>Asignar</button>
    </div>
  );
}
export default RelacionPenalizacionTipoAsignar;