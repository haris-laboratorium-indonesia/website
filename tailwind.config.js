// const { urlObjectKeys } = require('next/dist/next-server/lib/utils')
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.tsx', './components/**/*.tsx', './components/List/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textIndent: (theme, { negative }) => ({
      ...{
        no: '0rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
      },
    }),
    colors: {
      harislab: '#007AFF',
      black: '#262626',
      white: '#FFFFFF',
      gray: colors.trueGray,
      red: colors.red,
      orange: colors.orange,
      lime: colors.lime,
      rose: colors.rose,
      yellow: colors.yellow,
      amber: colors.amber,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      sky: colors.sky,
      cyan: colors.cyan,
      blue: colors.blue,
      pink: colors.pink,
      purple: colors.purple,
      indigo: colors.indigo,
      fuschsia: colors.fuchsia,
    },
    extend: {
      fontFamily: {
        inter: ['Inter'],
        mw: ['Merriweather'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-text-indent')()],
};
