import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blackBg: "#151515",
        greenCuston: "#4EE1A0",
        greyCuston: "#242424",
        gainsboro: "#D9D9D9",
        whiteCuston: "#FFF",
      },
    },
  },
  variants: {},
  plugins: [],
};
export default config;
