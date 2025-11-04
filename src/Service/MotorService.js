import axios from "axios";

const API_URL = "http://localhost:8081/motor";

class MotorService {
  listarMotores() {
    return axios.get(`${API_URL}/listar`);
  }

  crearMotor(motor) {
    return axios.post(`${API_URL}/crear`, motor);
  }

  buscarPorId(id) {
    return axios.get(`${API_URL}/buscar/${id}`);
  }
}

export default new MotorService();
