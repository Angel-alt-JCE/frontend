// Servicio simple de autenticación usando localStorage (demo only)

const USERS_KEY = "hg_users"; // HelpGamer users key

// Obtiene la lista de usuarios desde localStorage
export const getUsers = () => {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error("Error leyendo usuarios:", e);
    return {};
  }
};

// Guarda la lista de usuarios
export const saveUsers = (users) => {
  try {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch (e) {
    console.error("Error guardando usuarios:", e);
  }
};

// Verifica si existe un usuario
export const userExists = (id) => {
  const users = getUsers();
  return Boolean(users[id]);
};

// Registra un nuevo usuario (id único)
export const registerUser = ({ id, password }) => {
  if (!id || !password) {
    return {
      ok: false,
      message: "ID y contraseña son requeridos",
    };
  }

  const users = getUsers();
  if (users[id]) {
    return { ok: false, message: "El ID ya está en uso" };
  }

  users[id] = { password };
  saveUsers(users);
  return { ok: true };
};

// Valida credenciales (simple check en local storage)
export const validateCredentials = ({ id, password }) => {
  const users = getUsers();
  if (!users[id]) return { ok: false, message: "Usuario no encontrado" };
  if (users[id].password !== password) return { ok: false, message: "Contraseña incorrecta" };
  return { ok: true };
};
