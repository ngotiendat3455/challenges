import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_API_KEY': JSON.stringify(env.REACT_API_KEY),
      'process.env.REACT_APP_API_BASE_URL': JSON.stringify(env.REACT_APP_API_BASE_URL),
    },
    plugins: [
      react(),
      tsconfigPaths({ root: './' })// also tried without parameter
    ],
  }
})