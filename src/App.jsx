import { useState, useEffect, lazy, Suspense } from "react";
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
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

import appFirebase from "./firebase";
console.log("Firebase conectado:", appFirebase);

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Chatbot = lazy(() => import("./components/Chatbot/Chatbot"));

const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const AppPage = lazy(() => import("./pages/AppPage"));
const Contacto = lazy(() => import("./pages/Contacto"));
const Galeria = lazy(() => import("./pages/Galeria"));
const Recompensas = lazy(() => import("./pages/Recompensas"));

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Rewards />
      <Download />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
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
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <Suspense fallback={<div className="app-loading">Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/recompensas" element={<Recompensas />} />
        </Routes>
      </Suspense>

      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>

      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

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