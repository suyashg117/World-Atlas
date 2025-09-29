import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {           // <-- put host/port/open here
    host: '0.0.0.0', // allows LAN access
    port: 5177,      // set your desired port
    open: true       // automatically opens browser
  }
});
