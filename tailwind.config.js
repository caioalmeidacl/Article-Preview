/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      desktop: "1440px",
    },
    extend: {
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      body: "13px",
    },
    colors: {
      "white": "#FFFFFF",
      "very-dark-grayish-blue": "hsl(217, 19%, 35%)",
      "desaturated-dark-blue": "hsl(214, 17%, 51%)",
      "grayish-blue": "hsl(212, 23%, 69%)",
      "light-grayish-blue": "hsl(212, 16%, 92%)",
    },
    fontFamily: {
      manrope: ["Manrope", "sans-serif"]
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
  },
  plugins: [],
}