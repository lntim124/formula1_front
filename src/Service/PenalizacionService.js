import axios from "axios";

const API_URL = "http://localhost:8081/penalizacion";

class PenalizacionService {
  listarPenalizaciones() {
    return axios.get(`${API_URL}/listar`);
  }

  crearPenalizacion(penalizacion) {
    return axios.post(`${API_URL}/crear`, penalizacion);
  }

  buscarPorId(id) {
    return axios.get(`${API_URL}/buscar/${id}`);
  }

  editarPenalizacion(id, penalizacion) {
    return axios.put(`${API_URL}/editar/${id}`, penalizacion);
  }

  eliminarPenalizacion(id) {
    return axios.delete(`${API_URL}/eliminar/${id}`);
  }

  
  asignarPenalizacionAPiloto(datos) {
    return axios.post(`${API_URL}/asignar-a-piloto`, datos);
  }

  eliminarPenalizacionDePiloto(datos) {
    return axios.delete(`${API_URL}/eliminar-de-piloto`, { data: datos });
  }

  verPenalizacionesDePiloto(idPiloto) {
    return axios.get(`${API_URL}/ver-por-piloto/${idPiloto}`);
  }


  asignarPenalizacionACarrera(datos) {
    return axios.post(`${API_URL}/asignar-penalizacion-carrera`, datos);
  }

  eliminarPenalizacionDeCarrera(datos) {
    return axios.delete(`${API_URL}/eliminar-penalizacion-carrera`, { data: datos });
  }

  verPenalizacionesDeCarrera(idCarrera) {
    return axios.get(`${API_URL}/ver-penalizaciones-carrera/${idCarrera}`);
  }

  
  asignarTipo(datos) {
    return axios.post(`${API_URL}/asignar-tipo`, datos);
  }

  quitarTipo(datos) {
    return axios.delete(`${API_URL}/quitar-tipo`, { data: datos });
  }

  verTipos(idPenalizacion) {
    return axios.get(`${API_URL}/ver-tipos/${idPenalizacion}`);
  }
}

export default new PenalizacionService();
