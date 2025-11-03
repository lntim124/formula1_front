import React, { useState } from "react";
import "./General.css";
import PilotoService from "../../Service/PilotoService";

export default function RelacionPilotoAutoAsignar() {
  const [form, setForm] = useState({ idPiloto: "", placaAuto: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const asignar = async () => {
    try {
      await PilotoService.asignarAuto(Number(form.idPiloto), form.placaAuto.trim());
      alert("Auto asignado al piloto");
      setForm({ idPiloto: "", placaAuto: "" });
    } catch (e) {
      console.error(e);
      alert("No se pudo asignar");
    }
  };

  return (
    <div className="relation-container">
      <h2>Asignar Auto a Piloto</h2>
      <label>ID Piloto</label>
      <input name="idPiloto" type="number" value={form.idPiloto} onChange={onChange} />
      <label>Placa del Auto</label>
      <input name="placaAuto" value={form.placaAuto} onChange={onChange} />
      <button className="btn-primary" onClick={asignar}>Asignar</button>
    </div>
  );
}