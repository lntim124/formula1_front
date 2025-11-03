import React, { useState } from "react";
import "./Editar.css";
import AutTecService from "../../Service/AutTecService";
import { useNavigate } from "react-router-dom";

export default function EditarAutTec() {
  const navigate = useNavigate();
  const [keys, setKeys] = useState({ placa: "", idTecnico: "" });
  const [form, setForm] = useState({ idServicio:"", horaEntrada:"", horaSalida:"" });
  const [loaded, setLoaded] = useState(false);

  const buscar = async () => {
    try {
      const res = await AutTecService.getAutTecById(keys.placa.trim(), Number(keys.idTecnico));
      setForm({
        idServicio: res.data.idServicio ?? "",
        horaEntrada: (res.data.horaEntrada || "").slice(0,5),
        horaSalida: (res.data.horaSalida || "").slice(0,5),
      });
      setLoaded(true);
    } catch {
      alert("No encontrado");
      setLoaded(false);
    }
  };

  const guardar = async () => {
    try {
      await AutTecService.updateAutTec({
        placa: keys.placa.trim(),
        idTecnico: Number(keys.idTecnico),
        idServicio: Number(form.idServicio),
        horaEntrada: form.horaEntrada ? `${form.horaEntrada}:00` : "",
        horaSalida: form.horaSalida ? `${form.horaSalida}:00` : "",
      });
      alert("Actualizado ");
      navigate("/lista-auttec");
    } catch {
      alert("No se pudo actualizar ");
    }
  };

  return (
    <div className="edit-container">
      <h2>Editar Aut_Tec</h2>

      <div className="block">
        <div className="row">
          <div>
            <label>Placa</label>
            <input value={keys.placa} onChange={e=>setKeys({...keys, placa:e.target.value})}/>
          </div>
          <div>
            <label>ID Técnico</label>
            <input value={keys.idTecnico} onChange={e=>setKeys({...keys, idTecnico:e.target.value})} type="number"/>
          </div>
        </div>
        <div className="buttons">
          <button className="btn btn-primary" onClick={buscar}>Cargar</button>
          <button className="btn btn-secondary" onClick={()=>navigate("/lista-auttec")}>Regresar</button>
        </div>
      </div>

      {loaded && (
        <div className="block">
          <div className="row">
            <div>
              <label>ID Servicio</label>
              <input value={form.idServicio} onChange={e=>setForm({...form, idServicio:e.target.value})} type="number"/>
            </div>
            <div>
              <label>Hora Entrada</label>
              <input value={form.horaEntrada} onChange={e=>setForm({...form, horaEntrada:e.target.value})} type="time"/>
            </div>
            <div>
              <label>Hora Salida</label>
              <input value={form.horaSalida} onChange={e=>setForm({...form, horaSalida:e.target.value})} type="time"/>
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