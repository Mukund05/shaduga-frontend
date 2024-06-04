/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "440px",
        cs: "1400px",
      },
      fontSize: {
        custom: "0.5rem",
        md: "16px",
      },
    },
  },
  plugins: [],
};
