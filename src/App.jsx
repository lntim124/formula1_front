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
      <Route path="/crear-modelo" element={<Modelo />} />
      <Route path="/crear-motor" element={<Motor />} />
      <Route path="/crear-nacionalidad" element={<Nacionalidad />} />
      <Route path="/crear-penalizacion" element={<Penalizacion />} />
      <Route path="/crear-pilcarr" element={<PilCarr />} />
      <Route path="/crear-piloto" element={<Piloto />} />
      <Route path="/crear-servicio" element={<Servicio />} />
      <Route path="/crear-tecnico" element={<Tecnico />} />
      <Route path="/crear-tipo-penalizacion" element={<TipoPenalizacion />} />

      {/* Editar */}
      <Route path="/editar-autcir" element={<AutCir />} />
      <Route path="/editar-auttec" element={<AutTec />} />
      <Route path="/editar-auto" element={<Auto />} />
      <Route path="/editar-carrera" element={<Carrera />} />
      <Route path="/editar-circuito" element={<Circuito />} />
      <Route path="/editar-empleado" element={<Empleado />} />
      <Route path="/editar-especialidad" element={<Especialidad />} />
      <Route path="/editar-estado" element={<Estado />} />
      <Route path="/editar-jefeequipo" element={<JefeEquipo />} />
      <Route path="/editar-modelo" element={<Modelo />} />
      <Route path="/editar-motor" element={<Motor />} />
      <Route path="/editar-nacionalidad" element={<Nacionalidad />} />
      <Route path="/editar-penalizacion" element={<Penalizacion />} />
      <Route path="/editar-pilcarr" element={<PilCarr />} />
      <Route path="/editar-piloto" element={<Piloto />} />
      <Route path="/editar-servicio" element={<Servicio />} />
      <Route path="/editar-tecnico" element={<Tecnico />} />
      <Route path="/editar-tipo-penalizacion" element={<TipoPenalizacion />} />

      {/* Eliminar */}
      <Route path="/eliminar-autcir" element={<AutCir />} />
      <Route path="/eliminar-auttec" element={<AutTec />} />
      <Route path="/eliminar-auto" element={<Auto />} />
      <Route path="/eliminar-carrera" element={<Carrera />} />
      <Route path="/eliminar-circuito" element={<Circuito />} />
      <Route path="/eliminar-empleado" element={<Empleado />} />
      <Route path="/eliminar-especialidad" element={<Especialidad />} />
      <Route path="/eliminar-estado" element={<Estado />} />
      <Route path="/eliminar-jefeequipo" element={<JefeEquipo />} />
      <Route path="/eliminar-modelo" element={<Modelo />} />
      <Route path="/eliminar-motor" element={<Motor />} />
      <Route path="/eliminar-nacionalidad" element={<Nacionalidad />} />
      <Route path="/eliminar-penalizacion" element={<Penalizacion />} />
      <Route path="/eliminar-pilcarr" element={<PilCarr />} />
      <Route path="/eliminar-piloto" element={<Piloto />} />
      <Route path="/eliminar-servicio" element={<Servicio />} />
      <Route path="/eliminar-tecnico" element={<Tecnico />} />
      <Route path="/eliminar-tipo-penalizacion" element={<TipoPenalizacion />} />

      {/* Buscar */}

      <Route path="/buscar-autcir" element={<AutCir />} />
      <Route path="/buscar-auttec" element={<AutTec />} />
      <Route path="/buscar-auto" element={<Auto />} />
      <Route path="/buscar-carrera" element={<Carrera />} />
      <Route path="/buscar-circuito" element={<Circuito />} />
      <Route path="/buscar-empleado" element={<Empleado />} />
      <Route path="/buscar-especialidad" element={<Especialidad />} />
      <Route path="/buscar-estado" element={<Estado />} />
      <Route path="/buscar-jefeequipo" element={<JefeEquipo />} />
      <Route path="/buscar-modelo" element={<Modelo />} />
      <Route path="/buscar-motor" element={<Motor />} />
      <Route path="/buscar-nacionalidad" element={<Nacionalidad />} />
      <Route path="/buscar-penalizacion" element={<Penalizacion />} />
      <Route path="/buscar-pilcarr" element={<PilCarr />} />
      <Route path="/buscar-piloto" element={<Piloto />} />
      <Route path="/buscar-servicio" element={<Servicio />} />
      <Route path="/buscar-tecnico" element={<Tecnico />} />
      <Route path="/buscar-tipo-penalizacion" element={<TipoPenalizacion />} />

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
