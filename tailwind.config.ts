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
        customLightGreen: '#f0ffd9',
        greenxd: '#C2DEAD',
        greens: '#002600',
        greenp: '#053003'
      },
      fontFamily: {
        inter: ['Montserrat', 'Inter', 'sans-serif'],
      },

      spacing: {
        '100': '32rem', 
        '26':  '105px',
  
      },
      width: {
        '90': '26rem',
        '128': '32rem',  // 512px
        '144': '36rem',  // 576px
        '160': '40rem',  // 640px
      },

      height: {
        '60': '22rem',
        '110': '32rem',
        '128': '32rem',  // 512px
        '144': '36rem',  // 576px
        '160': '40rem',  // 640px
      }
    },
  },
  plugins: [require('tailwind-scrollbar'),],
};
export default config;
