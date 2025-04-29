/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{astro,html,js,ts,mdx}'],
  theme: {
    extend: {
      colors: {
        accent: '#ff00ff',        // Debug Magenta
        'accent-muted': '#e600e6',
        charcoal:  '#1a1a1a',     // alt band
        background:'#111111',     // main canvas
        foreground:'#e5e5e5',
      },
      fontFamily: {
        display: ['"Chillax"', 'sans-serif'],
        sans:    ['"Outfit"',  'sans-serif'],
      },
    },
  },
  darkMode: 'class',
};
