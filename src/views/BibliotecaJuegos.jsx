import { useEffect, useState } from "react";
import TarjetaJuego from "../components/TarjetaJuego";

function BibliotecaJuegos() {
  const URL_API = "http://localhost:3000/";
  const [juegos, setJuegos] = useState([]);
  const [name, setName] = useState("");
  const [developer, setDeveloper] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [imagesrc, setImageSrc] = useState("");

  const saveGame = async () => {
    try {
      const response = await fetch(URL_API + "games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idGamer: sessionStorage.getItem("idGamer"),
          name,
          developer,
          genre,
          description,
          imagesrc,
        }),
      });

      if (response.ok) {
        const newGame = await response.json();
        // Actualiza la lista local sin volver a hacer fetch
        setJuegos([...juegos, newGame.game]);
        // Limpia los campos del formulario
        setName("");
        setDeveloper("");
        setGenre("");
        setDescription("");
        setImageSrc("");
      } else {
        console.error("Error al guardar el juego:", response.statusText);
      }
    } catch (error) {
      console.error("Error al guardar el juego:", error);
    }
  };

  useEffect(() => {
    fetch(URL_API)
      .then((response) => response.json())
      .then((data) => setJuegos(data))
      .catch(() => setJuegos([]));
  }, []);

  return (
    <>
      <h1>Biblioteca de juegos</h1>
      <div className="form-new-edit-game">
        <form onSubmit={(e) => { e.preventDefault(); saveGame(); }}>
          <div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Nombre del juego"
            />
            <input
              value={developer}
              onChange={(e) => setDeveloper(e.target.value)}
              type="text"
              placeholder="Desarrollador"
            />
            <input
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              type="text"
              placeholder="Género"
            />
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              placeholder="Descripción"
            />
            <input
              value={imagesrc}
              onChange={(e) => setImageSrc(e.target.value)}
              type="text"
              placeholder="URL de la imagen"
            />
          </div>
          <button type="submit">Agregar juego</button>
        </form>
      </div>

      <div className="biblioteca-juegos-container">
        {juegos.map((juego, index) => (
          <TarjetaJuego
            key={index}
            gameName={juego.name}
            developer={juego.developer}
            gender={juego.genre}
            description={juego.description}
            imageSrc={juego.imagesrc}
          />
        ))}
      </div>
    </>
  );
}

export default BibliotecaJuegos;
