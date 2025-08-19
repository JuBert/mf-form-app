import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from '@tailwindcss/vite'
import { writeFileSync } from 'fs'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/mf-form-app/', // Important for GitHub Pages
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'host-app',
      remotes: {
        remoteApp: 'https://jubert.github.io/mf-component-library/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'tailwindcss'],
    }),
    {
        name: 'add-nojekyll',
        writeBundle() {
            writeFileSync(resolve(__dirname, 'dist', '.nojekyll'), '');
        },
    }
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
