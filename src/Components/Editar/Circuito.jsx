import React, { useState } from "react";
import "./Circuito.css";
import CircuitoService from "../../Service/CircuitoService";
import { useNavigate } from "react-router-dom";

export default function EditarCircuito() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [form, setForm] = useState({ nombre:"", numVueltas:"" });
  const [loaded, setLoaded] = useState(false);

  const buscar = async () => {
    try {
      const res = await CircuitoService.getCircuitoById(Number(id));
      setForm({
        nombre: res.data.nombre ?? "",
        numVueltas: res.data.numVueltas ?? res.data.num_Vuelta ?? "",
      });
      setLoaded(true);
    } catch {
      alert("No encontrado");
      setLoaded(false);
    }
  };

  const guardar = async () => {
    try {
      await CircuitoService.updateCircuito(Number(id), {
        idCircuito: Number(id),
        nombre: form.nombre.trim(),
        numVueltas: Number(form.numVueltas),
      });
      alert("Actualizado ");
      navigate("/lista-circuito");
    } catch {
      alert("No se pudo actualizar ");
    }
  };

  return (
    <div className="edit-container">
      <h2>Editar Circuito</h2>

      <div className="block">
        <label>ID</label>
        <input value={id} onChange={e=>setId(e.target.value)} type="number"/>
        <div className="buttons">
          <button className="btn btn-primary" onClick={buscar}>Cargar</button>
          <button className="btn btn-secondary" onClick={()=>navigate("/lista-circuito")}>Regresar</button>
        </div>
      </div>

      {loaded && (
        <div className="block">
          <div className="row">
            <div><label>Nombre</label><input value={form.nombre} onChange={e=>setForm({...form, nombre:e.target.value})}/></div>
            <div><label>N° Vueltas</label><input type="number" value={form.numVueltas} onChange={e=>setForm({...form, numVueltas:e.target.value})}/></div>
          </div>
          <div className="buttons">
            <button className="btn btn-success" onClick={guardar}>Guardar cambios</button>
          </div>
        </div>
      )}
    </div>
  );
}