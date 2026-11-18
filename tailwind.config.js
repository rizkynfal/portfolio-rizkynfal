/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,mdx}",
    "./src/app/**/*.{js,jsx,mdx}",
    "./src/data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#07070A",
          900: "#0B0B10",
          800: "#121219",
          700: "#1A1A23",
        },
        brand: {
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
        },
      },
      maxWidth: { content: "1200px" },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(30px,-20px) scale(1.06)" },
        },
        pulseDot: {
          "0%": { boxShadow: "0 0 0 0 rgba(52,211,153,.6)" },
          "100%": { boxShadow: "0 0 0 10px rgba(52,211,153,0)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        float: "float 14s ease-in-out infinite",
        "float-slow": "float 20s ease-in-out infinite reverse",
        "pulse-dot": "pulseDot 1.8s ease-out infinite",
      },
    },
  },
  plugins: [],
};
