// Obtener todas las reseñas desde el backend
export const getReseñas = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/reviews");
    if (!response.ok) throw new Error("Error al obtener reseñas del backend");
    return await response.json();
  } catch (error) {
    console.error("Error al obtener reseñas:", error);
    return [];
  }
};

// Agregar una reseña al backend
export const addReseña = async (reseña) => {
  try {
    const response = await fetch("http://localhost:3000/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reseña),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || "No se pudo guardar en backend");
    }

    return { ok: true };
  } catch (e) {
    console.error("Error al guardar reseña en backend:", e.message);
    return { ok: false, message: e.message };
  }
};

// Actualizar reseña
export const updateReseña = async (id, reseña) => {
  try {
    const response = await fetch(`http://localhost:3000/api/reviews/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reseña),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || "No se pudo actualizar en backend");
    }

    return { ok: true };
  } catch (e) {
    console.error("Error al actualizar reseña en backend:", e.message);
    return { ok: false, message: e.message };
  }
};

// Eliminar reseña
export const deleteReseña = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/reviews/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || "No se pudo eliminar en backend");
    }

    return { ok: true };
  } catch (e) {
    console.error("Error al eliminar reseña en backend:", e.message);
    return { ok: false, message: e.message };
  }
};
