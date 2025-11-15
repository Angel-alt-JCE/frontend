function FiltrosReseñas({ onFilter }) {
  const manejarFiltro = (e) => {
    const val = e.target.value === "" ? null : Number(e.target.value);
    onFilter(val);
  };

  return (
    <div className="cuadro-busqueda" style={{ marginBottom: "20px" }}>
      <label>Puntuación: </label>
      <select onChange={manejarFiltro} style={{ padding: "8px" }}>
        <option value="">Todas</option>
        <option value="5">⭐5 estrellas</option>
        <option value="4">⭐4 estrellas</option>
        <option value="3">⭐3 estrellas</option>
        <option value="2">⭐2 estrellas</option>
        <option value="1">⭐1 estrella</option>
      </select>
    </div>
  );
}

export default FiltrosReseñas;
