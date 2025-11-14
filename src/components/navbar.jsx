import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      background: "#222",
      padding: "10px 20px",
      display: "flex",
      gap: "20px",
      alignItems: "center"
    }}>
      <Link to="/Biblioteca" style={{ color: "white", textDecoration: "none" }}>
        Biblioteca
      </Link>

      <Link to="/reseñas" style={{ color: "white", textDecoration: "none" }}>
        Reseñas
      </Link>

      <Link to="/estadisticas" style={{ color: "white", textDecoration: "none" }}>
        Estadísticas
      </Link>
    </nav>
  );
}

export default Navbar;
