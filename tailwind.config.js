module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "Dark-Blue": "hsl(209, 23%, 22%)", //(Dark Mode Elements)
      "Very-Dark-Blue-A": "hsl(207, 26%, 17%)", //(Dark Mode Background)
      "Very-Dark-Blue-B": "hsl(200, 15%, 8%)", //(Light Mode Text)
      "Dark-Gray": "hsl(0, 0%, 52%)", //(Light Mode Input)
      "Very-Light-Gray": "hsl(0, 0%, 98%)", //(Light Mode Background)
      White: "hsl(0, 0%, 100%)", //(Dark Mode Text & Light Mode Elements)
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      "nunito-sans": ["Nunito Sans", "sans-serif"],
    },
    extend : {
      gridTemplateColumns : {
        countries : 'repeat(auto-fit,345px)'
      }
    }
  },
  plugins: [],
};
