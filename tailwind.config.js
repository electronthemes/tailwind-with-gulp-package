module.exports = {
  purge: ['./src/**/*.html', './src/**/*.twig'],
  // darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      ibmplex: ["IBM Plex Sans", 'sans-serif'],
      ibmplexMono: ["IBM Plex Mono", 'monospace'],
    },
    extend: {
      // Color
      colors: {
        'primary': '#faa21e',
        'secondary': '#006745',
        'tertiary': '#ab7029',
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
    require('@tailwindcss/typography'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1280px',
          },
        }
      })
    }
  ]
}

