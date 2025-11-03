import axios from "axios";

const API_URL = "http://localhost:8080/tecnico";

class TecnicoService {
  async listar() {
    const response = await axios.get(`${API_URL}/listar`);
    return response.data;
  }

  async crear(tecnico) {
    const response = await axios.post(`${API_URL}/crear`, tecnico);
    return response.data;
  }

  async buscar(id) {
    const response = await axios.get(`${API_URL}/buscar/${id}`);
    return response.data;
  }

  async editar(id, tecnico) {
    const response = await axios.put(`${API_URL}/editar/${id}`, tecnico);
    return response.data;
  }

  async eliminar(id) {
    const response = await axios.delete(`${API_URL}/eliminar/${id}`);
    return response.data;
  }
}

export default new TecnicoService();
