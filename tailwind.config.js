/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      fontSize: {
        15: "15px",
        14: "14px",
      },
      colors: {
        sombres: {
          nav: "#1A242F",
          navCategories: "#111D27",
          footer: "#222222",
          globalBackground: "#0F171E",
          loginMenu: "#252E39",
          grayText: "#8197a4",
        },
        clairs: {
          buttonsBlue: "#0F79AF",
          buttonsBlueHover: "#1399DE",
          buttonsOrange: "#FFA724",
          buttonsOrangeHover: "#FFBB57",
          buttonsOrangelogin: "#F2C861",
          navLinks: "#c4cacf",
        },
      },
      maxWidth: {
        navMW: "125px",
        nameW: "120px",
      },
      maxHeight: {
        navLangVh: "60vh",
      },
      borderColor: {
        navLi: "#323e4c",
      },
    },
  },
  plugins: [],
};
