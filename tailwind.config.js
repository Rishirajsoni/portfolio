/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Use 'Inter' as the primary font, matching your setup
        inter: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        // Define the marquee animation
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        // Make the marquee animation usable
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};