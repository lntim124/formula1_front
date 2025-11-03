import React, { useState } from "react";
import "./General.css";
import PenalizacionService from "../../Service/PenalizacionService";

 function RelacionPenalizacionPilotoAsignar() {
  const [form, setForm] = useState({
    idPiloto: "",
    idPenalizacion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const asignar = async () => {
    try {
      // Llama al método del service → POST /penalizacion/asignar-a-piloto
      await PenalizacionService.asignarAPiloto(
        Number(form.idPiloto),
        Number(form.idPenalizacion)
      );
      alert(" Penalización asignada correctamente al piloto");
      setForm({ idPiloto: "", idPenalizacion: "" }); // limpia el formulario
    } catch (error) {
      console.error("Error asignando penalización:", error);
      alert(" No se pudo asignar la penalización");
    }
  };

  return (
    <div className="relation-container">
      <h2>Asignar Penalización a Piloto</h2>
      <label>ID Piloto</label>
      <input
        type="number"
        name="idPiloto"
        value={form.idPiloto}
        onChange={handleChange}
        placeholder="Ej: 1"
      />

      <label>ID Penalización</label>
      <input
        type="number"
        name="idPenalizacion"
        value={form.idPenalizacion}
        onChange={handleChange}
        placeholder="Ej: 5"
      />

      <button className="btn-primary" onClick={asignar}>
        Asignar
      </button>
    </div>
  );
}
export default RelacionPenalizacionPilotoAsignar;