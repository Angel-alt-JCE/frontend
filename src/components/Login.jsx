import { useState } from "react";
import { Link } from "react-router-dom";
import { validateCredentials } from "../services/authService";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ onLogin }) {
  const [contraseña, setContraseña] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userId.trim() === "") {
      return alert("Ingresa un ID válido");
    }
    if (contraseña === "") {
      return alert("Ingresa una contraseña válida");
    }

    // Validamos credenciales con el servicio de autenticación
    const res = validateCredentials({ id: userId.trim(), password: contraseña });
    if (!res.ok) return alert(res.message || "Credenciales incorrectas");
    // Llamamos al login del App.jsx
    if (onLogin) onLogin(userId.trim());

    // Redirigimos a la Biblioteca 
    navigate("/Biblioteca");
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="titulo-login">
          BIENVENIDO GAMER <br />
          <span>TE INVITO A REGISTRARTE</span>
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            className="input-user-id"
            type="text"
            placeholder="Ingresa tu ID de usuario"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />

          <input
            className="input-password"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />

          <button type="submit">Iniciar sesión</button>
        </form>
        <p style={{ marginTop: "12px" }}>
          ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
