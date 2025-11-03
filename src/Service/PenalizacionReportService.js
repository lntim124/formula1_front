import axios from "axios";

const BASE = "http://localhost:8081/report/penalizacion";

class PenalizacionReportService {
  // /report/penalizacion/piloto
  getPenalizacionPorPiloto() {
    return axios.get(`${BASE}/piloto`);
  }
  // /report/penalizacion/carrera
  getPenalizacionPorCarrera() {
    return axios.get(`${BASE}/carrera`);
  }
}

export default new PenalizacionReportService();