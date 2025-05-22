/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1.5rem',
        sm: '1rem', // 640px dan katta ekranlar uchun
      },
      screens: {
        DEFAULT: '100%', // width: 100%
        xl: '1500px',
      },
    },
    extend: {
      screens: {
        '3xl': '1920px',
      },
      colors: {
        custom: {
          DEFAULT: '#004741',
          100: '#085F58',
          200: '#15614B',
          300: '#194F4A',
          400: '#105953',
        },
        dark: {
          DEFAULT: '#191D1D',
          100: '#000',
          200: '#1E293B',
        },
        gray: {
          100: '#F2F2F2',
          200: '#E2E8F0',
          300: '#334155',
          400: '#F9F9F9',
          500: '#F1F5F9',
          600: '#F3F3F3',
        },
      },
      fontFamily: {
        'alumni': ['Alumni', 'sans-serif'],
        'golos': ['Golos', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
      },
      fontSize: {
        20: '20px',
        32: '32px',
        48: '48px',
        56: '56px',
        64: '64px',
        96: '96px',
      },
      lineHeight: {
        110: '110%',
        130: '130%',
        150: '150%',
        104: '104%',
      },
      backgroundImage: {
        'about-banner-gr': 'linear-gradient(180deg, rgba(126, 180, 221, 0.32) -19.19%, rgba(0, 0, 0, 0.32) 77.04%)',
        'main-banner-gr': 'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.24) 30%)',
        'engineer-banner-gr': 'linear-gradient(180deg, #000 -19.19%, rgba(0, 0, 0, 0.00) 50.87%, #000 120.7%)',
        'procurement-banner-gr': 'linear-gradient(180deg, #000 -19.19%, rgba(0, 0, 0, 0.00) 50.87%, #000 106.71%)',
        'projects-gradient': 'linear-gradient(0deg, rgba(0, 19, 17, 0.32) 0%, rgba(0, 19, 17, 0.32) 100%)',
        'primary-gradient': 'linear-gradient(0deg, #e84487 0%, #eb1c70 100%)',
        'university-single': 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), lightgray 50% / cover no-repeat',
      },
      boxShadow: {
        'main-card-hover': '0px 12px 60px 0px rgba(0, 0, 0, 0.12);',
      },
    },
  },
  plugins: [],
};

