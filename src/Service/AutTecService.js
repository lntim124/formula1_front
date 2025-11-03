import axios from "axios";

const AUT_TEC_BASE_REST_API_URL = "http://localhost:8081/aut_tec";

class AutTecService {
  // LISTAR
  getAllAutTec() {
    return axios.get(`${AUT_TEC_BASE_REST_API_URL}/listar`);
  }

  // CREAR
  saveAutTec(autTec) {
    // autTec = { placa, idTecnico, idServicio, horaEntrada, horaSalida }
    return axios.post(`${AUT_TEC_BASE_REST_API_URL}/crear`, autTec);
  }

  // BUSCAR (PK compuesta)
  getAutTecById(placa, idTecnico) {
    return axios.get(`${AUT_TEC_BASE_REST_API_URL}/buscar`, {
      params: { placa, idTecnico },
    });
  }

  // EDITAR
  updateAutTec(autTec) {
    // autTec = { placa, idTecnico, idServicio, horaEntrada, horaSalida }
    return axios.put(`${AUT_TEC_BASE_REST_API_URL}/editar`, autTec);
  }

  // ELIMINAR (PK compuesta)
  deleteAutTec(placa, idTecnico) {
    return axios.delete(`${AUT_TEC_BASE_REST_API_URL}/eliminar`, {
      params: { placa, idTecnico },
    });
  }
}

export default new AutTecService();