/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Custom color scheme for light/dark mode
        primary: {
          light: '#ffffff',
          dark: '#121212',
        },
        secondary: {
          light: '#f8f9fa',
          dark: '#1e1e1e',
        },
        text: {
          light: '#333333',
          dark: '#e0e0e0',
        },
      },
    },
  },
  plugins: [],
}