import axios from "axios";

const JEFE_BASE_URL = "http://localhost:8080/jefe_equipo";

class JefeEquipoService {
  // Listar
  getAllJefeEquipo() {
    return axios.get(`${JEFE_BASE_URL}/listar`);
  }

  // Crear
  saveJefeEquipo(jefeEquipo) {
    // jefeEquipo = { fechaInicio, id }
    return axios.post(`${JEFE_BASE_URL}/crear`, jefeEquipo);
  }

  // Buscar por ID
  getJefeEquipoById(id) {
    return axios.get(`${JEFE_BASE_URL}/buscar/${id}`);
  }

  // Editar
  updateJefeEquipo(id, jefeEquipo) {
    return axios.put(`${JEFE_BASE_URL}/editar/${id}`, jefeEquipo);
  }

  // Eliminar
  deleteJefeEquipo(id) {
    return axios.delete(`${JEFE_BASE_URL}/eliminar/${id}`);
  }
}

export default new JefeEquipoService();