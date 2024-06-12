/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        grayTop: "rgb(194, 201, 207)",
        grayBottom: "rgb(98 , 102 , 105)",
        headblue: "rgb(123 , 190 , 252)",
      },
      screens: {
        sm: "0px",
        md: "600px",
      },
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
