import { useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import user from "../../assets/images/user.png";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className="container"
      initial="hidden"
      animate="visible"
      variants={menuVariants}
    >
      <nav className="navbar">

        {/* LOGO */}
        <motion.div
          className="navbar__brand"
          variants={itemVariants}
        >
          <img
            src={logo}
            alt="logo"
            className="navbar__img"
            width="80"
          />

          <h1 className="navbar__logo">
            POLI
            <span className="navbar__logo--primary">
              -TASK
            </span>
          </h1>
        </motion.div>

        {/* BOTÓN MENÚ HAMBURGUESA (Visible en pantallas pequeñas) */}
        <button 
          className={`hamburger ${menuOpen ? "is-active" : ""}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* MENÚ DE NAVEGACIÓN */}
        <ul className={`navbar__menu ${menuOpen ? "active" : ""}`}>
          {[
            ["Inicio", "#inicio"],
            ["Nosotros", "/nosotros"],
            ["App", "/app"],
            ["Recompensas", "/recompensas"],
            ["Galería", "/galeria"],
            ["Contacto", "/contacto"],
          ].map(([text, href], index) => (
            <motion.li
              key={index}
              variants={itemVariants}
            >
              {text === "Inicio" ? (
                <motion.a
                  href={href}
                  onClick={closeMenu}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                    color: "#3f2beb",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  {text}
                </motion.a>
              ) : (
                <NavLink
                  className="navbar__link"
                  to={href}
                  onClick={closeMenu}
                >
                  {text}
                </NavLink>
              )}
            </motion.li>
          ))}
        </ul>

        {/* BOTÓN DARK MODE + LOGIN */}
        <motion.div
          className="navbar__actions"
          variants={itemVariants}
        >
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Cambiar tema"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <div className="navbar__login">
            <Link
              to="/login"
              className="navbar__login-link"
              onClick={closeMenu}
            >
              <img
                src={user}
                alt="user"
                width="40"
              />

              <motion.span
                whileHover={{
                  scale: 1.08,
                  color: "#873114",
                }}
              >
                Login
              </motion.span>
            </Link>
          </div>
        </motion.div>

      </nav>
    </motion.header>
  );
}

export default Navbar;