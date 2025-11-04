import axios from "axios";

const CIRCUITO_BASE_REST_API_URL = "http://localhost:8081/circuito";

class CircuitoService {
  // Listar
  getAllCircuito() {
    return axios.get(`${CIRCUITO_BASE_REST_API_URL}/listar`);
  }

  // Crear
  saveCircuito(circuito) {
    // circuito = { nombre, numVueltas }
    return axios.post(`${CIRCUITO_BASE_REST_API_URL}/crear`, circuito);
  }

  // Buscar por id
  getCircuitoById(id) {
    return axios.get(`${CIRCUITO_BASE_REST_API_URL}/buscar/${id}`);
  }

  // Editar por id
  updateCircuito(id, circuito) {
    // circuito = { idCircuito?, nombre, numVueltas }
    return axios.put(`${CIRCUITO_BASE_REST_API_URL}/editar/${id}`, circuito);
  }
}

export default new CircuitoService();