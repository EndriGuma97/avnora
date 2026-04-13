import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#2d3440',
          dark: '#1a1f2e',
          light: '#3d4555',
        },
        gold: {
          DEFAULT: '#b8976a',
          light: '#d4aa7d',
          dark: '#9a7a55',
          pale: '#e8d5b7',
        },
        cream: '#f0e6d3',
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.3em',
      },
    },
  },
  plugins: [],
}

export default config
