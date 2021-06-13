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
      boxShadow: {
        hero: "0 4px 6px -1px rgba(0, 122, 255, 0.5), 0 2px 4px -1px rgba(0, 122, 255, 0.05)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        none: "0 0 0 0 rgba(59, 130, 246, 0.5), 0 0 0 0 rgba(59, 130, 246, 0.1)",
      },
      backgroundImage: (theme) => ({
        "landing-page": "url('/monterey.jpg')",
      }),
      colors: {
        blue: {
          harislab: "#007AFF",
        },
        // black: "#1D1D1F",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
