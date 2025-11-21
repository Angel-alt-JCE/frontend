import StarRating from "./StarRating";

function ReseñaCard({ reseña }) {
  return (
    <div className="reseña-card" style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "15px",
      marginBottom: "15px",
      maxWidth: "450px"
    }}>
      <h2>{reseña.gameName}</h2>

      <p><strong>Puntuación:</strong> <StarRating rating={reseña.rating} readOnly={true} size={16} /> <span style={{marginLeft:8}}>{reseña.rating} ⭐</span></p>

      <p><strong>Fecha:</strong> {new Date(reseña.date).toLocaleDateString()}</p>

      <p>{reseña.comment.slice(0, 120)}...</p>

      <button style={{ marginRight: "10px" }}>Editar</button>
      <button style={{ background: "red", color: "white" }}>Eliminar</button>
    </div>
  );
}

export default ReseñaCard;
