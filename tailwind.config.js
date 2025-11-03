/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066CC',
          foreground: '#ffffff',
          50: '#E6F2FF',
          100: '#CCE5FF',
          600: '#0066CC',
          700: '#0052A3',
        },
        secondary: {
          DEFAULT: '#10B981',
          foreground: '#ffffff',
          50: '#ECFDF5',
          100: '#D1FAE5',
          600: '#10B981',
          700: '#047857',
        },
        accent: {
          DEFAULT: '#F59E0B',
          foreground: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}