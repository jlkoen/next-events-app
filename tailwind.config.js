/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'dull-lavender': {
          50: '#f6f6fc',
          100: '#eeeef9',
          200: '#dfdff5',
          300: '#c5c5ed',
          400: '#adaae4',
          500: '#877ed4',
          600: '#7261c6',
          700: '#614fb2',
          800: '#514196',
          900: '#44377b',
          950: '#2a2352'
        }
      }
    }
  },
  plugins: []
};
