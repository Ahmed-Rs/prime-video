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
          storeFont: "#ffcc00",
          primeLogoColor: "#00a5dd",
        },
      },
      width: {
        vidInfoWidth: "calc(50% - 48px)",
        cardItemWidth: "calc(25% - 23px)",
        searchDescWidth: "calc(45% - 23px)",
        searchImgWidth: "calc(65% - 23px)",
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
        newAccBorder: "#adb1b8 #a2a6ac #8d9096",
        loginBtn: "#a88734 #9c7e31 #846a29",
      },
      boxShadow: {
        newAcc: "0 1px 0 rgb(255 255 255 / 60%) inset",
        loginAcc: "0 1px 0 rgb(255 255 255 / 40%) inset",
        regInp: "0 1px 0 rgb(255 255 255 / 50%), 0 1px 0 rgb(0 0 0 / 7%) inset",
        videoPlay: "inset 0 0 0 2px #425265",
      },
      backgroundImage: {
        signDivider:
          "linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3px,transparent)",
        catPopular:
          "radial-gradient(ellipse at left top,rgba(29,79,115,.2) 10%,#0f171e 80%),radial-gradient(ellipse at left bottom,rgba(29,79,115,.1) 20%,#0f171e 80%)",
        navCatItem: "url(/welcome/nav-cat-item.png)",
        navCatItem2: "url(/welcome/nav-cat-item-2.png)",
        videoUnderlay:
          "linear-gradient(270deg,rgba(15,23,30,0),rgba(15,23,30,0) 85%,#0f171e)",
      },
    },
  },
  plugins: [],
};
