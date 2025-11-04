import axios from "axios";

const API_URL = "http://localhost:8081/nacionalidad";

class NacionalidadService {
  listarNacionalidades() {
    return axios.get(`${API_URL}/listar`);
  }

  crearNacionalidad(nacionalidad) {
    return axios.post(`${API_URL}/crear`, nacionalidad);
  }

  buscarPorId(id) {
    return axios.get(`${API_URL}/buscar/${id}`);
  }
}

export default new NacionalidadService();
