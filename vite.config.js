import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


import { VitePWA } from 'vite-plugin-pwa'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      manifest: {
        name: 'PoliTask',
        short_name: 'PoliTask',
        description: 'Plataforma de tutorías entre estudiantes',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/pro.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pro.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})