import axios from "axios";

const API_URL = "http://localhost:8080/servicio";

class ServicioService {
  async listar() {
    const response = await axios.get(`${API_URL}/listar`);
    return response.data;
  }

  async crear(servicio) {
    const response = await axios.post(`${API_URL}/crear`, servicio);
    return response.data;
  }

  async buscar(id) {
    const response = await axios.get(`${API_URL}/buscar/${id}`);
    return response.data;
  }

  async editar(id, servicio) {
    const response = await axios.put(`${API_URL}/editar/${id}`, servicio);
    return response.data;
  }
}

export default new ServicioService();
