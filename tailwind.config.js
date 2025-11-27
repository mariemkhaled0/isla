/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#1C8F54",
        primaryRed: "#A52227",
        primaryBage: "#EEE6DC",
        primaryYallow: "#F3B850",
        darkGreen: "#014722",
      },
      fontFamily: {
        alexandria: ["var(--font-alexandria)"],
        longreach: ["var(--font-longreach)"],
        wingx: ["var(--font-wingx)"],
      },
      screens: {
        xxs: { min: "320px", max: "350px" },
        xs: { min: "355px", max: "390px" },
        xsm: { min: "310px", max: "390px" },
      },
    },
  },
  plugins: [],
};
