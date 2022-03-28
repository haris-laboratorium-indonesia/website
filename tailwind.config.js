const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.tsx',
    './pages/**/**/*.tsx',
    './components/**/*.tsx',
    './components/*.tsx',
  ],
  theme: {
    textIndent: (theme, { negative }) => ({
      ...{
        no: '0rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
      },
    }),
    screens: {
      xs: '450px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },

    extend: {
      colors: {
        harislab: '#007AFF',
        black: '#262626',
        white: '#FFFFFF',
      },
      strokeWidth: {
        1.5: '1.5',
        2: '2',
      },
      zIndex: {
        90: '90',
      },
      animation: {
        'background-spin': 'halfSpin 10s ease-in-out infinite',
      },
      fontFamily: {
        inter: ['Inter'],
        mw: ['Merriweather'],
      },
      fontSize: {
        tiny: '.900rem',
        landingPage: '2.7rem',
      },
      scale: {
        101: '1.01',
        102: '1.02',
      },
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-text-indent')()],
};

// gray: colors.gray,
// red: colors.red,
// orange: colors.orange,
// lime: colors.lime,
// rose: colors.rose,
// yellow: colors.yellow,
// amber: colors.amber,
// green: colors.green,
// emerald: colors.emerald,
// teal: colors.teal,
// sky: colors.sky,
// cyan: colors.cyan,
// blue: colors.blue,
// pink: colors.pink,
// purple: colors.purple,
// indigo: colors.indigo,
// fuschsia: colors.fuchsia,
// violet: colors.violet,
