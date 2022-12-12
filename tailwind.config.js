const { fontFamily } = require('tailwindcss/defaultTheme');

/* eslint-disable @typescript-eslint/explicit-function-return-type */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F44BB6',
        primaryHover: '#ffa1dc',
        secondary: '#447CF9',
        secondaryDark: '#1C3177', // eg, Edit Loan Structure title
        secondaryLight: '#447cf9', // eg, Dropdown select
        error: '#fff8e0',
        errorDark: '#FFBA00',
        success: '#27DA4C',
        grey: '#707070',
        lightGrey: '#D3D3D3',
        textPrimary: '#4E4E4E',

        offWhite: '#F7F7F7',
      },
      // screens: {
      //   lg: '1190px',
      // },
      boxShadow: {
        '3xl': '0 4px 4px rgb(0 0 0 / 25%)',
      },
      fontFamily: {
        primary: ['var(--cardo-font)', ...fontFamily.sans],
        serif: ['var(--cardo-font)', ...fontFamily.serif],
      },
    },
  },
  plugins: [
    // We have to use plugin to let intelligence pick up our custom classname's style
    // A time consuming process, but it's worth it
    // ref: https://github.com/tailwindlabs/tailwindcss-intellisense/issues/227
    ({ addUtilities }) => {
      addUtilities({});
    },
  ],
};
