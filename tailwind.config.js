const BLOG = require('./blog.config')
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require("tailwindcss/colors")

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: BLOG.appearance === 'auto' ? 'media' : 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        day: {
          DEFAULT: BLOG.lightBackground || '#ffffff'
        },
        night: {
          DEFAULT: BLOG.darkBackground || '#111827'
        },
        ...colors
      },
      fontFamily: {
        sans: ['"Open Sans"', ...fontFamily.sans],
        serif: ['"Source Serif"', ...fontFamily.serif],
        noEmoji: [
          '"Open Sans"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif'
        ]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
