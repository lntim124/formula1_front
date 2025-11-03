import React, { useState } from "react";
import "./Relaciones/General.css";
import PilotoService from "../../Service/PilotoService";

export default function RelacionPilotoAutoEliminar() {
  const [form, setForm] = useState({ idPiloto: "", placaAuto: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const quitar = async () => {
    try {
      await PilotoService.eliminarAuto(Number(form.idPiloto), form.placaAuto.trim());
      alert("Auto removido del piloto ");
      setForm({ idPiloto: "", placaAuto: "" });
    } catch (e) {
      console.error(e);
      alert("No se pudo eliminar ");
    }
  };

  return (
    <div className="relation-container">
      <h2>Quitar Auto de Piloto</h2>
      <label>ID Piloto</label>
      <input name="idPiloto" type="number" value={form.idPiloto} onChange={onChange} />
      <label>Placa del Auto</label>
      <input name="placaAuto" value={form.placaAuto} onChange={onChange} />
      <button className="btn-danger" onClick={quitar}>Quitar</button>
    </div>
  );
}