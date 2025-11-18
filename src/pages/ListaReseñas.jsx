import { useEffect, useState } from "react";
import { getReseñas } from "../services/reseñasService";
import ReseñaCard from "../components/ReseñaCard";
import BarraBusqueda from "../components/BarraBusqueda";
import FiltrosReseñas from "../components/FiltrosReseñas";
import ReviewForm from "../components/ReviewForm";

function ListaReseñas() {
  const [reseñas, setReseñas] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [busqueda, setBusqueda] = useState("");
  const [filtroPuntuacion, setFiltroPuntuacion] = useState(null);

  useEffect(() => {
    obtenerReseñas();
  }, []);

  const obtenerReseñas = async () => {
    const data = await getReseñas();
    setReseñas(data);
    setFiltered(data);
  };

  // 🔎 Filtro de búsqueda
  useEffect(() => {
    let resultado = reseñas;

    if (busqueda.trim() !== "") {
      resultado = resultado.filter(r =>
        r.gameName.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    if (filtroPuntuacion) {
      resultado = resultado.filter(r => r.rating === filtroPuntuacion);
    }

    setFiltered(resultado);

  }, [busqueda, filtroPuntuacion, reseñas]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Reseñas</h1>

      <ReviewForm onAdded={obtenerReseñas} />

      <BarraBusqueda onSearch={setBusqueda} />

      <FiltrosReseñas onFilter={setFiltroPuntuacion} />

      <div style={{ marginTop: "20px" }}>
        {filtered.map(r => (
          <ReseñaCard key={r._id} reseña={r} />
        ))}
      </div>
    </div>
  );
}

export default ListaReseñas;
