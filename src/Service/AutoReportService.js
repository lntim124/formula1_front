import axios from "axios";

const BASE_URL = "http://localhost:8081/report/auto";

class AutoReportService {
  getVelocidadAutos() {
    return axios.get(`$ {BASE_URL}/reportes/velocidad-autos`);
  }

  getServiciosAutos() {
    return axios.get(`$ {BASE_URL}/reportes/servicios-autos`);
  }
}

export default new AutoReportService();