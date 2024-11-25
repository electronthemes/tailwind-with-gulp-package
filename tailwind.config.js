module.exports = {
  purge: ['./src/**/*.html', './src/**/*.twig'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      // Color
      colors: {
        'primary': '#BB976D',
        'secondary': '#E13939',
        'tertiary': '#85A3B4',
      },
      maxWidth: {
        '1366': '1366px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}

