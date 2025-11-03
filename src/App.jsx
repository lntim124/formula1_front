import "./index.css";
import "./App.css";

import { Routes, Route } from "react-router-dom";

// Pages
import Welcome from "./pages/Welcome.jsx";
import Principal from "./pages/Principal.jsx";

// Crear Components
import AutCir from "./Components/Crear/AutCir.jsx";
import AutTec from "./Components/Crear/AutTec.jsx";
import Auto from "./Components/Crear/Auto.jsx";
import Carrera from "./Components/Crear/Carrera.jsx";
import Circuito from "./Components/Crear/Circuito.jsx";
import Empleado from "./Components/Crear/Empleado.jsx";
import Especialidad from "./Components/Crear/Especialidad.jsx";
import Estado from "./Components/Crear/Estado.jsx";
import JefeEquipo from "./Components/Crear/JefeEquipo.jsx";
import CrearModelo from "./Components/Crear/Modelo.jsx";
import CrearMotor from "./Components/Crear/Motor.jsx";
import CrearNacionalidad from "./Components/Crear/Nacionalidad.jsx";
import CrearPenalizacion from "./Components/Crear/Penalizacion.jsx";
import CrearPilCarr from "./Components/Crear/PilCarr.jsx";
import CrearPiloto from "./Components/Crear/Piloto.jsx";
import CrearServicio from "./Components/Crear/Servicio.jsx";
import CrearTecnico from "./Components/Crear/Tecnico.jsx";
import CrearTipoPenalizacion from "./Components/Crear/TipoPenalizacion.jsx";

// Editar Components
import EditarAutCir from "./Components/Editar/AutCir.jsx";
import EditarAutTec from "./Components/Editar/AutTec.jsx";
import EditarAuto from "./Components/Editar/Auto.jsx";
import EditarCarrera from "./Components/Editar/Carrera.jsx";
import EditarCircuito from "./Components/Editar/Circuito.jsx";
import EditarEmpleado from "./Components/Editar/Empleado.jsx";
import EditarEspecialidad from "./Components/Editar/Especialidad.jsx";
import EditarEstado from "./Components/Editar/Estado.jsx";
import EditarJefeEquipo from "./Components/Editar/JefeEquipo.jsx";
import EditarModelo from "./Components/Editar/Modelo.jsx";
import EditarMotor from "./Components/Editar/Motor.jsx";
import EditarNacionalidad from "./Components/Editar/Nacionalidad.jsx";
import EditarPenalizacion from "./Components/Editar/Penalizacion.jsx";
import EditarPilCarr from "./Components/Editar/PilCarr.jsx";
import EditarPiloto from "./Components/Editar/Piloto.jsx";
import EditarServicio from "./Components/Editar/Servicio.jsx";
import EditarTecnico from "./Components/Editar/Tecnico.jsx";
import EditarTipoPenalizacion from "./Components/Editar/TipoPenalizacion.jsx";

// Eliminar Components
import EliminarAutCir from "./Components/Eliminar/AutCir.jsx";
import EliminarAutTec from "./Components/Eliminar/AutTec.jsx";
import EliminarAuto from "./Components/Eliminar/Auto.jsx";
import EliminarCarrera from "./Components/Eliminar/Carrera.jsx";
import EliminarCircuito from "./Components/Eliminar/Circuito.jsx";
import EliminarEmpleado from "./Components/Eliminar/Empleado.jsx";
import EliminarEspecialidad from "./Components/Eliminar/Especialidad.jsx";
import EliminarEstado from "./Components/Eliminar/Estado.jsx";
import EliminarJefeEquipo from "./Components/Eliminar/JefeEquipo.jsx";
import EliminarModelo from "./Components/Eliminar/Modelo.jsx";
import EliminarMotor from "./Components/Eliminar/Motor.jsx";
import EliminarNacionalidad from "./Components/Eliminar/Nacionalidad.jsx";
import EliminarPenalizacion from "./Components/Eliminar/Penalizacion.jsx";
import EliminarPilCarr from "./Components/Eliminar/PilCarr.jsx";
import EliminarPiloto from "./Components/Eliminar/Piloto.jsx";
import EliminarServicio from "./Components/Eliminar/Servicio.jsx";
import EliminarTecnico from "./Components/Eliminar/Tecnico.jsx";
import EliminarTipoPenalizacion from "./Components/Eliminar/TipoPenalizacion.jsx";

// Buscar Components
import BuscarAutCir from "./Components/Buscar/AutCir.jsx";
import BuscarAutTec from "./Components/Buscar/AutTec.jsx";
import BuscarAuto from "./Components/Buscar/Auto.jsx";
import BuscarCarrera from "./Components/Buscar/Carrera.jsx";
import BuscarCircuito from "./Components/Buscar/Circuito.jsx";
import BuscarEmpleado from "./Components/Buscar/Empleado.jsx";
import BuscarEspecialidad from "./Components/Buscar/Especialidad.jsx";
import BuscarEstado from "./Components/Buscar/Estado.jsx";
import BuscarJefeEquipo from "./Components/Buscar/JefeEquipo.jsx";
import BuscarModelo from "./Components/Buscar/Modelo.jsx";
import BuscarMotor from "./Components/Buscar/Motor.jsx";
import BuscarNacionalidad from "./Components/Buscar/Nacionalidad.jsx";
import BuscarPenalizacion from "./Components/Buscar/Penalizacion.jsx";
import BuscarPilCarr from "./Components/Buscar/PilCarr.jsx";
import BuscarPiloto from "./Components/Buscar/Piloto.jsx";
import BuscarServicio from "./Components/Buscar/Servicio.jsx";
import BuscarTecnico from "./Components/Buscar/Tecnico.jsx";
import BuscarTipoPenalizacion from "./Components/Buscar/TipoPenalizacion.jsx";

//RELACIONES

import RelacionPilotoAutoAsignar from "./Components/Relaciones/RelacionPilotoAutoAsignar";
import RelacionPilotoAutoEliminar from "./Components/Relaciones/RelacionPilotoAutoEliminar";
import RelacionPilotoVerAutos from "./Components/Relaciones/RelacionPilotoVerAutos";
import RelacionPilotoVerPilotos from "./Components/Relaciones/RelacionPilotoVerPilotos";
import RelacionTecnicoEspecialidadAsignar from "./Components/Relaciones/RelacionTecnicoEspecialidadAsignar";
import RelacionTecnicoEspecialidadEliminar from "./Components/Relaciones/RelacionTecnicoEspecialidadEliminar";
import RelacionTecnicoVerEspecialidades from "./Components/Relaciones/RelacionTecnicoVerEspecialidades";
import RelacionPenalizacionPilotoAsignar from "./Components/Relaciones/RelacionPenalizacionPilotoAsignar";
import RelacionPenalizacionPilotoEliminar from "./Components/Relaciones/RelacionPenalizacionPilotoEliminar";
import RelacionPenalizacionVerPorPiloto from "./Components/Relaciones/RelacionPenalizacionVerPorPiloto";
import RelacionPenalizacionCarreraAsignar from "./Components/Relaciones/RelacionPenalizacionCarreraAsignar";
import RelacionPenalizacionCarreraEliminar from "./Components/Relaciones/RelacionPenalizacionCarreraEliminar";
import RelacionPenalizacionVerPorCarrera from "./Components/Relaciones/RelacionPenalizacionVerPorCarrera";
import RelacionPenalizacionTipoAsignar from "./Components/Relaciones/RelacionPenalizacionTipoAsignar";
import RelacionPenalizacionTipoEliminar from "./Components/Relaciones/RelacionPenalizacionTipoEliminar";
import RelacionPenalizacionVerTipos from "./Components/Relaciones/RelacionPenalizacionVerTipos";


function App() {
  return (
    <Routes>
      {/* Pages */}
      <Route path="/" element={<Welcome />} />
      <Route path="/dashboard" element={<Principal />} />

      {/* Crear */}
      <Route path="/crear-autcir" element={<AutCir />} />
      <Route path="/crear-auttec" element={<AutTec />} />
      <Route path="/crear-auto" element={<Auto />} />
      <Route path="/crear-carrera" element={<Carrera />} />
      <Route path="/crear-circuito" element={<Circuito />} />
      <Route path="/crear-empleado" element={<Empleado />} />
      <Route path="/crear-especialidad" element={<Especialidad />} />
      <Route path="/crear-estado" element={<Estado />} />
      <Route path="/crear-jefeequipo" element={<JefeEquipo />} />
      <Route path="/crear-modelo" element={<CrearModelo />} />
      <Route path="/crear-motor" element={<CrearMotor />} />
      <Route path="/crear-nacionalidad" element={<CrearNacionalidad />} />
      <Route path="/crear-penalizacion" element={<CrearPenalizacion />} />
      <Route path="/crear-pilcarr" element={<CrearPilCarr />} />
      <Route path="/crear-piloto" element={<CrearPiloto />} />
      <Route path="/crear-servicio" element={<CrearServicio />} />
      <Route path="/crear-tecnico" element={<CrearTecnico />} />
      <Route path="/crear-tipo-penalizacion" element={<CrearTipoPenalizacion />} />

      {/* Editar */}
      <Route path="/editar-autcir" element={<EditarAutCir />} />
      <Route path="/editar-auttec" element={<EditarAutTec />} />
      <Route path="/editar-auto" element={<EditarAuto />} />
      <Route path="/editar-carrera" element={<EditarCarrera />} />
      <Route path="/editar-circuito" element={<EditarCircuito />} />
      <Route path="/editar-empleado" element={<EditarEmpleado />} />
      <Route path="/editar-especialidad" element={<EditarEspecialidad />} />
      <Route path="/editar-estado" element={<EditarEstado />} />
      <Route path="/editar-jefeequipo" element={<EditarJefeEquipo />} />
      <Route path="/editar-modelo" element={<EditarModelo />} />
      <Route path="/editar-motor" element={<EditarMotor />} />
      <Route path="/editar-nacionalidad" element={<EditarNacionalidad />} />
      <Route path="/editar-penalizacion" element={<EditarPenalizacion />} />
      <Route path="/editar-pilcarr" element={<EditarPilCarr />} />
      <Route path="/editar-piloto" element={<EditarPiloto />} />
      <Route path="/editar-servicio" element={<EditarServicio />} />
      <Route path="/editar-tecnico" element={<EditarTecnico />} />
      <Route path="/editar-tipo-penalizacion" element={<EditarTipoPenalizacion />} />

      {/* Eliminar */}
      <Route path="/eliminar-autcir" element={<EliminarAutCir />} />
      <Route path="/eliminar-auttec" element={<EliminarAutTec />} />
      <Route path="/eliminar-auto" element={<EliminarAuto />} />
      <Route path="/eliminar-carrera" element={<EliminarCarrera />} />
      <Route path="/eliminar-circuito" element={<EliminarCircuito />} />
      <Route path="/eliminar-empleado" element={<EliminarEmpleado />} />
      <Route path="/eliminar-especialidad" element={<EliminarEspecialidad />} />
      <Route path="/eliminar-estado" element={<EliminarEstado />} />
      <Route path="/eliminar-jefeequipo" element={<EliminarJefeEquipo />} />
      <Route path="/eliminar-modelo" element={<EliminarModelo />} />
      <Route path="/eliminar-motor" element={<EliminarMotor />} />
      <Route path="/eliminar-nacionalidad" element={<EliminarNacionalidad />} />
      <Route path="/eliminar-penalizacion" element={<EliminarPenalizacion />} />
      <Route path="/eliminar-pilcarr" element={<EliminarPilCarr />} />
      <Route path="/eliminar-piloto" element={<EliminarPiloto />} />
      <Route path="/eliminar-servicio" element={<EliminarServicio />} />
      <Route path="/eliminar-tecnico" element={<EliminarTecnico />} />
      <Route path="/eliminar-tipo-penalizacion" element={<EliminarTipoPenalizacion />} />

      {/* Buscar */}
      <Route path="/buscar-autcir" element={<BuscarAutCir />} />
      <Route path="/buscar-auttec" element={<BuscarAutTec />} />
      <Route path="/buscar-auto" element={<BuscarAuto />} />
      <Route path="/buscar-carrera" element={<BuscarCarrera />} />
      <Route path="/buscar-circuito" element={<BuscarCircuito />} />
      <Route path="/buscar-empleado" element={<BuscarEmpleado />} />
      <Route path="/buscar-especialidad" element={<BuscarEspecialidad />} />
      <Route path="/buscar-estado" element={<BuscarEstado />} />
      <Route path="/buscar-jefeequipo" element={<BuscarJefeEquipo />} />
      <Route path="/buscar-modelo" element={<BuscarModelo />} />
      <Route path="/buscar-motor" element={<BuscarMotor />} />
      <Route path="/buscar-nacionalidad" element={<BuscarNacionalidad />} />
      <Route path="/buscar-penalizacion" element={<BuscarPenalizacion />} />
      <Route path="/buscar-pilcarr" element={<BuscarPilCarr />} />
      <Route path="/buscar-piloto" element={<BuscarPiloto />} />
      <Route path="/buscar-servicio" element={<BuscarServicio />} />
      <Route path="/buscar-tecnico" element={<BuscarTecnico />} />
      <Route path="/buscar-tipo-penalizacion" element={<BuscarTipoPenalizacion />} />

      <Route path="/piloto-asignar-auto" element={<RelacionPilotoAutoAsignar />} />
      <Route path="/piloto-eliminar-auto" element={<RelacionPilotoAutoEliminar />} />
      <Route path="/piloto-ver-autos" element={<RelacionPilotoVerAutos />} />
      <Route path="/piloto-ver-pilotos" element={<RelacionPilotoVerPilotos />} />

        {/* Técnico ↔ Especialidad */}
        <Route path="/tecnico-asignar-especialidad" element={<RelacionTecnicoEspecialidadAsignar />} />
        <Route path="/tecnico-eliminar-especialidad" element={<RelacionTecnicoEspecialidadEliminar />} />
        <Route path="/tecnico-ver-especialidades" element={<RelacionTecnicoVerEspecialidades />} />

        {/* Penalización ↔ Piloto */}
        <Route path="/penalizacion-asignar-piloto" element={<RelacionPenalizacionPilotoAsignar />} />
        <Route path="/penalizacion-eliminar-piloto" element={<RelacionPenalizacionPilotoEliminar />} />
        <Route path="/penalizacion-ver-por-piloto" element={<RelacionPenalizacionVerPorPiloto />} />

        {/* Penalización ↔ Carrera */}
        <Route path="/penalizacion-asignar-carrera" element={<RelacionPenalizacionCarreraAsignar />} />
        <Route path="/penalizacion-eliminar-carrera" element={<RelacionPenalizacionCarreraEliminar />} />
        <Route path="/penalizacion-ver-por-carrera" element={<RelacionPenalizacionVerPorCarrera />} />

        {/* Penalización ↔ Tipo */}
        <Route path="/penalizacion-asignar-tipo" element={<RelacionPenalizacionTipoAsignar />} />
        <Route path="/penalizacion-quitar-tipo" element={<RelacionPenalizacionTipoEliminar />} />
        <Route path="/penalizacion-ver-tipos" element={<RelacionPenalizacionVerTipos />} />
    </Routes>
  );
}

export default App;
