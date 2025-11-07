import "./index.css";
import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
        {/* Página inicial */}
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<Welcome/>} />
        <Route path="/dashboard" element={<Principal />} />


        {/* Ejemplos de rutas existentes */}
        <Route path="/listar-empleado" element={<ListarEmpleado />} />
        <Route path="/crear-empleado" element={<CrearEmpleado />} />
        <Route path="/pilotos" element={<ListarPiloto />} />
        


        {/* Ruta por defecto si no existe */}
        <Route path="*" element={<h2 style={{ color: "white" }}>404 - Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;