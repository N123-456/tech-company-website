/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       screens: {
      'md-only': { min: '768px', max: '1023px' },
      'md2-only': { min: '767px', max: '900px' }, // Between md and lg
       'xs-sm': { min: '300px', max: '639px' },
       'xs-m': { min: '100px', max: '200px' },
       'sm-md-range': { min: '400px', max: '767px' },
    },
      animation: {
        "fade-in": "fadeIn 1s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
          float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatReverse: 'floatReverse 6s ease-in-out infinite',
      },
      
    },
  },
  plugins: [],
};
