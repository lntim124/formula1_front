import axios from "axios";

const BASE = "http://localhost:8081/report/piloto";

class PilotoReportService {
  // /report/piloto/resultado
  getResultadoPilotos() {
    return axios.get(`${BASE}/resultado`);
  }
  // /report/piloto/resumen
  getResumenRendimiento() {
    return axios.get(`${BASE}/resumen`);
  }
  // /report/piloto/podio
  getPodiosPiloto() {
    return axios.get(`${BASE}/podio`);
  }
}

export default new PilotoReportService();