import axios from "axios";

const API_URL = "http://localhost:8080/pilCarr";

class PilCarrService {
  async listar() {
    const response = await axios.get(`${API_URL}/listar`);
    return response.data;
  }

  async crear(pilCarr) {
    const response = await axios.post(`${API_URL}/crear`, pilCarr);
    return response.data;
  }

  async buscar(idPiloto, idCarrera) {
    const response = await axios.get(`${API_URL}/buscar/${idPiloto}/${idCarrera}`);
    return response.data;
  }

  async editar(idPiloto, idCarrera, pilCarr) {
    const response = await axios.put(`${API_URL}/editar/${idPiloto}/${idCarrera}`, pilCarr);
    return response.data;
  }

  async eliminar(idPiloto, idCarrera) {
    const response = await axios.delete(`${API_URL}/eliminar/${idPiloto}/${idCarrera}`);
    return response.data;
  }
}

export default new PilCarrService();
