/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: 'rgb(var(--color-bg) / <alpha-value>)',
        cardBg: 'rgb(var(--color-card) / <alpha-value>)',
        cardHover: 'rgb(var(--color-card-hover) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: '#A89DF5', // keeping this static for gradients
        textPrimary: 'rgb(var(--color-text) / <alpha-value>)',
        textMuted: 'rgb(var(--color-text-muted) / <alpha-value>)',
        borderColor: 'rgb(var(--color-border) / <alpha-value>)',
        
        // These are kept for backward compatibility if used explicitly anywhere
        lightBg: '#F8F8FF',
        lightCard: '#FFFFFF',
        lightText: '#0D0D1A',
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}