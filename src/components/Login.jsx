import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateCredentials } from "../services/authService";
import "./Login.css";

function Login({ onLogin }) {
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userId.trim() === "") {
      return alert("Ingresa un ID válido");
    }
    if (password.trim() === "") {
      return alert("Ingresa una contraseña válida");
    }

    const res = validateCredentials({ id: userId.trim(), password });

    if (!res.ok) {
      return alert(res.message || "Credenciales incorrectas");
    }

    // Ejecuta función de App.jsx
    if (onLogin) onLogin(userId.trim());

    // Redirige a biblioteca
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
