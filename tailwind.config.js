/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'back-image': "url('./images/banner.png')",
      // },
      fontFamily: {
        'poppins': ['Poppins'],
        'roboto' :['Roboto'],
     }
    },
  },
  plugins: [],
}