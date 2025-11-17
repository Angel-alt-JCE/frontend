import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function TarjetaJuego({ juego, onEdit, onDelete }) {
  const { name, developer, genre, description, imageSrc, _id } = juego;

  const navigate = useNavigate();
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  // Imagen por defecto si no hay URL
  const imagenFinal = imageSrc && imageSrc.trim() !== ""
    ? imageSrc
    : "https://i.postimg.cc/CKshxKR4/no-image.png";

  const irAReseñas = () => {
    navigate(`/reseñas?juego=${encodeURIComponent(name)}`);
  };

  return (
    <div className="info-tarjeta-juego">
      <img src={imagenFinal} alt={name || "Imagen del juego"} />

      <h2>{name}</h2>
      <p><strong>Desarrollador:</strong> {developer}</p>
      <p><strong>Género:</strong> {genre}</p>

      {/* BOTÓN MOSTRAR/OCULTAR */}
      <button
        className="btn-toggle-desc"
        onClick={() => setMostrarDescripcion(!mostrarDescripcion)}
      >
        {mostrarDescripcion ? "Ocultar Descripción" : "Mostrar Descripción"}
      </button>

      {/* DESCRIPCIÓN (VISIBLE SOLO SI SE ACTIVA) */}
      {mostrarDescripcion && (
        <p className="descripcion">
          <strong>Descripción:</strong> {description}
        </p>
      )}

      {/* BOTÓN DE RESEÑAS */}
      <button className="btn-reseñas" onClick={irAReseñas}>
        ⭐ Reseñas
      </button>

      <div className="tarjeta-acciones">
        <button className='editar' onClick={() => onEdit(juego)}>✏️ Editar</button>
        <button className='eliminar' onClick={() => onDelete(_id)}>🗑️ Eliminar</button>
      </div>
    </div>
  );
}

export default TarjetaJuego;
