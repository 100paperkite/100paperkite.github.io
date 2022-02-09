const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Spoqa Han Sans Neo', ...defaultTheme.fontFamily.sans],
        title: 'Roboto Mono',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
