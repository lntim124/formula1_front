import React, { useState } from "react";
import "./Carrera.css";
import CarreraService from "../../Service/CarreraService";
import { useNavigate } from "react-router-dom";

export default function EditarCarrera() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [form, setForm] = useState({ nombre:"", fecha:"", horaInicio:"", horaFin:"", idJefeEquipo:"", idCircuito:"" });
  const [loaded, setLoaded] = useState(false);

  const buscar = async () => {
    try {
      const res = await CarreraService.getCarreraById(Number(id));
      setForm({
        nombre: res.data.nombre ?? "",
        fecha: (res.data.fecha || "").slice(0,10),
        horaInicio: (res.data.horaInicio || "").slice(0,5),
        horaFin: (res.data.horaFin || "").slice(0,5),
        idJefeEquipo: res.data.idJefeEquipo ?? "",
        idCircuito: res.data.idCircuito ?? "",
      });
      setLoaded(true);
    } catch {
      alert("No encontrada");
      setLoaded(false);
    }
  };

  const guardar = async () => {
    try {
      await CarreraService.updateCarrera(Number(id), {
        idCarrera: Number(id),
        nombre: form.nombre.trim(),
        fecha: form.fecha,
        horaInicio: form.horaInicio ? `${form.horaInicio}:00` : "",
        horaFin: form.horaFin ? `${form.horaFin}:00` : "",
        idJefeEquipo: Number(form.idJefeEquipo),
        idCircuito: Number(form.idCircuito),
      });
      alert("Actualizada ");
      navigate("/lista-carrera");
    } catch {
      alert("No se pudo actualizar ");
    }
  };

  return (
    <div className="edit-container">
      <h2>Editar Carrera</h2>

      <div className="block">
        <label>ID</label>
        <input value={id} onChange={e=>setId(e.target.value)} type="number"/>
        <div className="buttons">
          <button className="btn btn-primary" onClick={buscar}>Cargar</button>
          <button className="btn btn-secondary" onClick={()=>navigate("/lista-carrera")}>Regresar</button>
        </div>
      </div>

      {loaded && (
        <div className="block">
          <div className="row">
            <div><label>Nombre</label><input value={form.nombre} onChange={e=>setForm({...form, nombre:e.target.value})}/></div>
          </div>
          <div className="row">
            <div><label>Fecha</label><input type="date" value={form.fecha} onChange={e=>setForm({...form, fecha:e.target.value})}/></div>
            <div><label>Hora Inicio</label><input type="time" value={form.horaInicio} onChange={e=>setForm({...form, horaInicio:e.target.value})}/></div>
            <div><label>Hora Fin</label><input type="time" value={form.horaFin} onChange={e=>setForm({...form, horaFin:e.target.value})}/></div>
          </div>
          <div className="row">
            <div><label>ID Jefe Equipo</label><input type="number" value={form.idJefeEquipo} onChange={e=>setForm({...form, idJefeEquipo:e.target.value})}/></div>
            <div><label>ID Circuito</label><input type="number" value={form.idCircuito} onChange={e=>setForm({...form, idCircuito:e.target.value})}/></div>
          </div>
          <div className="buttons">
            <button className="btn btn-success" onClick={guardar}>Guardar cambios</button>
          </div>
        </div>
      )}
    </div>
  );
}