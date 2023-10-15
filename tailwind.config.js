/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        colors: {
        'standard-blue': '#004369',
        'standard-turquoise': '#0E7178',
        'white': '#F6F6F6',
        'black': '#000000'},
      },
    },
  },
  plugins: [],
}