import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function Navbar() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("idGamer") || "Invitado";

  const handleLogout = () => {
    localStorage.removeItem("idGamer");
    navigate("/login");
  };

  return (
    <nav className="navbar-gamer">
      <div className="navbar-logo"> </div>
      <ul className="navbar-links">
        <li><Link to="/Biblioteca">Biblioteca</Link></li>
        <li><Link to="/reseñas">Reseñas</Link></li>
        <li><Link to="/estadisticas">Estadísticas</Link></li>
      </ul>
      <div className="user-info">
        <span className="user-name">👤 {userId}</span>
        {userId !== "Invitado" && (
          <button onClick={handleLogout} style={{ marginLeft: "12px" }}>
            Cerrar sesión
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
