import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    base: "/",
    plugins: [react()],
  };

  if (command !== "serve") {
    config.base = "/hkdl_2024/";
  }

  return config;
});
