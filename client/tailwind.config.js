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
        "focusDM-orange": "0 0 3px 3px #F0BE5E",
        "focusLM-purple": "0 0 5px 5px #875598",
        "outlineDM-purple":" 0 0 2px 2px #875598",
        "outlineLM-orange":" 0 0 2px 2px #F0BE5E"
      },
      colors: {
        DGLogin : '#1A3D36',
        LGLogin : '#63B9AA',
        DOLogin : '#F0BE5E',
        LPLogin : '#280137',
        DGrayLogin : '#5D6564',
        LGrayLogin : '#DADADA',
        BGboxDM : '#465F59',
        BGboxLM: '#DDFCF8',
        ContentBGDM: '#3E6F5D',
        lighterGray: '#6D7170'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
