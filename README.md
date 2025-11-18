# Help Gamer (Frontend)

Aplicación frontend en React + Vite para gestionar una biblioteca de juegos, reseñas y estadísticas personales.

**Estado:** demo / en desarrollo

**Repositorio remoto:** https://github.com/Angel-alt-JCE/frontend

## Características principales

- Registro e inicio de sesión básico (demo): `src/services/authService.js` guarda usuarios en `localStorage`.
- Crear y listar reseñas con puntuación en estrellas (`StarRating`).
- Guardado de reseñas: se intenta enviar a `http://localhost:3000/reviews`; si falla, se guarda en `localStorage` como fallback.
- Estadísticas personales: registrar horas jugadas por usuario y ver entradas recientes (guardadas en `localStorage` por usuario).

## Rutas principales

- `/` — Login
- `/register` — Registro de usuario
- `/Biblioteca` — Biblioteca de juegos (protegida)
- `/reseñas` — Lista de reseñas (protegida)
- `/estadisticas` — Estadísticas personales (protegida)

Revisa `src/App.jsx` para la configuración actual de rutas.

## Requisitos

- Node.js v16+ (recomendado)
- npm

## Instalación y ejecución (PowerShell / Windows)

```powershell
cd C:\Users\USER\OneDrive\Desktop\frontend-main
npm install
npm run dev    # arranca Vite en http://localhost:5173/
```

## Scripts útiles

- `npm run dev` — inicia servidor de desarrollo (Vite)
- `npm run build` — construye para producción
- `npm run preview` — preview del build
- `npm run lint` — ejecuta ESLint

## Archivos y estructura relevantes

- `src/components/Login.jsx` — componente de inicio de sesión
- `src/components/Register.jsx` — formulario de registro
- `src/components/StarRating.jsx` — componente de estrellas (reutilizable)
- `src/components/ReviewForm.jsx` — formulario para crear reseñas
- `src/components/ReseñaCard.jsx` — tarjeta que muestra reseña y estrellas
- `src/services/reseñasService.js` — funciones `getReseñas()`, `addReseña()` y `getLocalReseñas()` (fallback local)
- `src/services/authService.js` — registro y validación simple usando `localStorage`
- `src/pages/EstadisticasPersonales.jsx` — UI para registrar horas y ver entradas

## Notas de desarrollo

- El sistema de autenticación es un stub para demo: no usar en producción. En producción se debe emplear un backend con hashing seguro (bcrypt), sesiones o JWT.
- Las reseñas intentan guardarse en `http://localhost:3000/reviews` (API JSON). Si no hay backend disponible, las reseñas se almacenan en `localStorage` bajo la clave `hg_reviews`.
- Las estadísticas de horas se guardan por usuario en `localStorage` bajo `hg_stats_<userId>`.

## Mejoras recomendadas

- Integrar un backend real para autenticación y persistencia de reseñas.
- Hashear contraseñas y no almacenarlas en el cliente.
- Validación y UX mejorada en formularios (mensajes en línea en lugar de `alert`).
- Permitir editar/eliminar reseñas con confirmaciones y manejo de sincronización entre local y remoto.
- Añadir pruebas unitarias para componentes y servicios.

## Contribuir

1. Crea una rama: `git checkout -b feature/mi-cambio`
2. Haz tus cambios y commitea: `git commit -am "Descripción"`
3. Push y PR: `git push origin feature/mi-cambio` y abre un Pull Request en GitHub.




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
