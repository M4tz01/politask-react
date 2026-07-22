import { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Rewards from "./components/Rewards/Rewards";
import Download from "./components/Download/Download";
import Gallery from "./components/Gallery/Gallery";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={darkMode ? "app dark" : "app"}>
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
    </div>
  );
}

export default App;