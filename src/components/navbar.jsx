import { Link } from "react-router-dom";
import "../App.css";  

function Navbar() {
  return (
    <nav className="navbar-gamer">
      <div className="navbar-logo"> </div>

      <ul className="navbar-links">
        <li><Link to="/biblioteca">Biblioteca</Link></li>
        <li><Link to="/reseñas">Reseñas</Link></li>
        <li><Link to="/estadisticas">Estadísticas</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
