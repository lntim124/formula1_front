
import axios from "axios";

const BASE_URL = "http://localhost:8081/tipo_penalizacion";

class TipoPenalizacionService {
  // Obtener todos los tipos
  getAllTipoPenalizacion() {
    return axios.get(`${BASE_URL}/listar`);
  }

  // Crear nuevo tipo de penalización
  saveTipoPenalizacion(tipo) {
    return axios.post(`${BASE_URL}/crear`, tipo);
  }

  // Buscar por ID
  getTipoPenalizacionById(id) {
    return axios.get(`${BASE_URL}/buscar/${id}`);
  }

  // Editar tipo de penalización
  updateTipoPenalizacion(id, tipo) {
    return axios.put(`${BASE_URL}/editar/${id}`, tipo);
  }

  // Eliminar tipo de penalización
  deleteTipoPenalizacion(id) {
    return axios.delete(`${BASE_URL}/eliminar/${id}`);
  }
}

export default new TipoPenalizacionService();