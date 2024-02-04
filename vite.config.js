import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "./",
      "@@": "../",
      "react-bootstrap/Navbar": "react-bootstrap/esm/Navbar",
      "react-bootstrap/Badge": "react-bootstrap/esm/Badge",
      "react-bootstrap/Nav": "react-bootstrap/esm/Nav",
    },
  },
});
