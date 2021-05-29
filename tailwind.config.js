module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./components/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow:{
      hero: '0 10px 15px -3px rgba(59, 130, 246, 0.5), 0 4px 6px -2px rgba(59, 130, 246, 0.1)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: '0 0 0 0 rgba(59, 130, 246, 0.5), 0 0 0 0 rgba(59, 130, 246, 0.1)',
    },
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
