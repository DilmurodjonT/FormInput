tailwind.config = {
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "4rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          sm: "319px",
          md: "560px",
          lg: "768px",
          xl: "960px",
          "2xl": "1130px",
        },
      },
      colors: {
        clifford: "#da373d",
      },
      fontFamily: {
        robot: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "size-12": [
          "12px",
          {
            lineHeight: "0px",
            fontWeight: "400",
          },
        ],
        "size-18": [
          "18px",
          {
            lineHeight: "21.6px",
            fontWeight: "400",
          },
        ],
      },
      backgroundImage: {
        "bg-md": "url('./images/bg-intro-mobile.png')",
        "bg-2xl": "url('./images/bg-sm.png')",
      },
      width: {
        "300px": "300px",
      },
    },
    screens: {
      sm: "319px",
      md: "560px",
      lg: "768px",
      xl: "960px",
      "2xl": "1130px",
      "3xl": "1440px",
    },
    // screens: {
    //   "3xl": { max: "1440px" },
    //   "2xl": { max: "1130px" },
    //   xl: { max: "960px" },
    //   lg: { max: "768px" },
    //   md: { max: "560px" },
    //   sm: { max: "440px" },
    //   xsm: { max: "370px" },
    // },
  },
};
