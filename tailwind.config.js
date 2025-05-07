/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8A2BE2', // 퍼플
          dark: '#4B0082',   // 다크 퍼플
          light: '#DA70D6',  // 라이트 퍼플
        },
        secondary: {
          DEFAULT: '#FF1493', // 핑크
          dark: '#C71585',    // 다크 핑크
          light: '#FF69B4',   // 라이트 핑크
        },
        dark: {
          DEFAULT: '#121212',
          light: '#2D2D2D',
        },
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'top center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'bottom center',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left top',
          },
          '50%': {
            'background-size': '400% 400%',
            'background-position': 'right bottom',
          },
        },
      },
    },
  },
  plugins: [],
}