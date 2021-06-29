// const { urlObjectKeys } = require('next/dist/next-server/lib/utils')
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.tsx', './components/**/*.tsx', './components/List/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      harislab: '#007AFF',
      black: '#262626',
      white: '#FFFFFF',
      gray: colors.trueGray,
      red: colors.red,
      rose: colors.rose,
      yellow: colors.yellow,
      amber: colors.amber,
      green: colors.green,
      cyan: colors.cyan,
      blue: colors.blue,
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
  plugins: [require('@tailwindcss/typography')],
};
