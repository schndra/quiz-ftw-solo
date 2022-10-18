/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "512px",
      md: "780px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      width: {
        vw: "90vw",
        fixed: "500px",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
