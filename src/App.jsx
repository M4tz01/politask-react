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

import appFirebase from "./firebase";
console.log("Firebase conectado:", appFirebase);

function Home({ darkMode, setDarkMode }) {
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Rewards />
      <Download />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
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
    /* Envolvemos TODO dentro de un div con la clase .app y condicionalmente .dark */
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/recompensas" element={<Recompensas />} />
      </Routes>
    </div>
  );
}

export default App;