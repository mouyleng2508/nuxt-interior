module.exports = {
  purge: [],
  content: ["./src/**/*.{html,js}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#596e79',
        // 'secondary': '#1671d6'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
