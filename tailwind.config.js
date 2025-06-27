/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown': {
          700: '#8B5C2A', // marrom para detalhes
        },
        'orange': {
          500: '#FF7A1A', // laranja principal para destaques e botões
          600: '#FF6600', // laranja mais escuro para hover
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "Lato", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}; 