/** @type {import('tailwindcss').Config} */
// Use withOpacity to dilute the original color
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./data/**/*.{js,ts,json}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./utils/**/*.{js,ts,json}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Lexend, sans-serif",
          { fontFeatureSettings: '"cv03", "cv04", "cv11"' },
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
