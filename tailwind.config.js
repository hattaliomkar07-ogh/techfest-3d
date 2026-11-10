/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#F8FAFC',
          ice: '#EAF5FF',
          lavender: '#F1EDFF',
        },
        brand: {
          blue: '#2864FF',
          violet: '#7957FF',
          cyan: '#36C5F0',
          coral: '#FF826E',
          orange: '#FFB45C',
          navy: '#0B1528',
          slate: '#334155',
          muted: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(40, 100, 255, 0.08)',
        'glass-hover': '0 16px 40px 0 rgba(121, 87, 255, 0.16)',
        'glow-blue': '0 0 35px -5px rgba(40, 100, 255, 0.4)',
        'glow-violet': '0 0 35px -5px rgba(121, 87, 255, 0.4)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(2deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
