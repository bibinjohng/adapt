import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './app/pages/**/*.{vue,js}', // <-- Add this line
    './app.vue',
    './nuxt.config.ts'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        dark: '#0a0a0a'
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
export default config
