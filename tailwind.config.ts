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
        primary: {
          orange: "hsl(35, 77%, 62%)",
          red: "hsl(5, 85%, 63%)",
        },
        neutral: {
          offwhite: "hsl(36, 100%, 99%)",
          grayBlue: "hsl(233, 8%, 79%)",
          dGrayBlue: "hsl(236, 13%, 42%)",
          vdGrayBlue: "hsl(240, 100%, 5%)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
