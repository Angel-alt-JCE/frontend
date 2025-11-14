import '../App.css';

function TarjetaJuego({ gameName, developer, genre, description, imageSrc }) {
  return (
    <div className="info-tarjeta-juego">
      <img 
        src={imageSrc || ""} 
        alt="Imagen del juego" 
      />

      <h2>{gameName}</h2>
      <p>Desarrollador: {developer}</p>
      <p>Género: {genre}</p>
      <p>Descripción: {description}</p>
    </div>
  );
}

export default TarjetaJuego;
