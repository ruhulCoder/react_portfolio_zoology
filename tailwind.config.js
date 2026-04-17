/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        forest: {
          50:  '#f0faf4',
          100: '#dcf5e6',
          200: '#b8eacc',
          300: '#84d6a9',
          400: '#4aba7e',
          500: '#26a05a',
          600: '#178246',
          700: '#126838',
          800: '#10532e',
          900: '#0d4426',
          950: '#072a18',
        },
        amber: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        earth: {
          50:  '#faf8f5',
          100: '#f2ede4',
          200: '#e5dccb',
          300: '#d3c5aa',
          400: '#bea888',
          500: '#a98f6d',
          600: '#8c7254',
          700: '#725b42',
          800: '#5e4a37',
          900: '#4e3e30',
        },
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%':   { opacity: '0', transform: 'translateY(-16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%, 100%': { transform: 'scale(1)',   opacity: '0.6' },
          '50%':       { transform: 'scale(1.12)', opacity: '0' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-8px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':       { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'fadeInUp':    'fadeInUp 0.65s ease-out forwards',
        'fadeIn':      'fadeIn 0.5s ease-out forwards',
        'slideDown':   'slideDown 0.35s ease-out forwards',
        'pulseRing':   'pulseRing 2.4s ease-in-out infinite',
        'shimmer':     'shimmer 3s linear infinite',
        'float':       'float 4s ease-in-out infinite',
        'gradientShift': 'gradientShift 8s ease infinite',
      },
      backgroundSize: {
        '200%': '200%',
        '300%': '300%',
      },
      boxShadow: {
        'glow-amber': '0 0 20px rgba(251, 191, 36, 0.4)',
        'glow-forest': '0 0 20px rgba(18, 104, 56, 0.35)',
        'card': '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.14)',
      },
    },
  },
  plugins: [],
}
