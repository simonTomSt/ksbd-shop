import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: '#49A078',
            secondary: '#010101',
          },
        },
        dark: {
          colors: {
            primary: '#49A078',
          },
        },
      },
    }),
  ],
};

module.exports = config;
