import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Rewards from "./components/Rewards/Rewards";
import Download from "./components/Download/Download";
import Gallery from "./components/Gallery/Gallery";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Chatbot from "./components/Chatbot/Chatbot";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import AboutUs from "./pages/AboutUs";
import AppPage from "./pages/AppPage";
import Contacto from "./pages/Contacto";
import Galeria from "./pages/Galeria";
import Recompensas from "./pages/Recompensas";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import appFirebase from "./firebase";
console.log("Firebase conectado:", appFirebase);

function Home({ darkMode, setDarkMode }) {
  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Rewards darkMode={darkMode} />
      <Download darkMode={darkMode} />
      <Gallery darkMode={darkMode} />
      <FAQ darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />

      <Chatbot />
    </>
  );
}

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={darkMode ? "app dark" : "app"}>

      <Routes>

        <Route
          path="/"
          element={
            <Home
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />

        <Route
          path="/register"
          element={<Register darkMode={darkMode} />}
        />

        <Route
          path="/login"
          element={<Login darkMode={darkMode} />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard darkMode={darkMode} />}
        />

        <Route
          path="/nosotros"
          element={<AboutUs darkMode={darkMode} />}
        />

        <Route
          path="/app"
          element={<AppPage darkMode={darkMode} />}
        />

        <Route
          path="/contacto"
          element={<Contacto darkMode={darkMode} />}
        />

        <Route
          path="/galeria"
          element={<Galeria darkMode={darkMode} />}
        />

        <Route
          path="/recompensas"
          element={<Recompensas darkMode={darkMode} />}
        />

      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />

    </div>
  );
}

export default App;