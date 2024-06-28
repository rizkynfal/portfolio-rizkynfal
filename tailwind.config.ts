import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "glassRadius": "10px",
      },
      backdropBlur: {
        "glassBackdrop": "4px",
      },
      padding: {
        xs: "0.9px",
      },
      fontSize: {
        xxs: "10px",
      },
      boxShadow: {
        "btnShadow": "0 5px 11px #7b00ff",
        "glassShadow": " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      },
      backgroundColor: {
        "glassBg": "rgba( 255, 255, 255, 0.15 )",
        "warmWhite": "#F5F5F5",
        "btnHoverColor": "rgb(119,85,204)",
        "mainPurple": "rgb(172, 96, 255)",
        "mainBlack": "#121212",
        "secondBlack": "#0A0A0A",
      },
      textColor: {
        "mainPurple": "rgb(172, 96, 255)",
        "mainBlack": "#0A0A0A",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderWidth:{
        "1":"0.5px"
      }
    },
  },
  plugins: [],
};
export default config;
