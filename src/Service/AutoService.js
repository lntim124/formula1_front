import axios from "axios";

const AUTO_BASE_REST_API_URL = "http://localhost:8080/auto";

class AutoService {
  // Listar todos los autos
  getAllAuto() {
    return axios.get(`${AUTO_BASE_REST_API_URL}/listar`);
  }

  // Crear auto
  saveAuto(auto) {
    // auto = { placa, numeroChasis, idMotor, fechaEstreno, idModelo }
    return axios.post(`${AUTO_BASE_REST_API_URL}/crear`, auto);
  }

  // Buscar por placa
  getAutoByPlaca(placa) {
    return axios.get(`${AUTO_BASE_REST_API_URL}/buscar/${placa}`);
  }

  // Editar auto
  updateAuto(placa, auto) {
    return axios.put(`${AUTO_BASE_REST_API_URL}/editar/${placa}`, auto);
  }

  // Eliminar auto
  deleteAuto(placa) {
    return axios.delete(`${AUTO_BASE_REST_API_URL}/eliminar/${placa}`);
  }
}

export default new AutoService();