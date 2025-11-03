
import "./index.css";
import "./App.css";

import{Routes,Route} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Principal from "./pages/Principal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/dashboard" element={<Principal />} />
      <Route path="/lista-autcir" element={<ListarAutCir />} />
      <Route path="/lista-auttec" element={<ListarAutTec />} />
<Route path="/lista-auto" element={<ListarAuto />} />
<Route path="/lista-carrera" element={<ListarCarrera />} />
<Route path="/lista-circuito" element={<ListarCircuito />} />
<Route path="/lista-empleado" element={<ListarEmpleado />} />
<Route path="/lista-especialidad" element={<ListarEspecialidad />} />
<Route path="/lista-estado" element={<ListarEstado />} />
<Route path="/lista-jefeequipo" element={<ListarJefeEquipo />} />
      <Route path="/buscar-autcir" element={<BuscarAutCir />} />
     <Route path="/buscar-auttec" element={<BuscarAutTec />} />
     <Route path="/buscar-auto" element={<BuscarAuto />} />
     <Route path="/buscar-carrera" element={<BuscarCarrera />} />
     <Route path="/buscar-circuito" element={<BuscarCircuito />} />
     <Route path="/buscar-empleado" element={<BuscarEmpleado />} />
     <Route path="/buscar-especialidad" element={<BuscarEspecialidad />} />
     <Route path="/buscar-estado" element={<BuscarEstado />} />
     <Route path="/buscar-jefeequipo" element={<BuscarJefeEquipo />} />
     <Route path="/eliminar-autcir" element={<EliminarAutCir />} />
<Route path="/eliminar-auttec" element={<EliminarAutTec />} />
<Route path="/eliminar-auto" element={<EliminarAuto />} />
<Route path="/eliminar-carrera" element={<EliminarCarrera />} />
<Route path="/eliminar-circuito" element={<EliminarCircuito />} />
<Route path="/eliminar-empleado" element={<EliminarEmpleado />} />
<Route path="/eliminar-especialidad" element={<EliminarEspecialidad />} />
<Route path="/eliminar-estado" element={<EliminarEstado />} />
<Route path="/eliminar-jefeequipo" element={<EliminarJefeEquipo />} />
<Route path="/editar-autcir" element={<EditarAutCir />} />
<Route path="/editar-auttec" element={<EditarAutTec />} />
<Route path="/editar-auto" element={<EditarAuto />} />
<Route path="/editar-carrera" element={<EditarCarrera />} />
<Route path="/editar-circuito" element={<EditarCircuito />} />
<Route path="/editar-empleado" element={<EditarEmpleado />} />
<Route path="/editar-especialidad" element={<EditarEspecialidad />} />
<Route path="/editar-estado" element={<EditarEstado />} />
<Route path="/editar-jefeequipo" element={<EditarJefeEquipo />} />
<Route path="/crear-autcir" element={<AutCir />} />
<Route path="/crear-auttec" element={<AutTec />} />
<Route path="/crear-auto" element={<Auto />} />
<Route path="/crear-carrera" element={<Carrera />} />
<Route path="/crear-circuito" element={<Circuito />} />
<Route path="/crear-empleado" element={<Empleado />} />
<Route path="/crear-especialidad" element={<Especialidad />} />
<Route path="/crear-estado" element={<Estado />} />
<Route path="/crear-jefeequipo" element={<JefeEquipo />} />


     </Routes>
  );
}

export default App;