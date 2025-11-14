const API = "http://localhost:3000/games";

export const getGames = () => fetch(API).then(res => res.json());

export const addGame = (data) =>
  fetch(API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });

export const updateGame = (id, data) =>
  fetch(`${API}/${id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });

export const deleteGame = (id) =>
  fetch(`${API}/${id}`, { method: "DELETE" });
