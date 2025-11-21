import { useEffect, useState } from "react";
import "../App.css";

function EstadisticasPersonales() {
  const userId = sessionStorage.getItem("idGamer") || "guest";
  const [hours, setHours] = useState(0);
  const [entries, setEntries] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const key = `hg_stats_${userId}`;
    const raw = localStorage.getItem(key);
    const arr = raw ? JSON.parse(raw) : [];
    setEntries(arr);
    const total = arr.reduce((s, e) => s + Number(e.hours || 0), 0);
    setHours(total);
  }, [userId]);

  const addHours = () => {
    const h = Number(input);
    if (!h || h <= 0) return alert("Ingresa horas válidas");
    const entry = { hours: h, date: new Date().toISOString(), id: `h-${Date.now()}` };
    const key = `hg_stats_${userId}`;
    const raw = localStorage.getItem(key);
    const arr = raw ? JSON.parse(raw) : [];
    arr.unshift(entry);
    localStorage.setItem(key, JSON.stringify(arr));
    setEntries(arr);
    setHours(prev => prev + h);
    setInput("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Estadísticas Personales</h1>
      <p><strong>Usuario:</strong> {userId}</p>
      <p><strong>Total de horas jugadas:</strong> {hours} h</p>

      <div style={{ marginTop: 12 }}>
        <h3>Registrar horas</h3>
        <input type="number" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Horas jugadas" />
        <button onClick={addHours} style={{ marginLeft: 8 }}>Agregar</button>
      </div>

      <div style={{ marginTop: 20 }}>
        <h3>Entradas recientes</h3>
        <ul>
          {entries.map(en => (
            <li key={en.id}>{new Date(en.date).toLocaleString()} — {en.hours} h</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EstadisticasPersonales;
