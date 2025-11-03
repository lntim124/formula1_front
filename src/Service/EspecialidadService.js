import axios from "axios";

const ESPECIALIDAD_BASE_URL = "http://localhost:8080/especialidad";

class EspecialidadService {
  // Listar
  getAllEspecialidad() {
    return axios.get(`${ESPECIALIDAD_BASE_URL}/listar`);
  }

  // Crear
  saveEspecialidad(especialidad) {
    // especialidad = { nombre }
    return axios.post(`${ESPECIALIDAD_BASE_URL}/crear`, especialidad);
  }

  // Buscar por id
  getEspecialidadById(id) {
    return axios.get(`${ESPECIALIDAD_BASE_URL}/buscar/${id}`);
  }

  // Editar por id
  updateEspecialidad(id, especialidad) {
    // especialidad = { idEspecialidad?, nombre }
    return axios.put(`${ESPECIALIDAD_BASE_URL}/editar/${id}`, especialidad);
  }
}

export default new EspecialidadService();
