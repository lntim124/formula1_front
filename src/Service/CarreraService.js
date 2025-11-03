import axios from "axios";

const CARRERA_BASE_REST_API_URL = "http://localhost:8080/carrera";

class CarreraService {
  // Listar
  getAllCarrera() {
    return axios.get(`${CARRERA_BASE_REST_API_URL}/listar`);
  }

  // Crear
  saveCarrera(carrera) {
    // carrera = { nombre, fecha, horaInicio, horaFin, idJefeEquipo, idCircuito }
    return axios.post(`${CARRERA_BASE_REST_API_URL}/crear`, carrera);
  }

  // Buscar por id
  getCarreraById(id) {
    return axios.get(`${CARRERA_BASE_REST_API_URL}/buscar/${id}`);
  }

  // Editar por id
  updateCarrera(id, carrera) {
    return axios.put(`${CARRERA_BASE_REST_API_URL}/editar/${id}`, carrera);
  }

  // Eliminar por id
  deleteCarrera(id) {
    return axios.delete(`${CARRERA_BASE_REST_API_URL}/eliminar/${id}`);
  }
}

export default new CarreraService();