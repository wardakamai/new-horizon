/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          teal:      '#187767',
          tealDark:  '#0f5049',
          tealDeep:  '#0a3530',
          gold:      '#c9a24b',
          goldLight: '#e2bc73',
          cream:     '#faf8f4',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body:    ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
