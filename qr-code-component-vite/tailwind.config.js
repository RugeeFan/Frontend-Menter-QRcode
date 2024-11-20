/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          900: "#1F314F",
          500: "#68778D",
          300: "#D5E1EF",
        },
        white: "#FFFFFF",
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        'preset-1': ['22px', '120%'],
        'preset-2': ['15px', '140%'],
      },
      letterSpacing: {
        tightest: '0px',
        wider: '0.2px',
      },
      spacing: {
        500: "40px", 
        300: "24px",
        200: "16px",
      },
    },
  },
  plugins: [],
};
