module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./components/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        inter:["Inter"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),],
};
