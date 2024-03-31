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
        danger50: "#FFF5F5",
        danger100: "#FED7D7",
        danger200: "#FEB2B2",
        danger300: "#FC8181",
        danger400: "#F56565",
        danger500: "#E53E3E",
        danger600: "#C53030",
        danger700: "#9B2C2C",
        danger800: "#822727",
        danger900: "#63171B",
        info50: "#EBF8FF",
        info100: "#BEE3F8",
        info200: "#90CDF4",
        info300: "#63B3ED",
        info400: "#4299E1",
        info500: "#3182CE",
        info600: "#2B6CB0",
        info700: "#2C5282",
        info800: "#2A4365",
        info900: "#1A365D",
        purple100: "#E4E0FE",
        purple200: "#C8C2FE",
        purple300: "#ACA3FD",
        purple400: "#968CFB",
        purple500: "#7266F9",
        purple600: "#544AD6",
        purple700: "#3B33B3",
        purple800: "#262090",
        purple900: "#181377",
        green100: "#E5FCDD",
        green200: "#C6F9BC",
        green300: "#9DEE97",
        green400: "#78DE7A",
        green500: "#4EC95C",
        green600: "#39AC50",
        green700: "#279046",
        green800: "#18743C",
        green900: "#0E6036",
        yellow100: "#FFF3D8",
        yellow200: "#FFE5B1",
        yellow400: "#FFC06C",
        yellow300: "FFD28A",
        yellow500: "#FFA33C",
        yellow600: "#DB802B",
        yellow700: "#B7601E",
        yellow800: "#934413",
        yellow900: "#7A310B",
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
