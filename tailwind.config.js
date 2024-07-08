/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      'desktop': { 'min': '1440px' },
      'mobile': { 'min': '375px', 'max': '1439px' },
    },
    extend: {
        padding: {
          '18': '72px',
        },
        fontSize: {
          lg: ['18px', '28px'],
          body: "13px",
        },
        colors: {
          "very-dark-grayish-blue": "hsl(217, 19%, 35%)",
          "desaturated-dark-blue": "hsl(214, 17%, 51%)",
          "grayish-blue": "hsl(212, 23%, 69%)",
          "light-grayish-blue": "hsl(212, 16%, 92%)",
        },
        letterSpacing: {
          tightest: '-.075em',
          tighter: '-.05em',
          tight: '-.025em',
          normal: '0',
          wide: '.025em',
          wider: '.05em',
          widest: '.1em',
          widest: '.40em',
        },
        fontFamily: {
          manrope: ["Manrope", "sans-serif"]
        },
    },
    
  },
  plugins: [],
}