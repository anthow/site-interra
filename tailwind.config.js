module.exports = {
  content: [ './public/**/*.html',    './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'vert-interra': '#5FAF74',
        'orange-interra': '#FA871C',
        'bleu-interra': '#113A4C',
        'jaune-interra': '#FDB516',
        'vert-clair-interra': '#F6FFFE',
        'orange-clair-interra': '#FFBF83',


      }
    },
  },
  variants: {
    extend: {
      order: ['odd'],
      order: ['even'],
    },
  },
  plugins: [],
}
