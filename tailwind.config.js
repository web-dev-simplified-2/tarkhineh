/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "estedad",
        primaryBold: "estedad-bold",
        primarySemiBold: "estedad-semibold",
        primaryExtraBold: "estedad-extrabold",
        primaryThin: "estedad-thin",
        primaryExtralight: "estedad-extralight",
        primarylight: "estedad-light",
      },
      colors: {
        primary: "#417F56",
      },
    },
  },
  plugins: [],
};
