/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        epilogue: ["Epilogue", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#d3e0fb",
          200: "#a8c1f7",
          300: "#7ca1f3",
          400: "#5182ef",
          500: "#2563eb",
          600: "#1e4fbc",
          700: "#163b8d",
          800: "#0f285e",
          900: "#07142f"
        },
        secondary: {
          100: "#d2d9ef",
          200: "#a5b3df",
          300: "#788ccf",
          400: "#4b66bf",
          500: "#1e40af",
          600: "#18338c",
          700: "#122669",
          800: "#0c1a46",
          900: "#060d23"
        }
      }
    },
  },
  plugins: [],
}