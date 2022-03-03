const defaultTheme = require('tailwindcss/defaultTheme');

const customCss = {
  css: {
    pre: false,
    code: {
      backgroundColor: '#F0F0F0',
      borderRadius: '0.45rem',
      padding: '0.225rem',
      paddingLeft: '0.3rem',
      paddingRight: '0.3rem',
      margin: '0.1rem',
    },
    'code::before': false,
    'code::after': false,
    'pre code': false,
  },
};

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Spoqa Han Sans Neo', ...defaultTheme.fontFamily.sans],
        title: 'Roboto Mono',
      },

      typography: {
        DEFAULT: customCss,
        base: customCss,
        md: customCss,
        sm: customCss,
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
