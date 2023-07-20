/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        heading: ["Open Sans", ...defaultTheme.fontFamily.sans],
        category: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        body: "#ddd",
      },
      boxShadow: {
        header: "2px 4px 2px 0 #fde68a, -4px -2px 2px 0 #fde68a",
        search: "inset 1px 4px 1px #fde68a,  inset -1px -4px 1px #fde68a",
      },
    },
  },
  plugins: [],
};
