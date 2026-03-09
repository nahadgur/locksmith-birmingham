// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F6F0F4',
          100: '#E8D9E4',
          200: '#D2B6CB',
          300: '#B98DAE',
          400: '#9A5A8A',
          500: '#81316D',
          600: '#6D295C',
          700: '#57214A',
          800: '#3D1734',
          900: '#290F22',
          950: '#170813',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      keyframes: {
        'backdrop-in':  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'backdrop-out': { '0%': { opacity: '1' }, '100%': { opacity: '0' } },
        'modal-in':  { '0%': { opacity: '0', transform: 'scale(0.9) translateY(20px)' }, '100%': { opacity: '1', transform: 'scale(1) translateY(0)' } },
        'modal-out': { '0%': { opacity: '1', transform: 'scale(1) translateY(0)' }, '100%': { opacity: '0', transform: 'scale(0.9) translateY(20px)' } },
      },
      animation: {
        'backdrop-in':  'backdrop-in 0.3s ease-out',
        'backdrop-out': 'backdrop-out 0.3s ease-in',
        'modal-in':     'modal-in 0.3s ease-out',
        'modal-out':    'modal-out 0.3s ease-in',
      },
    },
  },
  plugins: [],
};
