import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["", ""],
      },
      keyframes: {
        zoomIn: {
          "0%": {
            transform: "scale(0.7)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
      animation: {
        zoomIn: "zoomIn 0.3s ease-out",
      },
    },
  },
  plugins: [tailwindcss()],
});
