module.exports = {
  mode: 'jit', // Just-In-Time Compiler
  purge: ['./src/**/*.html', './src/**/*.twig'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    // Font Family
    // fontFamily: {
    //   Josefin: ['Josefin Sans', 'sans-serif'],
    //   julyIt: ['July it'],
    // },

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

