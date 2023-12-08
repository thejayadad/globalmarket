/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
          primary: '#000000',
          secondary: '#ed7a07',
          eclipse: '#636c6e',
          cloud: '#929292',
          sea: '#7aa39a'

        }
    },
  },
  plugins: [],
}
