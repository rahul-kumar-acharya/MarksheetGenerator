const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "e:/StudentMarksheetGenerator/marksheet/core/templates/**/*.html",
    "./core/templates/**/*.html",
    "./core/templates/*.html",
    "./core/templates/admin/*.html",
    "./core/templates/institute/**/*.html",
    "./core/templates/institute/principal_admin/**/*.html",
    "./core/templates/institute/teacher_admin/**/*.html",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        slate: colors.slate,
        indigo: colors.indigo,
        emerald: colors.emerald,
        cyan: colors.cyan,
        blue: colors.blue,
        amber: colors.amber,
        rose: colors.rose,
        red: colors.red,
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        progress: {
          '0%': { width: '0%' },
          '50%': { width: '70%' },
          '100%': { width: '100%' }
        }
      },
      animation: {
        shimmer: 'shimmer 1.8s infinite',
        progress: 'progress 1.2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
