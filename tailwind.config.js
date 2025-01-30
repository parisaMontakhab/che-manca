/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",

  theme: {
    extend: {
      fontFamily: {
        iranYekan: ["IranYekan", "sans-serif"],
      },
      margin: {
        "5p": "5%", // Add a custom class for 5% margin
      },
      colors: {
        customGray: "#6b7280",
        customRed: "#a62626",
        customBlu: "#05017b",
        customYellow: "#ffc107",
        customGrayHover: "#575656",
        customBluHover:"#292778 ",
        customWhite:"#fff"
      },
    },
  },
  plugins: [],
};
