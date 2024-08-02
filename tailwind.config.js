/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        crow: "url('/src/assets/Crows/crow.webp')",
        crow1: "url('/src/assets/Crows/crow1.webp')",
      },
    },
  },
  plugins: [],
};
