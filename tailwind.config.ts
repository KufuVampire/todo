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
        customPurple: '#6C63FF'
      },
    },
    fontFamily: {
      custom: ['Kanit', 'sans-serif']
    }
  },
  plugins: [],
};
export default config;
