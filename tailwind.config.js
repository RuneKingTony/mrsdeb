// tailwind.config.js
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#1b1b1b', raised: '#2b2b2b', deep: '#141414' },
        gold: { DEFAULT: '#ca8a04', bright: '#dfa21c' },
        bone: '#f4efe4',
        stone: '#a8a29e',
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        script: ['Ballet', 'cursive'],
      },
      maxWidth: {
        page: '88rem',
      },
    },
  },
  plugins: [],
}
