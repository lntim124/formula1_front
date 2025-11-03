import "./index.css";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas principales
import Welcome from "./pages/Welcome.jsx";
import Principal from "./pages/Principal.jsx";

// ===== CREAR =====
import CrearAutCir from "./Components/Crear/AutCir.jsx";
import CrearAutTec from "./Components/Crear/AutTec.jsx";
import CrearAuto from "./Components/Crear/Auto.jsx";
import CrearCarrera from "./Components/Crear/Carrera.jsx";
import CrearCircuito from "./Components/Crear/Circuito.jsx";
import CrearEmpleado from "./Components/Crear/Empleado.jsx";
import CrearEspecialidad from "./Components/Crear/Especialidad.jsx";
import CrearEstado from "./Components/Crear/Estado.jsx";
import CrearJefeEquipo from "./Components/Crear/JefeEquipo.jsx";
import CrearModelo from "./Components/Crear/Modelo.jsx";
import CrearMotor from "./Components/Crear/Motor.jsx";
import CrearNacionalidad from "./Components/Crear/Nacionalidad.jsx";
import CrearPenalizacion from "./Components/Crear/Penalizacion.jsx";
import CrearPilCarr from "./Components/Crear/PilCarr.jsx";
import CrearPiloto from "./Components/Crear/Piloto.jsx";
import CrearServicio from "./Components/Crear/Servicio.jsx";
import CrearTecnico from "./Components/Crear/Tecnico.jsx";
import CrearTipoPenalizacion from "./Components/Crear/TipoPenalizacion.jsx";

// ===== EDITAR =====
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

// ===== =====
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

// ===== LiSTAR =====
import ListarAutCir from "./Components/Listar/AutCir.jsx";
import ListarAutTec from "./Components/Listar/AutTec.jsx";
import ListarAuto from "./Components/Listar/Auto.jsx";
import ListarCarrera from "./Components/Listar/Carrera.jsx";
import ListarCircuito from "./Components/Listar/Circuito.jsx";
import ListarEmpleado from "./Components/Listar/Empleado.jsx";
import ListarEspecialidad from "./Components/Listar/Especialidad.jsx";
import ListarEstado from "./Components/Listar/Estado.jsx";
import ListarJefeEquipo from "./Components/Listar/JefeEquipo.jsx";
import ListarModelo from "./Components/Listar/Modelo.jsx";
import ListarMotor from "./Components/Listar/Motor.jsx";
import ListarNacionalidad from "./Components/Listar/Nacionalidad.jsx";
import ListarPenalizacion from "./Components/Listar/Penalizacion.jsx";
import ListarPilCarr from "./Components/Listar/PilCarr.jsx";
import ListarPiloto from "./Components/Listar/Piloto.jsx";
import ListarServicio from "./Components/Listar/Servicio.jsx";
import ListarTecnico from "./Components/Listar/Tecnico.jsx";
import ListarTipoPenalizacion from "./Components/Listar/TipoPenalizacion.jsx";


// ===== BUSCAR =====
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

// ===== RELACIONES =====
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

//REPORTES

import ReporteAutoVelocidad from "./Components/Reportes/ReporteAutoVelocidad.jsx";
import ReporteAutoServicios from "./Components/Reportes/ReporteAutoServicios.jsx";
import PenalizacionPorPiloto from "./Components/Reportes/PenalizacionPorPiloto.jsx";
import PenalizacionPorCarrera from "./Components/Reportes/PenalizacionPorCarrera.jsx";
import CircuitoGanador from "./Components/Reportes/CircuitoGanador.jsx";
import CircuitoResumen from "./Components/Reportes/CircuitoResumen.jsx";
import RendimientoCircuito from "./Components/Reportes/RendimientoCircuito.jsx";
import PilotoResultado from "./Components/Reportes/PilotoResultado.jsx";
import PilotoResumenRendimiento from "./Components/Reportes/PilotoResumenRendimiento.jsx";
import PilotoPodios from "./Components/Reportes/PilotoPodios.jsx";
import TecnicoAutos from "./Components/Reportes/TecnicoAutos.jsx";
import TecnicoRendimiento from "./Components/Reportes/TecnicoRendimiento.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ==== PÁGINA DE BIENVENIDA CON CORTINA ==== */}
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Principal />} />



      {/* Crear */}
      <Route path="/crear-autcir" element={<CrearAutCir />} />
      <Route path="/crear-auttec" element={<CrearAutTec />} />
      <Route path="/crear-auto" element={<CrearAuto />} />
      <Route path="/crear-carrera" element={<CrearCarrera />} />
      <Route path="/crear-circuito" element={<CrearCircuito />} />
      <Route path="/crear-empleado" element={<CrearEmpleado />} />
      <Route path="/crear-especialidad" element={<CrearEspecialidad />} />
      <Route path="/crear-estado" element={<CrearEstado />} />
      <Route path="/crear-jefeequipo" element={<CrearJefeEquipo />} />
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

      {/* ELIMINAR*/}
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

      {/* Listar */}
      <Route path="/listar-autcir" element={<ListarAutCir />} />
      <Route path="/listar-auttec" element={<ListarAutTec />} />
      <Route path="/listar-auto" element={<ListarAuto />} />
      <Route path="/listar-carrera" element={<ListarCarrera />} />
      <Route path="/listar-circuito" element={<ListarCircuito />} />
      <Route path="/listar-empleado" element={<ListarEmpleado />} />
      <Route path="/listar-especialidad" element={<ListarEspecialidad />} />
      <Route path="/listar-estado" element={<ListarEstado />} />
      <Route path="/listar-jefeequipo" element={<ListarJefeEquipo />} />
      <Route path="/listar-modelo" element={<ListarModelo />} />
      <Route path="/listar-motor" element={<ListarMotor />} />
      <Route path="/listar-nacionalidad" element={<ListarNacionalidad />} />
      <Route path="/listar-penalizacion" element={<ListarPenalizacion />} />
      <Route path="/listar-pilcarr" element={<ListarPilCarr />} />
      <Route path="/listar-piloto" element={<ListarPiloto />} />
      <Route path="/listar-servicio" element={<ListarServicio />} />
      <Route path="/listar-tecnico" element={<ListarTecnico />} />
      <Route path="/listar-tipo-penalizacion" element={<ListarTipoPenalizacion />} />

        {/* ==== RELACIONES ==== */}
        <Route path="/piloto-asignar-auto" element={<RelacionPilotoAutoAsignar />} />
        <Route path="/piloto-eliminar-auto" element={<RelacionPilotoAutoEliminar />} />
        <Route path="/piloto-ver-autos" element={<RelacionPilotoVerAutos />} />
        <Route path="/piloto-ver-pilotos" element={<RelacionPilotoVerPilotos />} />

        <Route path="/tecnico-asignar-especialidad" element={<RelacionTecnicoEspecialidadAsignar />} />
        <Route path="/tecnico-eliminar-especialidad" element={<RelacionTecnicoEspecialidadEliminar />} />
        <Route path="/tecnico-ver-especialidades" element={<RelacionTecnicoVerEspecialidades />} />

        <Route path="/penalizacion-asignar-piloto" element={<RelacionPenalizacionPilotoAsignar />} />
        <Route path="/penalizacion-eliminar-piloto" element={<RelacionPenalizacionPilotoEliminar />} />
        <Route path="/penalizacion-ver-por-piloto" element={<RelacionPenalizacionVerPorPiloto />} />

        <Route path="/penalizacion-asignar-carrera" element={<RelacionPenalizacionCarreraAsignar />} />
        <Route path="/penalizacion-eliminar-carrera" element={<RelacionPenalizacionCarreraEliminar />} />
        <Route path="/penalizacion-ver-por-carrera" element={<RelacionPenalizacionVerPorCarrera />} />

        <Route path="/penalizacion-asignar-tipo" element={<RelacionPenalizacionTipoAsignar />} />
        <Route path="/penalizacion-quitar-tipo" element={<RelacionPenalizacionTipoEliminar />} />
        <Route path="/penalizacion-ver-tipos" element={<RelacionPenalizacionVerTipos />} />

        {/* ================== REPORTES ================== */}

        <Route path="/reporte/auto/velocidad" element={<ReporteAutoVelocidad />} />
        <Route path="/reporte/auto/servicios" element={<ReporteAutoServicios />} />
        <Route path="/reporte/penalizacion/piloto" element={<PenalizacionPorPiloto />} />
        <Route path="/reporte/penalizacion/carrera" element={<PenalizacionPorCarrera />} />
        <Route path="/reporte/circuito/rendimiento" element={<RendimientoCircuito />} />
        <Route path="/reporte/circuito/ganador" element={<CircuitoGanador />} />
        <Route path="/reporte/circuito/resumen" element={<CircuitoResumen />} />
        <Route path="/reporte/piloto/resultado" element={<PilotoResultado />} />
        <Route path="/reporte/piloto/resumen" element={<PilotoResumenRendimiento />} />
        <Route path="/reporte/piloto/podio" element={<PilotoPodios />} />
        <Route path="/reporte/tecnico/rendimiento" element={<TecnicoRendimiento />} />
        <Route path="/reporte/tecnico/autos" element={<TecnicoAutos />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;