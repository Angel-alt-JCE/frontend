import { Link } from "react-router-dom";
import "../App.css";  
const UserId = sessionStorage.getItem("idGamer") || "Invitado";

function Navbar() {
  return (
    <nav className="navbar-gamer">
      <div className="navbar-logo"> </div>

      <ul className="navbar-links">
        <li><Link to="/Biblioteca">Biblioteca</Link></li>
        <li><Link to="/reseñas">Reseñas</Link></li>
        <li><Link to="/estadisticas">Estadísticas</Link></li>
      </ul>
      <div className="user-info">
        <span className="user-name">👤{UserId}</span>
      </div>
    </nav>
  );
}

export default Navbar;
