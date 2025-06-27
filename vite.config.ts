import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: './', // Ensures relative paths for assets
  plugins: [vue()],
});
