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
      "White" : "#FFFFFF",
      "Slate" : {
        50: "#f8fafc",
        900: "#0f172a"
      },
      "Zinc" : {
        300: "#d4d4d8",
        200: "#e4e4e7",
        100: "#f4f4f5"
      },
      "Red" : {
        500: "#ef4444"
      }
    },
    extend: {},
  },
  plugins: [],
}
