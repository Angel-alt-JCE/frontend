import '../App.css';

function TarjetaJuego({ juego, onEdit, onDelete }) {
  const { name, developer, genre, description, imageSrc, _id } = juego;

  // Imagen por defecto si no hay URL
  const imagenFinal = imageSrc && imageSrc.trim() !== ""
    ? imageSrc
    : "https://i.postimg.cc/CKshxKR4/no-image.png";

  return (
    <div className="info-tarjeta-juego">
      <img src={imagenFinal} alt={name || "Imagen del juego"} />
      <h2>{name}</h2>
      <p><strong>Desarrollador:</strong> {developer}</p>
      <p><strong>Género:</strong> {genre}</p>
      <p><strong>Descripción:</strong> {description}</p>

      <div className="tarjeta-acciones">
        <button className='editar' onClick={() => onEdit(juego)}>✏️ Editar</button>
        <button className='eliminar' onClick={() => onDelete(_id)}>🗑️ Eliminar</button>
      </div>
    </div>
  );
}

export default TarjetaJuego;
