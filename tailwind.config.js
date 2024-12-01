/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*html"],
  theme: {
    extend: {
      filter: ['invert'],
      fontFamily: {
        'segoe': ['"Segoe UI"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

