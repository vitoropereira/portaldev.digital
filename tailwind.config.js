module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightTheme: {
          primary: "#188ddb",
          secondary: "#121212",
          background: {
            primary: "#d8e1e8",
            secondary: "#999999",
            third: "#181818",
          },
          gradient: {
            primary: "#188ddb",
            secondary: "#ba3f8f",
          },
          green: {
            200: "#D3FBD8",
          },
          yellow: {
            200: "#f5f4d5",
            400: "#F9F871",
            800: "#EB9929",
          },
        },
        darkTheme: {
          primary: "#d6d6d6",
          secondary: "#787586",
          background: {
            primary: "#181818",
            secondary: "#999999",
            third: "#d8e1e8",
          },
          green: {
            200: "#D3FBD8",
          },
          yellow: {
            200: "#f5f4d5",
            400: "#f5f495",
          },
        },
      },
    },
  },
  plugins: [],
};
