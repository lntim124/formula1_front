import React, { useState } from "react";
import "./AutTec.css";
import AutTecService from "../../Service/AutTecService";
import { useNavigate } from "react-router-dom";

 function AutTec() {
  const navigate = useNavigate();
  const [placa, setPlaca] = useState("");
  const [idTecnico, setIdTecnico] = useState("");

  const eliminar = async () => {
    try {
      await AutTecService.deleteAutTec(placa.trim(), Number(idTecnico));
      alert("Aut_Tec eliminado ✅");
      navigate("/lista-auttec");
    } catch {
      alert("No se pudo eliminar ❌");
    }
  };

  return (
    <div className="delete-container">
      <h2>Eliminar Aut_Tec</h2>
      <label>Placa</label>
      <input
        value={placa}
        onChange={(e) => setPlaca(e.target.value)}
      />
      <label>ID Técnico</label>
      <input
        type="number"
        value={idTecnico}
        onChange={(e) => setIdTecnico(e.target.value)}
      />
      <button className="btn-primary" onClick={eliminar}>Eliminar</button>
      <button className="btn-secondary" onClick={() => navigate("/lista-auttec")}>Regresar</button>
    </div>
  );
}

export default AutTec;
