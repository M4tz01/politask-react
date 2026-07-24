import "./ThemeToggle.css";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className="theme-toggle-fab"
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Cambiar tema"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;