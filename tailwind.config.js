module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'vert-interra': '#6dbe7b',
        'orange-interra': '#f08e32',

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
