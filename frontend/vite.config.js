import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'altcha-widget',
        },
      },
    }),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  server: {
    host: '0.0.0.0',

    proxy: {
      '/api': {
        target: 'http://backend:8000',
        changeOrigin: true,
      },
      // Keeps the Host header at localhost:5174, so the ?next= URL Django builds
      // when /o/authorize/ redirects to the login page stays reachable.
      '/o': {
        target: 'http://backend:8000',
      },
    },
  },
})
