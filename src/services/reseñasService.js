export const getReseñas = async () => {
  try {
    const response = await fetch("http://localhost:3000/reviews");
    return await response.json();
  } catch (error) {
    console.error("Error al obtener reseñas:", error);
    return [];
  }
};

// Intentar guardar reseña en backend; si falla, guardar en localStorage
export const addReseña = async (reseña) => {
  try {
    const response = await fetch("http://localhost:3000/reviews", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reseña)
    });
    if (!response.ok) throw new Error('No se pudo guardar en backend');
    return { ok: true };
  } catch (e) {
    console.warn('Falling back to localStorage for reviews:', e.message);
    try {
      const key = 'hg_reviews';
      const raw = localStorage.getItem(key);
      const arr = raw ? JSON.parse(raw) : [];
      arr.unshift(reseña);
      localStorage.setItem(key, JSON.stringify(arr));
      return { ok: true, fallback: true };
    } catch (err) {
      console.error('Error saving review to localStorage', err);
      return { ok: false, message: err.message };
    }
  }
};

// Obtener reviews desde localStorage (fallback)
export const getLocalReseñas = () => {
  try {
    const raw = localStorage.getItem('hg_reviews');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error leyendo reseñas locales', e);
    return [];
  }
};
