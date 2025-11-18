import { useState } from "react";
import StarRating from "./StarRating";
import { addReseña } from "../services/reseñasService";

export default function ReviewForm({ onAdded }) {
  const [gameName, setGameName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!gameName.trim()) return alert("Ingresa el nombre del juego");
    const nueva = {
      gameName: gameName.trim(),
      comment: comment.trim(),
      rating,
      date: new Date().toISOString(),
      _id: `local-${Date.now()}`
    };

    const res = await addReseña(nueva);
    if (res.ok) {
      setGameName("");
      setComment("");
      setRating(5);
      if (onAdded) onAdded();
    } else {
      alert(res.message || "No se pudo guardar la reseña");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ddd', padding: 12, borderRadius: 8, marginBottom: 16, maxWidth: 500 }}>
      <h3>Agregar Reseña</h3>
      <input placeholder="Nombre del juego" value={gameName} onChange={(e) => setGameName(e.target.value)} style={{ width: '100%', padding: 8, marginBottom: 8 }} />
      <textarea placeholder="Tu reseña" value={comment} onChange={(e) => setComment(e.target.value)} style={{ width: '100%', padding: 8, marginBottom: 8 }} rows={4} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
        <strong>Puntuación:</strong>
        <StarRating rating={rating} onChange={setRating} readOnly={false} />
        <span style={{ marginLeft: 8 }}>{rating} ⭐</span>
      </div>

      <button type="submit">Guardar Reseña</button>
    </form>
  );
}
