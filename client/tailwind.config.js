/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Sig: ["Lato", "sans-serif"],
        title: ["Libre Franklin", "sans serif"],
        robot: ["Roboto Serif", "sans serif"]
      },
      boxShadow: {
        "focusDM-orange": "0 0 5px 5px #F0BE5E",
        "focusDM-purple": "0 0 5px 5px purple"
      },
      colors: {
        DGLogin : '#1A3D36',
        LGLogin : '#63B9AA',
        DOLogin : '#F0BE5E',
        LPLogin : '#',
        DGrayLogin : '#5D6564',
        LGrayLogin : '#DADADA',
        BGboxDM : '#465F59',
        BGboxLM: '#DDFCF8'
      }
    },
  },
  plugins: [],
};
