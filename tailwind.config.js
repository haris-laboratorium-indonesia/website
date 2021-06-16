const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./components/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: "#262626",
      white: "#FFFFFF",
      gray: colors.trueGray,
      red: colors.red,
      rose: colors.rose,
      yellow: colors.yellow,
      green: colors.green,
      cyan: colors.cyan,
      blue: colors.blue,
      fuschsia: colors.fuchsia,
    },
    extend: {
      fontFamily: {
        inter: ["Inter"],
        mw: ["Merriweather"],
      },

      backgroundImage: (theme) => ({
        "landing-page": "url('/monterey-light.jpg')",
        
      }),
      colors: {
        blue: {
          harislab: "#007AFF",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
