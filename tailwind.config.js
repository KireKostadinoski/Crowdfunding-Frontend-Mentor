/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md:'768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        ModerateCyan: "hsl(176, 50%, 47%)",
        DarkCyan: "hsl(176, 72%, 28%)",
        DarkGray: "hsl(0, 0%, 48%)",
      },
      fontFamily:{
        sans: ["Commissioner", 'sans-serif'],
      },
      backgroundImage: () => ({
        ImageHeroDesktop: "url('../images/image-hero-desktop.jpg')",
        ImageHeroMobile: "url('../images/image-hero-mobile.jpg')",
      }),
    },
  },
  plugins: [],
};
