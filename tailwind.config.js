module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
          "gray": "#a1a1a1",
          "black": "#000000",
          "ocean-blue": "#299bfb",
          "deep-blue": "#0113fb",
          "orange": "#ffa827",
          "pink": "#f964f4",
          "d1": "#66CBF7",
          "d2": "#D8A6C5",
          "d3": "#FDBD74"
       },

       "fontFamily": {
        "Poppins": "Poppins, sans-serif",
        "Noto Sans KR": "Noto Sans KR, sans-serif"
      }
    },
  },
  plugins: [],
}
