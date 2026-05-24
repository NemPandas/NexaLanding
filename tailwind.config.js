/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        neon: {
          pink: "#ff007a",
          magenta: "#ff2bbf",
          violet: "#a855f7",
        },
        midnight: "#05030d",
      },
      boxShadow: {
        neon: "0 0 32px rgba(255, 0, 122, 0.45)",
        "neon-soft": "0 0 80px rgba(255, 0, 122, 0.28)",
      },
    },
  },
  plugins: [],
};
