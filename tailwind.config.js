/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Marca SB Studio: negro profundo + azul eléctrico
        brand: {
          50: "#e9f2ff",
          100: "#cfe2ff",
          200: "#9cc5ff",
          300: "#66a4ff",
          400: "#3b82f6",
          500: "#1d6fff", // azul eléctrico principal (acento)
          600: "#0b57e0",
          700: "#0a45b3",
          800: "#0b389c", // añadido para consistencia
          900: "#0c2f7a",
        },
        ink: {
          400: "#64748b", // texto tenue
          500: "#475569",
          600: "#334155",
          700: "#1b2436",
          800: "#111827",
          900: "#0a0e17",
          950: "#05070d", // fondo oscuro principal
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Sora",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(29,111,255,0.15), 0 10px 40px -10px rgba(29,111,255,0.35)",
        card: "0 1px 2px rgba(0,0,0,0.06), 0 8px 30px -12px rgba(0,0,0,0.25)",
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.8s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
