module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./components/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        mw: ["Merriweather"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
