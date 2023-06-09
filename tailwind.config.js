/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "35px 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
    colors: {
      purple: "#7E33E0",
      secondPurple: "#5625DF",
      white: colors.white,
      pink: "#FB2E86",
      lightGray: "#8A8FB9",
      darkBlue: "#1A0B5B",
      gray: "#F6F7FB",
      green: "#05E6B7",
      secondPink: "#F701A8",
      primary: "#00009D",
      secondBlue: "#151875",
      darkGray: "#F7F7F7",
      secondGray: "#EEEFFB",
      thirdGray30: "#1A0B5B30",
      thirdBlue: "#2B2BF5",
      secondGreen: "#2BF5CC",
      fourthGray: "#ACABC3",
      fifthGray: "#F5F6F8",
      secondBlue30: "#15187530",
      lightPink: "#FFF6FB",
      sixthGray: "#B7BACB",
      seventhGray: "#72718F",
      thirdPink: "#E7E4F8",
      eigthGray: "#C2C5E1",
      fourthPink: "#FFE7F9",
      orange: "#FFECE2",
      subText: "#8A8FB9",
      fifthPink: "#FF27B7",
      fourthBlue: "#37DAF3",
      secondOrange: "#FFB265",
      thirdGreen: "#1BE982",
      ninthGray: "#A1ABCC",
      tenthGray: "#F8F8FD",
      eleventhGray: "#FBFBFF",
      thirdOrange: "#DE9034",
      sixthPink: "#EC42A2",
      thirdPurple: "#8568FF",
      twelfthGray: "#A9ACC6",
      thirteenthGray: "#F9F8FE",
      fourteenthGray: "#E8E6F1",
      fifteenthGray: "#F4F4FC",
      fourthGreen: "#19D16F",
      sixteenthGray: "#BFC6E0",
      seventeenthGray: "#FAFAFB",
      eighteenthGray: "#F7F8FB",
      nineteenthGray: "#A3A2B6",
      fourthOrange: "#DE9034",
      seventhPink: "#E60584",
      fourthPurple: "#5E37FF",
      twentiethGray: "#9295AA",
    },
    backgroundColor: {
      purple: "#7E33E0",
      secondPurple: "#5625DF",
      pink: "#FB2E86",
      lightGray: "#8A8FB9",
      darkBlue: "#1A0B5B",
      gray: "#F6F7FB",
      green: "#05E6B7",
      secondPink: "#F701A8",
      primary: "#00009D",
      secondBlue: "#151875",
      darkGray: "#F7F7F7",
      secondGray: "#EEEFFB",
      thirdBlue: "#2B2BF5",
      secondGreen: "#2BF5CC",
      fourthGray: "#ACABC3",
      fifthGray: "#F5F6F8",
      lightPink: "#FFF6FB",
      seventhGray: "#72718F",
      thirdPink: "#E7E4F8",
      eigthGray: "#C2C5E1",
      fourthPink: "#FFE7F9",
      orange: "#FFECE2",
      subText: "#8A8FB9",
      fifthPink: "#FF27B7",
      fourthBlue: "#37DAF3",
      secondOrange: "#FFB265",
      thirdGreen: "#1BE982",
      ninthGray: "#A1ABCC",
      tenthGray: "#F8F8FD",
      eleventhGray: "#FBFBFF",
      thirdOrange: "#DE9034",
      sixthPink: "#EC42A2",
      thirdPurple: "#8568FF",
      twelfthGray: "#A9ACC6",
      thirteenthGray: "#F9F8FE",
      fourteenthGray: "#E8E6F1",
      fifteenthGray: "#F4F4FC",
      fourthGreen: "#19D16F",
      sixteenthGray: "#BFC6E0",
      seventeenthGray: "#FAFAFB",
      eighteenthGray: "#F7F8FB",
      nineteenthGray: "#A3A2B6",
      fourthOrange: "#DE9034",
      seventhPink: "#E60584",
      fourthPurple: "#5E37FF",
      twentiethGray: "#9295AA",
    },
    borderColor: {
      purple: "#7E33E0",
      secondPurple: "#5625DF",
      pink: "#FB2E86",
      lightGray: "#8A8FB9",
      darkBlue: "#1A0B5B",
      gray: "#F6F7FB",
      green: "#05E6B7",
      secondPink: "#F701A8",
      primary: "#00009D",
      secondBlue: "#151875",
      darkGray: "#F7F7F7",
      secondGray: "#EEEFFB",
      thirdBlue: "#2B2BF5",
      secondGreen: "#2BF5CC",
      fourthGray: "#ACABC3",
      fifthGray: "#F5F6F8",
      lightPink: "#FFF6FB",
      seventhGray: "#72718F",
      thirdPink: "#E7E4F8",
      eigthGray: "#C2C5E1",
      fourthPink: "#FFE7F9",
      orange: "#FFECE2",
      subText: "#8A8FB9",
      fifthPink: "#FF27B7",
      fourthBlue: "#37DAF3",
      secondOrange: "#FFB265",
      thirdGreen: "#1BE982",
      ninthGray: "#A1ABCC",
      tenthGray: "#F8F8FD",
      eleventhGray: "#FBFBFF",
      thirdOrange: "#DE9034",
      sixthPink: "#EC42A2",
      thirdPurple: "#8568FF",
      twelfthGray: "#A9ACC6",
      thirteenthGray: "#F9F8FE",
      fourteenthGray: "#E8E6F1",
      fifteenthGray: "#F4F4FC",
      fourthGreen: "#19D16F",
      sixteenthGray: "#BFC6E0",
      seventeenthGray: "#FAFAFB",
      eighteenthGray: "#F7F8FB",
      nineteenthGray: "#A3A2B6",
      fourthOrange: "#DE9034",
      seventhPink: "#E60584",
      fourthPurple: "#5E37FF",
      twentiethGray: "#9295AA",
    },
  },
  plugins: [],
};
