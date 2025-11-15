import './App.css';
import BibliotecaJuegos from './views/BibliotecaJuegos'; 
import Login from './components/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

// Nuevos imports
import ListaReseñas from "./pages/ListaReseñas";
import EstadisticasPersonales from "./pages/EstadisticasPersonales"; // si aún no existe, crea archivo vacío
import Navbar from "./components/navbar";

function App() {
  // Guardar idGamer desde sessionStorage
  const [idGamer, setIdGamer] = useState(sessionStorage.getItem("idGamer"));
  const [redirect, setRedirect] = useState(false); // Para redirección automática después del login

  // Función para login
  const handleLogin = (id) => {
    sessionStorage.setItem("idGamer", id);
    setIdGamer(id);
    setRedirect(true); // Activamos redirección inmediata
  };

  // Función para logout
  const handleLogout = () => {
    sessionStorage.removeItem("idGamer");
    setIdGamer(null);
    setRedirect(false);
  };

  return (
    <BrowserRouter>

      {/* Mostrar Navbar solo si el usuario está logueado */}
      {idGamer && <Navbar />}

      <Routes>

        {/* LOGIN */}
        <Route
          path="/"
          element={
            idGamer || redirect
              ? <Navigate to="/Biblioteca" />
              : <Login onLogin={handleLogin} />
          }
        />

        {/* BIBLIOTECA (PROTEGIDA) */}
        <Route
          path="/Biblioteca"
          element={
            idGamer 
              ? <BibliotecaJuegos onLogout={handleLogout} /> 
              : <Navigate to="/" />
          }
        />

        {/* LISTA DE RESEÑAS (PROTEGIDA) */}
        <Route
          path="/reseñas"
          element={
            idGamer 
              ? <ListaReseñas /> 
              : <Navigate to="/" />
          }
        />

        {/* ESTADÍSTICAS (PROTEGIDA) */}
        <Route
          path="/estadisticas"
          element={
            idGamer 
              ? <EstadisticasPersonales /> 
              : <Navigate to="/" />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
