/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0a192f', // Azul marino muy oscuro
        'primary': '#64ffda',    // Cian/verde menta de acento
        'card': '#112240',       // Un azul un poco más claro para las tarjetas
        'light-text': '#ccd6f6',   // Blanco suave para texto principal
        'dark-text': '#8892b0',    // Gris azulado para texto secundario
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'], // Establecemos Poppins como fuente por defecto
      }
    },
  },
  plugins: [],
};