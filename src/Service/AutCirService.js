import axios from "axios";

const AUT_CIR_BASE_REST_API_URL = "http://localhost:8081/autCir";

class AutCirService {
  // LISTAR
  getAllAutCir() {
    return axios.get(`${AUT_CIR_BASE_REST_API_URL}/listar`);
  }

  // CREAR
  saveAutCir(autCir) {
    // autCir = { idCircuito, placa, velocidad }
    return axios.post(`${AUT_CIR_BASE_REST_API_URL}/crear`, autCir);
  }

  // ELIMINAR (por PK compuesta)
  deleteAutCir(idCircuito, placa) {
    return axios.delete(`${AUT_CIR_BASE_REST_API_URL}/eliminar`, {
      params: { idCircuito, placa },
    });
  }

  // BUSCAR (por PK compuesta)
  getAutCirById(idCircuito, placa) {
    return axios.get(`${AUT_CIR_BASE_REST_API_URL}/buscar`, {
      params: { idCircuito, placa },
    });
  }

  // EDITAR
  updateAutCir(autCir) {
    // autCir = { idCircuito, placa, velocidad }
    return axios.put(`${AUT_CIR_BASE_REST_API_URL}/editar`, autCir);
  }
}

export default new AutCirService();