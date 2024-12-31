/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
    colors: {
      creamy: "#F0E6D6",
      rich_brown: "#CBBEB3",
      accent: "#8b5d33",
      brown_gradient: "rgba(68, 34, 17, 0.5)",
      chinoise: "#91785d",
      celadon:"#bbe1c3",
      mossGreen:"#869d7a"
    },
  },
};
