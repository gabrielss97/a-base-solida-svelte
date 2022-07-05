/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,css}'],
  theme: {
    backgroundImage: {
      'bg-binary': "url('./src/assets/bg-binary.jpg')",
      'bg-binary-2': "url('./src/assets/bg-binary-2.jpg')",
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1600px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      'cblack':'#202125',
      'cwhite':'#F9FAF9',
      'cyellow':'#EFD81D',
      'cgolden':'#DFBA63',
      'cgray': '#b1afb9'
    },
    extend: {},
  },
  plugins: [],
}
