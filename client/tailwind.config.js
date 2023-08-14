/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Sig: ["Lato", "sans-serif"],
        title: ["Libre Franklin", "sans serif"],
      },
      boxShadow: {
        "focus-purple": "0 0 5px 5px purple",
      },
    },
  },
  plugins: [],
};
