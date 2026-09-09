import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'mock-api',
      configureServer(server) {
        server.middlewares.use('/api/checkout', (req, res) => {
          if (req.method === 'POST') {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
              success: true,
              message: 'Simulação local (Backend Asaas não configurado ainda)',
              redirectUrl: '/obrigado'
            }));
          }
        });
      }
    }
  ],
})
