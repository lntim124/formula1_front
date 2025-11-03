import axios from "axios";

const BASE = "http://localhost:8081/report/circuito";

class CircuitoReportService {
  getRendimiento() {
    return axios.get(`${BASE}/rendimiento`);
  }

  getGanador() {
    return axios.get(`${BASE}/ganador`);
  }

  getResumen() {
    return axios.get(`${BASE}/resumen`);
  }
}

export default new CircuitoReportService();