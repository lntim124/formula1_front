
import axios from "axios";

const BASE_URL = "http://localhost:8080/tipoPenalizacion";

const TipoPenalizacionService = {
  crear: (data) => axios.post(`${BASE_URL}/crear`, data),
  listar: () => axios.get(`${BASE_URL}/listar`),
  buscar: (id) => axios.get(`${BASE_URL}/buscar/${id}`),
  editar: (id, data) => axios.put(`${BASE_URL}/editar/${id}`, data),
  eliminar: (id) => axios.delete(`${BASE_URL}/eliminar/${id}`)
};

export default TipoPenalizacionService;
