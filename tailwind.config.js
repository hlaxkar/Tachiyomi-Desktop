/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        navbar_color:"#272435",
        accent: "#f3b375",
        clifford: "#da373d",
        dark_bg: "#21212d",
        fill: '#382a4e',
        svgwhite: '#cbc3ce',
        third_bg: "#222222",
        prime_text: "#e3e0f1",
        second_text: "#b9b6c7",
        second_bg: "#282828",
        white_bg: "#fafafa",
        yellow: "#fffd01",
        black_text: "#14121E",
        gray_text: "#8b8b8b",
        btn_bg: "#393945",
        dropcolor: "rgb(11 10 26 / 40%)",
      },
    },
  },
  plugins: [],
}

