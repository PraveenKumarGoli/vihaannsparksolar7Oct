/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4fa',
          100: '#dbe5f3',
          200: '#b8c9e8',
          300: '#8aa6d6',
          400: '#5a7dbf',
          500: '#3a5da0',
          600: '#2c4783',
          700: '#233a6b',
          800: '#1a2d54',
          900: '#142342',
          950: '#0c1830',
        },
        gold: {
          50: '#fffaeb',
          100: '#fff1c6',
          200: '#ffe188',
          300: '#ffcb4a',
          400: '#ffb31f',
          500: '#f89607',
          600: '#db7503',
          700: '#b75306',
          800: '#943f0c',
          900: '#7a340d',
          950: '#461a02',
        },
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shine': 'shine 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        shine: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'solar-gradient': 'linear-gradient(135deg, #f89607 0%, #ffcb4a 100%)',
        'navy-gradient': 'linear-gradient(135deg, #142342 0%, #233a6b 100%)',
        'hero-overlay': 'linear-gradient(180deg, rgba(20,35,66,0.85) 0%, rgba(20,35,66,0.6) 50%, rgba(20,35,66,0.9) 100%)',
      },
    },
  },
  plugins: [],
};
