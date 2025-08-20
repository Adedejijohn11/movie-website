module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust based on your project structure
  ],
  theme: {
    extend: {
      // screens: {
      //   'xs': '320px',   // small phones
      //   'sm': '480px',   // larger phones
      //   'md': '640px',   // tablets
      //   'lg': '768px',   // small laptops
      //   'xl': '1024px',  // desktops
      //   '2xl': '1280px', // large desktops
      //   '3xl': '1536px', // 2K screens
      // },
      // spacing: {
      //   'swiper-gap-sm': '5px',   // minimal gap
      //   'swiper-gap-md': '10px',  // medium gap
      //   'swiper-gap-lg': '15px',  // larger gap
      // }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
