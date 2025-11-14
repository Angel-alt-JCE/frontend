import { useState } from "react";

function BarraBusqueda({ onSearch }) {
  const [texto, setTexto] = useState("");

  const manejarCambio = (e) => {
    setTexto(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      <input
        type="text"
        placeholder="Buscar reseña por juego..."
        value={texto}
        onChange={manejarCambio}
        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />
    </div>
  );
}

export default BarraBusqueda;
