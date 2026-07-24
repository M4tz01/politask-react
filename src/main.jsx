import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";

import { registerSW } from 'virtual:pwa-register'


registerSW({
  onOfflineReady() {
    console.log('PoliTask está disponible sin conexión')
  },

  onNeedRefresh() {
    console.log('Hay una nueva versión disponible')
  }
})


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);




