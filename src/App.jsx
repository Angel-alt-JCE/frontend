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

  // Función para login
  const handleLogin = (id) => {
    sessionStorage.setItem("idGamer", id);
    setIdGamer(id);
  };

  // Función para logout
  const handleLogout = () => {
    sessionStorage.removeItem("idGamer");
    setIdGamer(null);
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
            idGamer 
              ? <Navigate to="/biblioteca" /> 
              : <Login onLogin={handleLogin} />
          }
        />

        {/* BIBLIOTECA (PROTEGIDA) */}
        <Route
          path="/biblioteca"
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
