import axios from "axios";

const ESTADO_BASE_URL = "http://localhost:8080/estado";

class EstadoService {
  // Listar
  getAllEstado() {
    return axios.get(`${ESTADO_BASE_URL}/listar`);
  }

  // Crear
  saveEstado(estado) {
    // estado = { nombre }
    return axios.post(`${ESTADO_BASE_URL}/crear`, estado);
  }

  // Buscar por id
  getEstadoById(id) {
    return axios.get(`${ESTADO_BASE_URL}/buscar/${id}`);
  }

  // Editar por id
  updateEstado(id, estado) {
    // estado = { idEstado?, nombre }
    return axios.put(`${ESTADO_BASE_URL}/editar/${id}`, estado);
  }
}

export default new EstadoService();