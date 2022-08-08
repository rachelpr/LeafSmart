/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'Isabelline':'#F2E9E4',
      'Independence': '#4A4E69',
      'HeliotropeGray': '#9A8C98',
      'SpaceCadet': '#22223B',
      'White' : "#FFFFFF",
      'Zinc' : {
        50: "#fafafa",
        100: "#f4f4f5",
        300: "#d4d4d8"
      },
      'red' : {
        500 : "#ef4444"
      }
    },
    extend: {},
  },
  plugins: [],
}
