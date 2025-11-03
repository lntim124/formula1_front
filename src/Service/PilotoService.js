import axios from "axios";

const API_URL = "http://localhost:8080/piloto";

class PilotoService {
  // Listar todos los pilotos
  async listar() {
    const response = await axios.get(`${API_URL}/listar`);
    return response.data;
  }

  // Crear un nuevo piloto
  async crear(piloto) {
    const response = await axios.post(`${API_URL}/crear`, piloto);
    return response.data;
  }

  // Buscar piloto por ID
  async buscar(id) {
    const response = await axios.get(`${API_URL}/buscar/${id}`);
    return response.data;
  }

  // Editar piloto existente
  async editar(id, piloto) {
    const response = await axios.put(`${API_URL}/editar/${id}`, piloto);
    return response.data;
  }

  // Eliminar piloto por ID
  async eliminar(id) {
    const response = await axios.delete(`${API_URL}/eliminar/${id}`);
    return response.data;
  }

  // Asignar auto a piloto
  async asignarAuto(idPiloto, placaAuto) {
    const response = await axios.post(`${API_URL}/asignar-auto`, {
      idPiloto,
      placaAuto,
    });
    return response.data;
  }

  // Eliminar auto de un piloto
  async eliminarAuto(idPiloto, placaAuto) {
    const response = await axios.delete(`${API_URL}/eliminar-auto`, {
      data: { idPiloto, placaAuto },
    });
    return response.data;
  }

  // Ver autos de un piloto
  async verAutos(idPiloto) {
    const response = await axios.get(`${API_URL}/ver-autos/${idPiloto}`);
    return response.data;
  }

  // Ver pilotos de un auto
  async verPilotos(placaAuto) {
    const response = await axios.get(`${API_URL}/ver-pilotos/${placaAuto}`);
    return response.data;
  }
}

export default new PilotoService();
