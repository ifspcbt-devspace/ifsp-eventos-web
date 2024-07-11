import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    dark: {},
    extend: {
      colors: {
        customLightGreen: "#f0ffd9",
        greenxd: "#C2DEAD",
        greens: "#002600",
        greenp: "#053003",
      },
      fontFamily: {
        montserrat: ["Montserrat", "Inter", "sans-serif"],
      },

      spacing: {
        "100": "32rem",
        "26": "105px",
      },
      width: {
        "90": "26rem",
        "128": "32rem", // 512px
        "144": "36rem", // 576px
        "160": "40rem", // 640px
      },

      height: {
        "98": "28rem",
        "128": "32rem", // 512px
        "144": "36rem", // 576px
        "160": "40rem", // 640px
      },
    },
  },
  darkMode: "class",
  plugins: [require("tailwind-scrollbar"), nextui()],
};
export default config;
