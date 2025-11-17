import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"; // Reuse login styles for consistency
import { registerUser } from "../services/authService";

export default function Register({ onRegister }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userId.trim()) return alert("Ingresa un ID válido");
    if (!password) return alert("Ingresa una contraseña");
    if (password !== confirmPassword) return alert("Las contraseñas no coinciden");

    const result = registerUser({ id: userId.trim(), password });
    if (!result.ok) return alert(result.message || "No se pudo registrar");

    // Guardamos sesión y disparamos callback
    sessionStorage.setItem("idGamer", userId.trim());
    if (onRegister) onRegister(userId.trim());

    // Redirigir a la Biblioteca
    navigate("/Biblioteca");
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="titulo-login">
          REGÍSTRATE <br />
          <span>ÚNETE A LA COMUNIDAD</span>
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            className="input-user-id"
            type="text"
            placeholder="Crea un ID de usuario"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />

          <input
            className="input-password"
            type="password"
            placeholder="Crea una contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            className="input-password"
            type="password"
            placeholder="Confirma tu contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <input
            className="input-user-id"
            type="email"
            placeholder="Correo (opcional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Registrarme</button>
        </form>

        <p style={{ marginTop: "12px" }}>
          ¿Ya tienes cuenta? <Link to="/">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
}
