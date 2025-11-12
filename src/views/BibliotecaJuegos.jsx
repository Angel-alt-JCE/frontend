import TarjetaJuego from "../components/TarjetaJuego";

function BibliotecaJuegos () {
  return (
    <>
      <h1>Biblioteca de Juegos</h1>
      <div>
        <TarjetaJuego 
        gameName="League of Legends"
        developer="Riot Games"
        gender="MOBA"
        description="League of Legends es un juego de estrategia en tiempo real donde dos equipos de campeones compiten para destruir la base del equipo contrario."
        imageSrc="src\assets\img\lol.jpg"

        />
      </div>
     
    </>
  )
}
export default BibliotecaJuegos;