module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        app: "url(/app-bg.png)",
      },
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
        ignite: {
          500: "#129e57",
          700: "#129E3E",
        },
        yellow: {
          500: "#f7dd43",
          700: "#e5cd3d",
        },
        gray: {
          100: "#e1e1e6",
          300: "#8d8d99",
          600: "#323238",
          800: "#202024",
          900: "#121214",
        },
        brand: {
          300: "#996DEF",
          500: "#8257e6",
        },
      },
      borderRadius: {
        2: "2px",
        4: "4px",
        6: "3rem",
      },
    },
  },
  plugins: [],
};
