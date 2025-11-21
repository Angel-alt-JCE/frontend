import StarRating from "./StarRating";
import { deleteReseña, updateReseña } from "../services/reseñasService";

function ReseñaCard({ reseña, onChanged }) {
  const handleDelete = async () => {
    if (window.confirm("¿Seguro que quieres eliminar esta reseña?")) {
      const res = await deleteReseña(reseña._id);
      if (res.ok && onChanged) onChanged(); // refresca lista
    }
  };

  const handleEdit = async () => {
    const nuevoComentario = prompt("Editar comentario:", reseña.comment);
    if (nuevoComentario && nuevoComentario.trim() !== "") {
      const res = await updateReseña(reseña._id, {
        ...reseña,
        comment: nuevoComentario.trim(),
      });
      if (res.ok && onChanged) onChanged(); // refresca lista
    }
  };

  return (
    <div className="reseña-card" style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "15px",
      marginBottom: "15px",
      maxWidth: "450px"
    }}>
      <h2>{reseña.gameName}</h2>

      <p>
        <strong>Puntuación:</strong>{" "}
        <StarRating rating={reseña.rating} readOnly={true} size={16} />{" "}
        <span style={{ marginLeft: 8 }}>{reseña.rating} ⭐</span>
      </p>

      <p><strong>Fecha:</strong> {new Date(reseña.date).toLocaleDateString()}</p>

      <p>{reseña.comment.slice(0, 120)}...</p>

      <button style={{ marginRight: "10px" }} onClick={handleEdit}>Editar</button>
      <button style={{ background: "red", color: "white" }} onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

export default ReseñaCard;
