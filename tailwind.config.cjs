/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{astro,html,js,ts,mdx}'],
  theme: {
    extend: {
      colors: {
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'accent-muted': 'rgb(var(--accent-muted) / <alpha-value>)',
        'accent-bright': 'rgb(var(--accent-bright) / <alpha-value>)',
        charcoal:  'rgb(var(--charcoal) / <alpha-value>)',
        background:'rgb(var(--background) / <alpha-value>)',
        'background-alt': 'rgb(var(--background-alt) / <alpha-value>)',
        foreground:'rgb(var(--foreground) / <alpha-value>)',
        'foreground-muted': 'rgb(var(--foreground-muted) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Chillax"', 'sans-serif'],
        sans:    ['"Outfit"',  'sans-serif'],
      },
    },
  },
  darkMode: 'class',
};
