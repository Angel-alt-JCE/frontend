export const getReseñas = async () => {
  try {
    const response = await fetch("http://localhost:3000/reviews");
    return await response.json();
  } catch (error) {
    console.error("Error al obtener reseñas:", error);
    return [];
  }
};
