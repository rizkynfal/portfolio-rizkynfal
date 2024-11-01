/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        base: "1000px",
      },
      transitionDuration: {
        8000: "8000ms",
      },
      animation: {
        wiggle: "wiggle 5s ease-in-out infinite",
      },
      maxHeight: {
        maxHeightCard: "450px",
      },
      borderRadius: {
        glassRadius: "10px",
      },
      backdropBlur: {
        glassBackdrop: "4px",
      },
      padding: {
        xs: "0.9px",
      },
      fontSize: {
        xxxxxs: "4px",
        xxxxs: "6px",
        xxxs: "8px",
        xxs: "10px",
        "10xl": "140px",
        "11xl": "155px",
        "12xl": "165px",
        "17xl": "280px",
      },
      boxShadow: {
        cardShadow: "0 0px 40px -20px #7b00ff",
        btnShadow: "0 5px 11px #7b00ff",
        glassShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      },
      backgroundColor: {
        glassBg: "rgba( 255, 255, 255, 0.15 )",
        warmWhite: "#dddddd",
        btnHoverColor: "rgb(119,85,204)",
        mainPurple: "rgb(172, 96, 255)",
        sidebarColor: "#1c1c1c",
        mainBlack: "#121212",
        secondBlack: "#0A0A0A",
        projectedai: "#204859",
      },
      textColor: {
        mainPurple: "rgb(172, 96, 255)",
        mainBlack: "#0A0A0A",
        warmWhite: "#dddddd",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderWidth: {
        1: "1px",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
