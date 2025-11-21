import { useEffect, useState } from "react";
import { getReseñas } from "../services/reseñasService"; 
import ReseñaCard from "../components/ReseñaCard";
import BarraBusqueda from "../components/BarraBusqueda";
import FiltrosReseñas from "../components/FiltrosReseñas";
import ReviewForm from "../components/ReviewForm";

import "../App.css";

function ListaReseñas() {
  const [reseñas, setReseñas] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [busqueda, setBusqueda] = useState("");
  const [filtroPuntuacion, setFiltroPuntuacion] = useState(null);

  // 🔥 Al montar: carga reseñas desde backend
  useEffect(() => {
    cargarReseñas();
  }, []);

  const cargarReseñas = async () => {
    const data = await getReseñas();

    if (!data || data.length === 0) {
      setReseñas([]);
      setFiltered([]);
    } else {
      setReseñas(data);
      setFiltered(data);
    }
  };

  // 🔍 Filtrado dinámico
  useEffect(() => {
    let resultado = [...reseñas];

    if (busqueda.trim() !== "") {
      resultado = resultado.filter(r =>
        r.gameName?.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    if (filtroPuntuacion !== null && filtroPuntuacion !== "") {
      resultado = resultado.filter(r =>
        Number(r.rating) === Number(filtroPuntuacion)
      );
    }

    setFiltered(resultado);
  }, [busqueda, filtroPuntuacion, reseñas]);

  return (
    <div className="lista-reseñas-page">
      <h1>Lista de Reseñas</h1>

      {/* Cuando se agrega reseña, refresca lista */}
      <ReviewForm onAdded={cargarReseñas} />

      <BarraBusqueda onSearch={setBusqueda} />
      <FiltrosReseñas onFilter={setFiltroPuntuacion} />

      <div style={{ marginTop: "20px" }}>
        {filtered.map(r => (
          <ReseñaCard 
            key={r._id || r.gameName} 
            reseña={r} 
            onChanged={cargarReseñas} // ✅ refresca lista al editar/eliminar
          />
        ))}
      </div>
    </div>
  );
}

export default ListaReseñas;
