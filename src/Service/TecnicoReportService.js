import axios from "axios";

const BASE = "http://localhost:8081/report/tecnico";

class TecnicoReportService {
  // /report/tecnico/rendimiento
  getRendimientoTecnico() {
    return axios.get(`${BASE}/rendimiento`);
  }

  // /report/tecnico/autos
  getAutosPorTecnico() {
    return axios.get(`${BASE}/autos`);
  }
}

export default new TecnicoReportService();