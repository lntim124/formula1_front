import React, { useState } from "react";
import "./Auto.css";
import AutoService from "../../Service/AutoService";
import { useNavigate } from "react-router-dom";

export default function EditarAuto() {
  const navigate = useNavigate();
  const [placa, setPlaca] = useState("");
  const [form, setForm] = useState({ numeroChasis:"", idMotor:"", fechaEstreno:"", idModelo:"" });
  const [loaded, setLoaded] = useState(false);

  const buscar = async () => {
    try {
      const res = await AutoService.getAutoByPlaca(placa.trim());
      setForm({
        numeroChasis: res.data.numeroChasis ?? "",
        idMotor: res.data.idMotor ?? "",
        fechaEstreno: (res.data.fechaEstreno || "").slice(0,10),
        idModelo: res.data.idModelo ?? "",
      });
      setLoaded(true);
    } catch {
      alert("No encontrado");
      setLoaded(false);
    }
  };

  const guardar = async () => {
    try {
      await AutoService.updateAuto(placa.trim(), {
        placa: placa.trim(),
        numeroChasis: form.numeroChasis.trim(),
        idMotor: Number(form.idMotor),
        fechaEstreno: form.fechaEstreno,
        idModelo: Number(form.idModelo),
      });
      alert("Actualizado ");
      navigate("/lista-auto");
    } catch {
      alert("No se pudo actualizar ");
    }
  };

  return (
    <div className="edit-container">
      <h2>Editar Auto</h2>

      <div className="block">
        <label>Placa</label>
        <input value={placa} onChange={e=>setPlaca(e.target.value)} />
        <div className="buttons">
          <button className="btn btn-primary" onClick={buscar}>Cargar</button>
          <button className="btn btn-secondary" onClick={()=>navigate("/lista-auto")}>Regresar</button>
        </div>
      </div>

      {loaded && (
        <div className="block">
          <div className="row">
            <div>
              <label>N° Chasis</label>
              <input value={form.numeroChasis} onChange={e=>setForm({...form, numeroChasis:e.target.value})}/>
            </div>
            <div>
              <label>ID Motor</label>
              <input value={form.idMotor} onChange={e=>setForm({...form, idMotor:e.target.value})} type="number"/>
            </div>
          </div>
          <div className="row">
            <div>
              <label>Fecha Estreno</label>
              <input value={form.fechaEstreno} onChange={e=>setForm({...form, fechaEstreno:e.target.value})} type="date"/>
            </div>
            <div>
              <label>ID Modelo</label>
              <input value={form.idModelo} onChange={e=>setForm({...form, idModelo:e.target.value})} type="number"/>
            </div>
          </div>
          <div className="buttons">
            <button className="btn btn-success" onClick={guardar}>Guardar cambios</button>
          </div>
        </div>
      )}
    </div>
  );
}