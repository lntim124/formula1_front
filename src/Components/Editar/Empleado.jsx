import React, { useState } from "react";
import "./Empleado.css";
import EmpleadoService from "../../Service/EmpleadoService";
import { useNavigate } from "react-router-dom";

export default function EditarEmpleado() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [form, setForm] = useState({ fechaNacimiento:"", primerNombre:"", primerApellido:"", idNacionalidad:"", idEstado:"" });
  const [loaded, setLoaded] = useState(false);

  const buscar = async () => {
    try {
      const res = await EmpleadoService.getEmpleadoById(Number(id));
      setForm({
        fechaNacimiento: (res.data.fechaNacimiento || "").slice(0,10),
        primerNombre: res.data.primerNombre ?? "",
        primerApellido: res.data.primerApellido ?? "",
        idNacionalidad: res.data.idNacionalidad ?? "",
        idEstado: res.data.idEstado ?? "",
      });
      setLoaded(true);
    } catch {
      alert("No encontrado");
      setLoaded(false);
    }
  };

  const guardar = async () => {
    try {
      await EmpleadoService.updateEmpleado(Number(id), {
        id: Number(id),
        fechaNacimiento: form.fechaNacimiento,
        primerNombre: form.primerNombre.trim(),
        primerApellido: form.primerApellido.trim(),
        idNacionalidad: Number(form.idNacionalidad),
        idEstado: Number(form.idEstado),
      });
      alert("Actualizado ");
      navigate("/lista-empleado");
    } catch {
      alert("No se pudo actualizar ");
    }
  };

  return (
    <div className="edit-container">
      <h2>Editar Empleado</h2>

      <div className="block">
        <label>ID</label>
        <input value={id} onChange={e=>setId(e.target.value)} type="number"/>
        <div className="buttons">
          <button className="btn btn-primary" onClick={buscar}>Cargar</button>
          <button className="btn btn-secondary" onClick={()=>navigate("/lista-empleado")}>Regresar</button>
        </div>
      </div>

      {loaded && (
        <div className="block">
          <div className="row">
            <div><label>Fecha Nacimiento</label><input type="date" value={form.fechaNacimiento} onChange={e=>setForm({...form, fechaNacimiento:e.target.value})}/></div>
            <div><label>Primer Nombre</label><input value={form.primerNombre} onChange={e=>setForm({...form, primerNombre:e.target.value})}/></div>
            <div><label>Primer Apellido</label><input value={form.primerApellido} onChange={e=>setForm({...form, primerApellido:e.target.value})}/></div>
          </div>
          <div className="row">
            <div><label>ID Nacionalidad</label><input type="number" value={form.idNacionalidad} onChange={e=>setForm({...form, idNacionalidad:e.target.value})}/></div>
            <div><label>ID Estado</label><input type="number" value={form.idEstado} onChange={e=>setForm({...form, idEstado:e.target.value})}/></div>
          </div>
          <div className="buttons">
            <button className="btn btn-success" onClick={guardar}>Guardar cambios</button>
          </div>
        </div>
      )}
    </div>
  );
}