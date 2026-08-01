import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#080C18',
        deep: '#0F1629',
        nebula: '#2B4AFF',
        filament: '#C4A24E',
        signal: '#00E5A0',
        star: '#F0F2FA',
        dust: '#6B7394',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'Times New Roman', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
