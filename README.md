# PoliTask 🦉

**PoliTask** es una plataforma web pensada para la comunidad estudiantil de la **Escuela Politécnica Nacional (EPN)**. Su objetivo es fomentar la colaboración entre estudiantes: cualquiera puede publicar una tarea que necesita ayuda, otros estudiantes pueden aceptarla, y al completarla se transfieren puntos que luego podrán canjearse por recompensas.

> Conecta, colabora y gana recompensas.

---

## 📑 Tabla de contenido

- [¿Cómo funciona?](#-cómo-funciona)
- [Características principales](#-características-principales)
- [Stack tecnológico](#-stack-tecnológico)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Puesta en marcha](#-puesta-en-marcha)
- [Variables de entorno / Firebase](#-variables-de-entorno--firebase)
- [Scripts disponibles](#-scripts-disponibles)
- [Despliegue](#-despliegue)
- [Roadmap](#-roadmap)
- [Contribuir](#-contribuir)

---

## 🎯 ¿Cómo funciona?

El corazón de PoliTask es un sistema de **tareas por puntos**:

1. **Registro** — El estudiante crea una cuenta (correo institucional o Google) y recibe **100 puntos iniciales**.
2. **Publicar una tarea** — Cualquier usuario puede crear una tarea con título, categoría, descripción y un valor en puntos (entre 1 y 1000). Ese valor se descuenta de su saldo al momento de publicarla.
3. **Aceptar una tarea** — Otro estudiante puede ver las tareas disponibles (estado *Pendiente*) y aceptarlas. No puedes aceptar tus propias tareas. Al aceptarla, el estado cambia a *En progreso*.
4. **Completar y recibir puntos** — Solo el dueño original de la tarea puede confirmar que fue completada. Al confirmar, el estado pasa a *Completada* y los puntos se transfieren a quien la resolvió.
5. **Editar / eliminar** — Solo el dueño de una tarea puede editarla o eliminarla. Si la elimina mientras sigue *Pendiente*, recupera los puntos gastados; si ya estaba *En progreso* o *Completada*, no hay devolución.
6. **Recompensas** *(próximamente)* — Los puntos acumulados podrán canjearse por beneficios dentro de la comunidad EPN.

Todo esto se gestiona desde el **Dashboard**, disponible tras iniciar sesión.

---

## ✨ Características principales

| Módulo | Descripción |
|---|---|
| 🏠 **Landing page** | Presentación de PoliTask: hero, sección "Nosotros", recompensas, descarga de la app, galería, FAQ y contacto. |
| 🔐 **Autenticación** | Registro e inicio de sesión con correo/contraseña o con Google, usando Firebase Auth. |
| 📋 **Dashboard** | Panel para publicar, aceptar, editar, completar y eliminar tareas, con estadísticas del usuario. |
| 🎁 **Recompensas** | Vista informativa del sistema de canje de puntos (en desarrollo). |
| 🖼️ **Galería** | Muestra de la comunidad y actividades de PoliTask. |
| 📬 **Contacto** | Formulario de contacto y redes sociales. |
| 🤖 **PoliBot** | Chatbot con IA (Gemini, vía Firebase AI Logic) que responde dudas sobre el funcionamiento de la plataforma. Disponible en todas las páginas. |
| 🌙 **Modo oscuro** | Tema claro/oscuro persistente (guardado en `localStorage`), aplicado a toda la aplicación, incluido el chatbot. |
| 📱 **Responsive** | Diseño adaptado a escritorio, tablet y celular. |

---

## 🛠 Stack tecnológico

- **[React 19](https://react.dev/)** + **[Vite](https://vitejs.dev/)** — SPA con carga diferida de rutas (`React.lazy` + `Suspense`).
- **[React Router DOM](https://reactrouter.com/)** — Enrutamiento.
- **[Firebase](https://firebase.google.com/)**
  - **Auth** — registro/login (correo y Google).
  - **Firestore** — base de datos de usuarios, tareas y puntos.
  - **Firebase AI Logic (Gemini)** — modelo detrás de PoliBot.
- **[React Hook Form](https://react-hook-form.com/)** — validación de formularios.
- **[Framer Motion](https://www.framer.com/motion/)** — animaciones de la interfaz.
- **[React Toastify](https://fkhadra.github.io/react-toastify/)** — notificaciones.
- **[Chart.js](https://www.chartjs.org/)** / **react-chartjs-2** — estadísticas del panel.
- **Firebase Hosting** — despliegue.

---

## 📂 Estructura del proyecto

```
politask-react/
├── public/                  # Assets estáticos
├── src/
│   ├── assets/images/       # Imágenes del sitio (WebP)
│   ├── components/          # Navbar, Hero, Footer, Chatbot, Gallery, FAQ, etc.
│   ├── pages/                # Login, Register, Dashboard, Galería, Recompensas, etc.
│   ├── styles/               # CSS por página + global.css
│   ├── utils/                 # Helpers (ej. usuarios.js)
│   ├── firebase.js           # Configuración e inicialización de Firebase
│   ├── App.jsx                # Enrutamiento principal y tema
│   └── main.jsx
├── firebase.json             # Config de Firebase Hosting
├── vite.config.js
└── package.json
```

---

## 🚀 Puesta en marcha

### Requisitos
- Node.js 18+
- Cuenta y proyecto en [Firebase](https://console.firebase.google.com/)

### Instalación

```bash
git clone https://github.com/<tu-usuario>/politask-react.git
cd politask-react
npm install
```

### Ejecutar en desarrollo

```bash
npm run dev
```

La app quedará disponible en `http://localhost:5173` (puerto por defecto de Vite).

---

## 🔑 Variables de entorno / Firebase

El archivo `src/firebase.js` contiene la configuración del proyecto de Firebase (`apiKey`, `authDomain`, `projectId`, etc.). Si vas a clonar este repo para tu propio proyecto de Firebase:

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com/).
2. Habilita **Authentication** (Correo/contraseña y Google).
3. Habilita **Firestore Database**.
4. Habilita **Firebase AI Logic** (Gemini Developer API) si quieres que PoliBot funcione.
5. Reemplaza el objeto `firebaseConfig` en `src/firebase.js` con las credenciales de tu propio proyecto.

> ⚠️ Las API keys de Firebase para apps web **no son secretas** por diseño (se restringen mediante las reglas de seguridad de Firestore/Auth, no ocultándolas), pero es buena práctica mantener tu propio proyecto separado del de producción si vas a experimentar.

---

## 📜 Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Levanta el servidor de desarrollo con hot reload. |
| `npm run build` | Genera la build de producción en `dist/`. |
| `npm run preview` | Sirve localmente la build de producción para probarla. |
| `npm run lint` | Corre ESLint sobre el proyecto. |

---

## ☁️ Despliegue

El proyecto se despliega en **Firebase Hosting**:

```bash
npm run build
firebase deploy 
```

Asegúrate de que tu `firebase.json` tenga configurado `"public": "dist"` y el rewrite de SPA (`"source": "**", "destination": "/index.html"`), para que las rutas de React Router (`/login`, `/dashboard`, etc.) no den 404 al recargar la página.

---

## 🗺 Roadmap

- [ ] Sistema de canje de recompensas (actualmente solo informativo).
- [ ] Notificaciones en tiempo real cuando alguien acepta/completa una tarea.
- [ ] Perfil público con historial de tareas y reputación.
- [ ] Mejoras de accesibilidad y rendimiento (Lighthouse).

---

## 📄 Licencia

Este proyecto es una iniciativa estudiantil de la comunidad de la Escuela Politécnica Nacional (EPN) enfocada en la colaboración entre estudiantes en el ámbito enseñanza-aprendizaje.
