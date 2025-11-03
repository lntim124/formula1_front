import React, { useState } from "react";
import "./Editar.css";
import AutCirService from "../../Service/AutCirService";
import { useNavigate } from "react-router-dom";

export default function EditarAutCir() {
  const navigate = useNavigate();
  const [keys, setKeys] = useState({ idCircuito: "", placa: "" });
  const [form, setForm] = useState({ velocidad: "" });
  const [loaded, setLoaded] = useState(false);

  const buscar = async () => {
    try {
      const res = await AutCirService.getAutCirById(Number(keys.idCircuito), keys.placa.trim());
      setForm({ velocidad: res.data.velocidad ?? "" });
      setLoaded(true);
    } catch {
      alert("No encontrado");
      setLoaded(false);
    }
  };

  const guardar = async () => {
    try {
      await AutCirService.updateAutCir({
        idCircuito: Number(keys.idCircuito),
        placa: keys.placa.trim(),
        velocidad: Number(form.velocidad),
      });
      alert("Actualizado ");
      navigate("/lista-autcir");
    } catch {
      alert("No se pudo actualizar ");
    }
  };

  return (
    <div className="edit-container">
      <h2>Editar Aut_Cir</h2>

      <div className="block">
        <div className="row">
          <div>
            <label>ID Circuito</label>
            <input value={keys.idCircuito} onChange={e=>setKeys({...keys, idCircuito:e.target.value})} type="number"/>
          </div>
          <div>
            <label>Placa</label>
            <input value={keys.placa} onChange={e=>setKeys({...keys, placa:e.target.value})}/>
          </div>
        </div>
        <div className="buttons">
          <button className="btn btn-primary" onClick={buscar}>Cargar</button>
          <button className="btn btn-secondary" onClick={()=>navigate("/lista-autcir")}>Regresar</button>
        </div>
      </div>

      {loaded && (
        <div className="block">
          <label>Velocidad (km/h)</label>
          <input value={form.velocidad} onChange={e=>setForm({velocidad:e.target.value})} type="number" step="0.01"/>
          <div className="buttons">
            <button className="btn btn-success" onClick={guardar}>Guardar cambios</button>
          </div>
        </div>
      )}
    </div>
  );
}