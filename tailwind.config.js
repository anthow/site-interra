module.exports = {
  content: [ './public/**/*.html',    './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'vert-interra': '#6dbe7b',
        'orange-interra': '#f08e32',

      }
    },
  },
  darkMode: false,
  variants: {
    extend: {
      order: ['odd'],
      order: ['even'],
    },
  },
  plugins: [],
}
