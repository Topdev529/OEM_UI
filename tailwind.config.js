module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f2f2f2",
          400: "#bcbcbc",
          500: "#a2a2a2",
          900: "#222222",
          "500_01": "#9c9b9b",
        },
        blue_gray: { 100: "#d9d9d9", 500: "#596e9b", 900: "#33363f" },
        deep_purple: { 900: "#372794", "900_01": "#362793", A400: "#573cfa" },
        black: { 900: "#000000" },
        white: { A700_01: "#fdfdfd", A700: "#ffffff" },
        red: { A400: "#e70936" },
        indigo: { 900: "#221473" },
      },
      fontFamily: { inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#372794,#573cfa)",
        gradient1: "linear-gradient(90deg ,#573cfa,#372794)",
        gradient2: "linear-gradient(83deg ,#372794,#573cfa)",
        gradient3: "linear-gradient(90deg ,#362793,#573cfa)",
        gradient4: "linear-gradient(84deg ,#573cfa,#221473)",
        gradient5: "linear-gradient(270deg ,#573cfa,#372794)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
