import React, { useState } from "react";
import "./AutCir.css";
import AutCirService from "../../Service/AutCirService";
import { useNavigate } from "react-router-dom";

 function AutCir() {
  const navigate = useNavigate();
  const [idCircuito, setIdCircuito] = useState("");
  const [placa, setPlaca] = useState("");

  const eliminar = async () => {
    try {
      await AutCirService.deleteAutCir(Number(idCircuito), placa.trim());
      alert("Registro Aut_Cir eliminado ");
      navigate("/lista-autcir");
    } catch {
      alert("No se pudo eliminar ");
    }
  };

  return (
    <div className="delete-container">
      <h2>Eliminar Aut_Cir</h2>
      <label>ID Circuito</label>
      <input
        type="number"
        value={idCircuito}
        onChange={(e) => setIdCircuito(e.target.value)}
      />
      <label>Placa</label>
      <input
        value={placa}
        onChange={(e) => setPlaca(e.target.value)}
      />
      <button className="btn-primary" onClick={eliminar}>Eliminar</button>
      <button className="btn-secondary" onClick={() => navigate("/lista-autcir")}>Regresar</button>
    </div>
  );
}

export default AutCir;
