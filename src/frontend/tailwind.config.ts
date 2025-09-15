import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Microsoft-achtige stijl
        brand: {
          DEFAULT: "#0078D4", // Azure/Fluent blauw
          600: "#106EBE",
          700: "#005A9E"
        },
        surface: {
          DEFAULT: "#F5F5F5",
          100: "#FAFAFA",
          200: "#F3F3F3"
        },
        border: "#E5E7EB"
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem"
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,.06), 0 4px 10px rgba(0,0,0,.05)"
      }
    }
  },
  plugins: []
};
export default config;
