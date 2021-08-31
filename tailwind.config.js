module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      themeDark: {
        darker: "#121212",
        dark: "#1d1d1d",
        yellow: "#ffeb15",
        white: "#dfdfdf",
      },
      themeWhite: {
        white: "#fbfbfb",
        gray: "#fcfcfc",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
