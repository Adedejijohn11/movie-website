module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust based on your project structure
  ],
  theme: {
    extend: {
      // screens: {
      //   xs: "320px", // extra small
      //   sm: "375px", // small
      //   smd: "425px", // small-medium
      //   md: "768px", // medium
      lg: "1024px", // large
      xl: "1440px", // extra large
      // },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
