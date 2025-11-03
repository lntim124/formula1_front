
import axios from "axios";

// URL base de tu API (ajústala a tu backend)
const API_URL = "http://localhost:8080/tipo-penalizacion";

const TipoPenalizacionService = {
  // Buscar un tipo de penalización por ID
  buscarTipoPenalizacion: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error al buscar tipo de penalización:", error);
      throw error;
    }
  },

  // Crear un nuevo tipo de penalización
  crearTipoPenalizacion: async (tipo) => {
    try {
      const response = await axios.post(`${API_URL}/crear`, tipo);
      return response.data;
    } catch (error) {
      console.error("Error al crear tipo de penalización:", error);
      throw error;
    }
  },

  // Actualizar un tipo de penalización
  actualizarTipoPenalizacion: async (id, tipo) => {
    try {
      const response = await axios.put(`${API_URL}/actualizar/${id}`, tipo);
      return response.data;
    } catch (error) {
      console.error("Error al actualizar tipo de penalización:", error);
      throw error;
    }
  },

  // Eliminar un tipo de penalización
  eliminarTipoPenalizacion: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/eliminar/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error al eliminar tipo de penalización:", error);
      throw error;
    }
  },
};

export default TipoPenalizacionService;

