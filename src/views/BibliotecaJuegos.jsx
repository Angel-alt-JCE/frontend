import { useEffect, useState } from "react";
import TarjetaJuego from "../components/TarjetaJuego";

function BibliotecaJuegos() {
  const URL_API = "http://localhost:3000/api/games/";

  const [juegos, setJuegos] = useState([]);
  const [name, setName] = useState("");
  const [developer, setDeveloper] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [editId, setEditId] = useState(null); // Para edición

  const idGamer = sessionStorage.getItem("idGamer");

  // Guardar o editar juego
  const saveGame = async () => {
    if (!idGamer) {
      console.error("❌ idGamer no definido en sessionStorage");
      return;
    }

    const gameData = {
      idGamer,
      name,
      developer,
      genre,
      description,
      imageSrc,
    };

    try {
      const response = await fetch(editId ? `${URL_API}${editId}` : URL_API, {
        method: editId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(gameData),
      });

      const result = await response.json();

      if (response.ok) {
        if (editId) {
          // Actualiza juego existente
          setJuegos((prev) =>
            prev.map((j) => (j._id === editId ? result : j))
          );
          setEditId(null);
        } else {
          // Agrega juego nuevo
          setJuegos((prev) => [...prev, result.game]);
        }

        // Limpiar formulario
        setName("");
        setDeveloper("");
        setGenre("");
        setDescription("");
        setImageSrc("");
      } else {
        console.error("Error al guardar el juego:", result.error || response.statusText);
      }
    } catch (error) {
      console.error("Error en fetch:", error);
    }
  };

  // Eliminar juego
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${URL_API}${id}`, { method: "DELETE" });
      if (response.ok) {
        setJuegos((prev) => prev.filter((j) => j._id !== id));
      }
    } catch (error) {
      console.error("Error al eliminar juego:", error);
    }
  };

  // Cargar juego en el formulario para editar
  const handleEdit = (juego) => {
    setName(juego.name);
    setDeveloper(juego.developer);
    setGenre(juego.genre);
    setDescription(juego.description);
    setImageSrc(juego.imageSrc);
    setEditId(juego._id);
  };

  // Cargar todos los juegos al iniciar
  useEffect(() => {
    fetch(URL_API)
      .then((res) => res.json())
      .then((data) => setJuegos(data))
      .catch((err) => {
        console.error("Error al obtener juegos:", err);
        setJuegos([]);
      });
  }, []);

  return (
    <>
      <h1>Biblioteca de juegos</h1>

      <div className="form-new-edit-game">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            saveGame();
          }}
        >
          <input className="input-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nombre del juego"
            required
          />
          <input className="input-developer"
            value={developer}
            onChange={(e) => setDeveloper(e.target.value)}
            type="text"
            placeholder="Desarrollador"
            required
          />
          <input className="input-genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            type="text"
            placeholder="Género"
            required
          />
          <input className="input-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Descripción"
          />
          <input className="input-image-src"
            value={imageSrc}
            onChange={(e) => setImageSrc(e.target.value)}
            type="text"
            placeholder="URL de la imagen"
          />
          
          <button type="submit">{editId ? "Guardar cambios" : "Agregar juego"}</button>
        </form>
      </div>

      <div className="biblioteca-juegos-container">
        {juegos.map((juego) => (
          <TarjetaJuego
            key={juego._id}
            juego={juego}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
}

export default BibliotecaJuegos;
