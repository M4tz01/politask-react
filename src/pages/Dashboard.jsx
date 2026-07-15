import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí luego manejaremos el cierre de sesión real con Firebase
    console.log("Cerrando sesión...");
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "sans-serif" }}>
      {/* Sidebar / Menú Lateral */}
      <aside style={{
        width: "250px",
        backgroundColor: "#1e293b",
        color: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}>
        <div>
          <h2 style={{ marginBottom: "30px", color: "#38bdf8" }}>Poli-Task</h2>
          <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <a href="#tasks" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>📋 Mis Tareas</a>
            <a href="#projects" style={{ color: "#cbd5e1", textDecoration: "none" }}>📁 Proyectos</a>
            <a href="#settings" style={{ color: "#cbd5e1", textDecoration: "none" }}>⚙️ Configuración</a>
          </nav>
        </div>
        <button 
          onClick={handleLogout}
          style={{
            backgroundColor: "#ef4444",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Cerrar Sesión
        </button>
      </aside>

      {/* Contenido Principal */}
      <main style={{ flex: 1, backgroundColor: "#f8fafc", padding: "40px" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
          <h1>Bienvenido a tu Panel de Control</h1>
          <span style={{ fontSize: "0.9rem", color: "#64748b" }}>Usuario Activo</span>
        </header>

        <section style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
        }}>
          <h3>Tus próximas entregas</h3>
          <p style={{ color: "#64748b" }}>Aquí se listarán las tareas pendientes de tus materias...</p>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;