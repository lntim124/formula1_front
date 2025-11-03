import axios from "axios";

const API_URL = "http://localhost:8080/modelo";

class ModeloService {

  
  crearModelo(modelo) {
    return axios.post(`${API_URL}/crear`, modelo);
  }

  
  listarModelos() {
    return axios.get(`${API_URL}/listar`);
  }

  
  buscarPorId(id) {
    return axios.get(`${API_URL}/buscar/${id}`);
  }

  
  editarModelo(id, modelo) {
    return axios.put(`${API_URL}/editar/${id}`, modelo);
  }

  
  eliminarModelo(id) {
    return axios.delete(`${API_URL}/eliminar/${id}`);
  }
}

export default new ModeloService();
