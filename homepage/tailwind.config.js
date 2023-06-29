/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./index.html"],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter var, sans-serif"] },
    },
  },
  plugins: [],
};
