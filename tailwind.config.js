/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: 'Cormorant Garamond, serif',
        body: "Proza Libre, sans-serif",
      },
      backgroundImage: {
        "button-gradient":
          "linear-gradient(90deg, #2F80ED  0%, #56CCF2 100%);",
      },
    },
  },
  plugins: [],
}

