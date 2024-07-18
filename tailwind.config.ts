import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial-home": " linear-gradient(0deg, rgba(10,114,115,1) 0%, rgba(0,205,205,0.5186449579831933) 100%)"
      },
        colors : {
            "base-blue" : "#15548E",
            "blue-muted" : "#D8E8F6",
            "dark-blue" : "rgb(2,6,23)",
            "white" : "#FFFFFF",
            "black" : "#141111",
            "gray-foreground" : "#D9D9D9",
            "muted" : "#F5F5F5",
            "destruction-red" : "#D93842",
            "foreground-green" : "#1E490E",
            // 
            "light-green" : "#62D938",
            "dark-green" : "#0F4424",
            "dark-green-hover" : "#18793F",
            "light-orange" : "rgba(237, 159, 87, 0.07)",
            "dark" : "#2A0003"
      },
    },
  },
  plugins: [],
};
export default config;
