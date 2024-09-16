import type {Config} from "tailwindcss";
import {nextui} from "@nextui-org/react";

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
        "white": "white",
        "black": "#1d1d1d",
        "dark-grey": "#33383f",
        "light-grey": "#99a4af",
        "grey": "#626a72",
        "gradient-red": "#ff010126",
        "back-grey": "#f5f6f7",
        "gradient-pink": "#ef98cf40",
        "gradient-blue": "#7aa7ff52",
        "dim-grey": "#495158",
        "silver": "#e7ecf0",
        "soft-grey": "#cbd5df",
      },
      fontFamily: {
        roboto: ["Roboto", "Inter", "sans-serif"],
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
