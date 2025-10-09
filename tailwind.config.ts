import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        blush: {
          50: '#fff1f5',
          100: '#ffe4ec',
          200: '#ffc9d9',
          300: '#ff9fb9',
          400: '#ff6d95',
          500: '#f64c7b',
          600: '#e03669',
          700: '#bd2756',
          800: '#9c234a',
          900: '#821f3f'
        }
      }
    }
  },
  plugins: []
} satisfies Config;
