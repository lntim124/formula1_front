import "./index.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Welcome from "./pages/Welcome.jsx";
import Principal from "./pages/Principal.jsx";

//BUSCAR
import AutCir from "./Components/Buscar/AutCir.jsx";
import Auto from "./Components/Buscar/Auto.jsx";
import AutTec from "./Components/Buscar/AutTec.jsx";
import Carrera from "./Components/Buscar/Carrera.jsx";
import Circuito from "./Components/Buscar/Circuito.jsx";
import Empleado from "./Components/Buscar/Empleado.jsx";
import Especialidad from "./Components/Buscar/Especialidad.jsx";
import Estado from "./Components/Buscar/Estado.jsx";
import JefeEquipo from "./Components/Buscar/JefeEquipo.jsx";
import Modelo from "./Components/Buscar/Modelo.jsx";
import Motor from "./Components/Buscar/Motor.jsx";
import Nacionalidad from "./Components/Buscar/Nacionalidad.jsx";
import Penalizacion from "./Components/Buscar/Penalizacion.jsx";
import PilCarr from "./Components/Buscar/PilCarr.jsx";
import Piloto from "./Components/Buscar/Piloto.jsx";
import Servicio from "./Components/Buscar/Servicio.jsx";
import Tecnico from "./Components/Buscar/Tecnico.jsx";
import TipoPenalizacion from "./Components/Buscar/TipoPenalizacion.jsx";

//CREAR
import AutCir from "./Components/Crear/AutCir.jsx";
import AutTec from "./Components/Crear/AutTec.jsx";
import Auto from "./Components/Crear/Auto.jsx";
import Carrera from "./Components/Crear/Carrera.jsx";
import Empleado from "./Components/Crear/Empleado.jsx";
import Especialidad from "./Components/Crear/Especialidad.jsx";
import Estado from "./Components/Crear/Estado.jsx";
import JefeEquipo from "./Components/Crear/JefeEquipo.jsx";
import Modelo from "./Components/Crear/Modelo.jsx";
import Motor from "./Components/Crear/Motor.jsx";
import Nacionalidad from "./Components/Crear/Nacionalidad.jsx";
import Penalizacion from "./Components/Crear/Penalizacion.jsx";
import PilCarr from "./Components/Crear/PilCarr.jsx";
import Piloto from "./Components/Crear/Piloto.jsx";
import Servicio from "./Components/Crear/Servicio.jsx";
import Tecnico from "./Components/Crear/Tecnico.jsx";
import TipoPenalizacion from "./Components/Crear/TipoPenalizacion.jsx";

//EDITAR
import AutCir from "./Components/Editar/AutCir.jsx";
import Auto from "./Components/Editar/Auto.jsx";
import AutTec from "./Components/Editar/AutTec.jsx";
import Carrera from "./Components/Editar/Carrera.jsx";
import Circuito from "./Components/Editar/Circuito.jsx";
import Empleado from "./Components/Editar/Empleado.jsx";
import Especialidad from "./Components/Editar/Especialidad.jsx";
import Estado from "./Components/Editar/Estado.jsx";
import JefeEquipo from "./Components/Editar/JefeEquipo.jsx";
import Modelo from "./Components/Editar/Modelo.jsx";
import Motor from "./Components/Editar/Motor.jsx";
import Nacionalidad from "./Components/Editar/Nacionalidad.jsx";
import Penalizacion from "./Components/Editar/Penalizacion.jsx";
import PilCarr from "./Components/Editar/PilCarr.jsx";
import Piloto from "./Components/Editar/Piloto.jsx";
import Servicio from "./Components/Editar/Servicio.jsx";
import Tecnico from "./Components/Editar/Tecnico.jsx";
import TipoPenalizacion from "./Components/Editar/TipoPenalizacion.jsx";

//ELIMINAR
import AutCir from "./Components/Eliminar/AutCir.jsx";
import AutTec from "./Components/Eliminar/AutTec.jsx";
import Auto from "./Components/Eliminar/Auto.jsx";
import Carrera from "./Components/Eliminar/Carrera.jsx";
import Circuito from "./Components/Eliminar/Circuito.jsx";
import Empleado from "./Components/Eliminar/Empleado.jsx";
import Especialidad from "./Components/Eliminar/Especialidad.jsx";
import Estado from "./Components/Eliminar/Estado.jsx";
import JefeEquipo from "./Components/Eliminar/JefeEquipo.jsx";
import Modelo from "./Components/Eliminar/Modelo.jsx";
import Motor from "./Components/Eliminar/Motor.jsx";
import Nacionalidad from "./Components/Eliminar/Nacionalidad.jsx";
import Penalizacion from "./Components/Eliminar/Penalizacion.jsx";
import PilCarr from "./Components/Eliminar/PilCarr.jsx";
import Piloto from "./Components/Eliminar/Piloto.jsx";
import Servicio from "./Components/Eliminar/Servicio.jsx";
import Tecnico from "./Components/Eliminar/Tecnico.jsx";
import TipoPenalizacion from "./Components/Eliminar/TipoPenalizacion.jsx";

//LISTAR
import AutCir from "./Components/Listar/AutCir.jsx";
import Auto from "./Components/Listar/Auto.jsx";
import AutTec from "./Components/Listar/AutTec.jsx";
import Carrera from "./Components/Listar/Carrera.jsx";
import Circuito from "./Components/Listar/Circuito.jsx";
import Empleado from "./Components/Listar/Empleado.jsx";
import Especialidad from "./Components/Listar/Especialidad.jsx";
import Estado from "./Components/Listar/Estado.jsx";
import JefeEquipo from "./Components/Listar/JefeEquipo.jsx";
import Modelo from "./Components/Listar/Modelo.jsx";
import Motor from "./Components/Listar/Motor.jsx";
import Nacionalidad from "./Components/Listar/Nacionalidad.jsx";
import Penalizacion from "./Components/Listar/Penalizacion.jsx";
import PilCarr from "./Components/Listar/PilCarr.jsx";
import Piloto from "./Components/Listar/Piloto.jsx";
import Servicio from "./Components/Listar/Servicio.jsx";
import Tecnico from "./Components/Listar/Tecnico.jsx";
import TipoPenalizacion from "./Components/Listar/TipoPenalizacion.jsx";

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
    <Router>
      <Routes>

        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Principal />} />

       {/*BUSCAR*/}
      <Route path="/buscar-autcir" element={<AutCir />} />
      <Route path="/buscar-auto" element={<Auto />} />
      <Route path="/buscar-auttec" element={<AutTec />} />
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

      {/*CREAR*/}
       <Route path="/crear-autcir" element={<ModeloAutCir />} />
      <Route path="/crear-auto" element={<Auto />} />
      <Route path="/crear-auttec" element={<AutTec />} />
      <Route path="/crear-carrera" element={<Carrera />} />
      <Route path="/crear-circuito" element={<Circuito />} />
      <Route path="/crear-empleado" element={<Empleado />} />
      <Route path="/crear-especialidad" element={<Especialidad />} />
      <Route path="/crear-estado" element={<Estado />} />
      <Route path="/crear-jefeequipo" element={<JefeEquipo />} />
      <Route path="/crear-modelo" element={<Modelo />} />
      <Route path="/crear-motor" element={<rMotor />} />
      <Route path="/crear-nacionalidad" element={<Nacionalidad />} />
      <Route path="/crear-penalizacion" element={<Penalizacion />} />
      <Route path="/crear-pilcarr" element={<PilCarr />} />
      <Route path="/crear-piloto" element={<Piloto />} />
      <Route path="/crear-servicio" element={<Servicio />} />
      <Route path="/crear-tecnico" element={<Tecnico />} />
      <Route path="/crear-tipo-penalizacion" element={<TipoPenalizacion />} />

      {/*EDITAR*/}
      <Route path="/editar-autcir" element={<AutCir />} />
      <Route path="/editar-auto" element={<Auto />} />
      <Route path="/editar-auttec" element={<AutTec />} />
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

      {/*ELIMINAR*/}
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
      

      {/*LISTAR*/}
      <Route path="/listar-autcir" element={<AutCir />} />
      <Route path="/listar-auto" element={<Auto />} />
      <Route path="/listar-auttec" element={<AutTec />} />
      <Route path="/listar-carrera" element={<Carrera />} />
      <Route path="/listar-circuito" element={<Circuito />} />
      <Route path="/listar-empleado" element={<Empleado />} />
      <Route path="/listar-especialidad" element={<Especialidad />} />
      <Route path="/listar-estado" element={<Estado />} />
      <Route path="/listar-jefeequipo" element={<JefeEquipo />} />
      <Route path="/listar-modelo" element={<Modelo />} />
      <Route path="/listar-motor" element={<Motor />} />
      <Route path="/listar-nacionalidad" element={<Nacionalidad />} />
      <Route path="/listar-penalizacion" element={<Penalizacion />} />
      <Route path="/listar-pilcarr" element={<PilCarr />} />
      <Route path="/listar-piloto" element={<Piloto />} />
      <Route path="/listar-servicio" element={<Servicio />} />
      <Route path="/listar-tecnico" element={<Tecnico />} />
      <Route path="/listar-tipo-penalizacion" element={<TipoPenalizacion />} />

      {/*RELACIONES*/}
      
      <Route path="/piloto-asignar-auto" element={<RelacionPilotoAutoAsignar />} />
      <Route path="/piloto-eliminar-auto" element={<RelacionPilotoAutoEliminar />} />
      <Route path="/piloto-ver-autos" element={<RelacionPilotoVerAutos />} />
      <Route path="/piloto-ver-pilotos" element={<RelacionPilotoVerPilotos />} />

       Técnico ↔ Especialidad *
        <Route path="/tecnico-asignar-especialidad" element={<RelacionTecnicoEspecialidadAsignar />} />
        <Route path="/tecnico-eliminar-especialidad" element={<RelacionTecnicoEspecialidadEliminar />} />
        <Route path="/tecnico-ver-especialidades" element={<RelacionTecnicoVerEspecialidades />} />

         Penalización ↔ Piloto 
        <Route path="/penalizacion-asignar-piloto" element={<RelacionPenalizacionPilotoAsignar />} />
        <Route path="/penalizacion-eliminar-piloto" element={<RelacionPenalizacionPilotoEliminar />} />
        <Route path="/penalizacion-ver-por-piloto" element={<RelacionPenalizacionVerPorPiloto />} />

        Penalización ↔ Carrera 
        <Route path="/penalizacion-asignar-carrera" element={<RelacionPenalizacionCarreraAsignar />} />
        <Route path="/penalizacion-eliminar-carrera" element={<RelacionPenalizacionCarreraEliminar />} />
        <Route path="/penalizacion-ver-por-carrera" element={<RelacionPenalizacionVerPorCarrera />} />

        Penalización ↔ Tipo 
        <Route path="/penalizacion-asignar-tipo" element={<RelacionPenalizacionTipoAsignar />} />
        <Route path="/penalizacion-quitar-tipo" element={<RelacionPenalizacionTipoEliminar />} />
        <Route path="/penalizacion-ver-tipos" element={<RelacionPenalizacionVerTipos />} />

        {/* ================== REPORTES ================== *

{/* ======= Reportes de Autos ======= */}
<Route path="/reporte/auto/velocidad" element={<ReporteAutoVelocidad />} />
<Route path="/reporte/auto/servicios" element={<ReporteAutoServicios />} />

{/* ======= Reportes de Penalizaciones ===*/}
<Route path="/reporte/penalizacion/piloto" element={<PenalizacionPorPiloto />} />
<Route path="/reporte/penalizacion/carrera" element={<PenalizacionPorCarrera />} />

{/* ======= Reportes de Circuitos y Carreras ===*/}
<Route path="/reporte/circuito/rendimiento" element={<RendimientoCircuito />} />
<Route path="/reporte/circuito/ganador" element={<CircuitoGanador />} />
<Route path="/reporte/circuito/resumen" element={<CircuitoResumen />} />

{/* ======= Reportes de Pilotos =====*/}
<Route path="/reporte/piloto/resultado" element={<PilotoResultado />} />
<Route path="/reporte/piloto/resumen" element={<PilotoResumenRendimiento />} />
<Route path="/reporte/piloto/podio" element={<PilotoPodios />} />

{/* ======= Reportes de Técnicos ====*/}
<Route path="/reporte/tecnico/rendimiento" element={<TecnicoRendimiento />} />
<Route path="/reporte/tecnico/autos" element={<TecnicoAutos />} />

</Routes>
</Router>
  );
}
export default App;



