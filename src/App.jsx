import './App.css';
import BibliotecaJuegos from './views/BibliotecaJuegos'; 
import Login from './components/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

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
      <Routes>
        {/* Ruta de login */}
        <Route
          path="/"
          element={idGamer ? <Navigate to="/biblioteca" /> : <Login onLogin={handleLogin} />}
        />

        {/* Ruta protegida de biblioteca */}
        <Route
          path="/biblioteca"
          element={
            idGamer ? <BibliotecaJuegos onLogout={handleLogout} /> : <Navigate to="/" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
