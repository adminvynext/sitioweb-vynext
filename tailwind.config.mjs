/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4b00ff',
          dark: '#3a00cc',
          light: '#6b2aff',
        },
        secondary: {
          DEFAULT: '#00cffe',
          dark: '#00a8cc',
          light: '#5dd8ff',
        },
        accent: {
          DEFAULT: '#5f1cff',
        },
        tertiary: {
          DEFAULT: '#666666',
          dark: '#333333',
          light: '#999999',
        },
        'bg-dark': '#ffffff',
        'bg-darker': '#f8f9fa',
        'bg-light': '#f0f2f5',
        'text-primary': '#1a1a24',
        'text-secondary': '#666666',
        'text-muted': '#999999',
      },
      fontFamily: {
        conthrax: ['Conthrax', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
