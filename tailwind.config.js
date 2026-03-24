/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#09090b',
          raised: '#0c0c0f',
          border: '#27272a',
        },
        accent: {
          DEFAULT: '#22d3ee',
          muted: 'rgba(34, 211, 238, 0.12)',
        },
      },
    },
  },
  plugins: [],
}

