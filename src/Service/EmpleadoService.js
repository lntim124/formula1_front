import axios from "axios";

const EMPLEADO_BASE_URL = "http://localhost:8080/empleado";

class EmpleadoService {
  // Listar empleados
  getAllEmpleado() {
    return axios.get(`${EMPLEADO_BASE_URL}/listar`);
  }

  // Crear empleado
  saveEmpleado(empleado) {
    // empleado = { fechaNacimiento, primerNombre, primerApellido, idNacionalidad, idEstado }
    return axios.post(`${EMPLEADO_BASE_URL}/crear`, empleado);
  }

  // Buscar por ID
  getEmpleadoById(id) {
    return axios.get(`${EMPLEADO_BASE_URL}/buscar/${id}`);
  }

  // Editar por ID
  updateEmpleado(id, empleado) {
    return axios.put(`${EMPLEADO_BASE_URL}/editar/${id}`, empleado);
  }

  // Cambiar estado (activar/inactivar)
  changeEstadoEmpleado(id, nuevoIdEstado) {
    return axios.put(`${EMPLEADO_BASE_URL}/cambiar-estado/${id}/${nuevoIdEstado}`);
  }
}

export default new EmpleadoService();