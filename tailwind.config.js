/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'my-green': '#898b49',
        'my-beige': '#fce5af',
        'my-black': '#192823'
      },
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
        mogra: ['Mogra', 'cursive']
      }
    },
  },
  plugins: [],
}

