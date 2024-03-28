import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        grayCustom1: "#546E7A",
        blackCustom1: "#212121",
        fontBlack: "#464646",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          sm: "16px",
          md: "64px",
          lg: "80px",
        },
      },
    },
  },
  plugins: [],
};
export default withMT(config);
