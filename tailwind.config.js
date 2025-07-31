/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        github: {
          light: {
            bg: '#ffffff',
            text: '#24292f',
            border: '#d0d7de',
            primary: '#0969da',
            secondary: '#57606a',
            accent: '#218bff',
            muted: '#f6f8fa',
            success: '#2da44e',
          },
          dark: {
            bg: '#0d1117',
            text: '#c9d1d9',
            border: '#30363d',
            primary: '#58a6ff',
            secondary: '#8b949e',
            accent: '#1f6feb',
            muted: '#161b22',
            success: '#238636',
          }
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Noto Sans', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji'],
      },
    },
  },
  plugins: [],
} 