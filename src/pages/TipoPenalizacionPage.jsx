import React, { useState } from "react";
import CrearTipoPenalizacion from "../Components/Crear/CrearTipoPenalizacion";
import BuscarTipoPenalizacion from "../Components/Buscar/BuscarTipoPenalizacion";
import ListarTipoPenalizacion from "../Components/Listar/ListarTipoPenalizacion";

export default function TipoPenalizacionPage() {
  const [view, setView] = useState("listar");

  return (
    <div className="tipo-penalizacion-page">
      <h1>Gestión de Tipos de Penalización</h1>

      <div className="botones-acciones">
        <button onClick={() => setView("crear")}>Crear</button>
        <button onClick={() => setView("buscar")}>Buscar</button>
        <button onClick={() => setView("listar")}>Listar</button>
      </div>

      {view === "crear" && <CrearTipoPenalizacion />}
      {view === "buscar" && <BuscarTipoPenalizacion />}
      {view === "listar" && <ListarTipoPenalizacion />}
    </div>
  );
}
