const BASE_URL = "http://localhost:8080/tipoPenalizacion";

/**
 * Crea un nuevo tipo de penalización
 * @param {Object} tipoPenalizacion - Objeto con los datos del tipo de penalización
 * @returns {Promise<Boolean>}
 */
export async function crearTipoPenalizacion(tipoPenalizacion) {
  try {
    const response = await fetch(`${BASE_URL}/crear`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tipoPenalizacion),
    });

    return response.ok;
  } catch (error) {
    console.error("Error al crear tipo de penalización:", error);
    return false;
  }
}

/**
 * Obtiene la lista de todos los tipos de penalización
 * @returns {Promise<Array>}
 */
export async function listarTipoPenalizaciones() {
  try {
    const response = await fetch(`${BASE_URL}/listar`);
    if (!response.ok) throw new Error("Error al obtener tipos de penalización");
    return await response.json();
  } catch (error) {
    console.error("Error al listar tipos de penalización:", error);
    return [];
  }
}

/**
 * Busca un tipo de penalización por ID
 * @param {number} id
 * @returns {Promise<Object|null>}
 */
export async function buscarTipoPenalizacion(id) {
  try {
    const response = await fetch(`${BASE_URL}/buscar/${id}`);
    if (response.ok) {
      return await response.json();
    } else {
      console.warn(`Tipo de penalización con ID ${id} no encontrado`);
      return null;
    }
  } catch (error) {
    console.error("Error al buscar tipo de penalización:", error);
    return null;
  }
}

/**
 * Edita un tipo de penalización existente
 * @param {number} id - ID del tipo de penalización
 * @param {Object} tipoPenalizacion - Objeto con los nuevos datos
 * @returns {Promise<Boolean>}
 */
export async function editarTipoPenalizacion(id, tipoPenalizacion) {
  try {
    const response = await fetch(`${BASE_URL}/editar/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tipoPenalizacion),
    });

    return response.ok;
  } catch (error) {
    console.error("Error al editar tipo de penalización:", error);
    return false;
  }
}
