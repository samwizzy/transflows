/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jxs,ts,tsx}"],
  theme: {
    extend: {
      margin: {
        2.5: "0.625rem",
        7.5: "1.875rem",
      },
      padding: {
        2.5: "0.625rem",
        7.5: "1.875rem",
      },
      fontFamily: {
        sans: ["inter", "Open Sans", "sans-serif"],
        serif: ["Roboto", "serif"],
        display: ["Rubik", "sans-serif"],
      },
      width: {
        400: "400px",
      },
      maxWidth: {
        "8xl": "82rem",
      },
    },
  },
  plugins: [],
};
