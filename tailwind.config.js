/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#fefefe",
          DEFAULT: "#c77a63",
          dark: "#4B47EB",
        },
      },
      boxShadow: {
        custom: "rgba(17, 12, 46, 0.15) 80px 48px 100px 80px",
      },
    },
  },
  plugins: [],
};
