import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import alias from '@rollup/plugin-alias'
import { resolve } from 'path'

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: '',
    define: {
      'process.env.REACT_API_KEY': JSON.stringify(env.REACT_API_KEY),
      'process.env.REACT_APP_API_BASE_URL': JSON.stringify(env.REACT_APP_API_BASE_URL),
      'process.env.REACT_APP_IMAGE_URL': JSON.stringify(env.REACT_APP_IMAGE_URL)
    },
    resolve: {
      alias: {
        "~": resolve(projectRootDir, "src"),
      },
    },
    plugins: [
      react(),
      tsconfigPaths({ root: './' }),// also tried without parameter
      alias()
    ],
  }
})