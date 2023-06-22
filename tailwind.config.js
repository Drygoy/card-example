/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./nuxt.config.js",
    "./app.vue",
  ],
  theme: {
   extend: {
    colors: {
      'card': 'var(--card-color)',
      'primary': 'var(--primary-color)',
      'text': '#fff'
    },
    backgroundSize: {
      'hovered': '110%',
    },
    boxShadow: {
      'cardsh': '1px 1px 26px -1px',
    }
  }
  },
  plugins: [],
}

