import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
import { resolve } from 'path';

// Carregue as variáveis de ambiente do arquivo .env
// dotenv.config({ path: resolve(__dirname, '.env') });

// var urlBack = process.env.REACT_ENV === 'dev' ? 'http://localhost:8080' : 'http://10.0.0.170:8080'

export default defineConfig({
  plugins: [react()],
});