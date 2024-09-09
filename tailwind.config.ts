import type { Config } from "tailwindcss";

const extendedColors = {
  pesto: {
    "50": "#f7f5ee",
    "100": "#eee9d9",
    "200": "#ded6b8",
    "300": "#c9bd8d",
    "400": "#b3a568",
    "500": "#8c8045",
    "600": "#786f38",
    "700": "#5c562f",
    "800": "#4b4729",
    "900": "#413e26",
    "950": "#222011",
  },
  concrete: {
    "50": "#f8f8f8",
    "100": "#f2f2f2",
    "200": "#dcdcdc",
    "300": "#bdbdbd",
    "400": "#989898",
    "500": "#7c7c7c",
    "600": "#656565",
    "700": "#525252",
    "800": "#464646",
    "900": "#3d3d3d",
    "950": "#292929",
  },
  olive: {
    "50": "#f5f9ec",
    "100": "#e8f2d5",
    "200": "#d4e5b1",
    "300": "#b7d482",
    "400": "#9bc05b",
    "500": "#7da53d",
    "600": "#678c30",
    "700": "#4b6526",
    "800": "#3e5123",
    "900": "#354621",
    "950": "#1a250e",
  },
  goldenrod: {
    "50": "#fefaec",
    "100": "#faf0cb",
    "200": "#f5df92",
    "300": "#f2d06b",
    "400": "#edb632",
    "500": "#e5961b",
    "600": "#cb7314",
    "700": "#a95214",
    "800": "#894017",
    "900": "#713516",
    "950": "#411a07",
  },
};

export default {
  content: [
    "./app/routes/**/*.{ts,tsx}",
    // "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: extendedColors,
    },
  },
  plugins: [],
} satisfies Config;
