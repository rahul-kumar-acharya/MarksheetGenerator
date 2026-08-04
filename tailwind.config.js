/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./marksheet/core/templates/**/*.html",
    "./marksheet/core/templates/*.html",
    "./marksheet/core/templates/admin/*.html",
    "./marksheet/core/templates/institute/**/*.html",
    "./marksheet/core/templates/institute/principal_admin/**/*.html",
    "./marksheet/core/templates/institute/teacher_admin/**/*.html",
  ],
  theme: {
    extend: {
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
