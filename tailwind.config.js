const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(avatar|input|modal|popover).js"
  ],
  theme: {
    extend: {
      fontFamily: {
        TitilliumWebExtraLight: ["TitilliumWebExtraLight", "sans-serif"],
        TitilliumWebLight: ["TitilliumWebLight", "sans-serif"],
        TitilliumWebRegular: ["TitilliumWebRegular", "sans-serif"],
        TitilliumWebSemiBold: ["TitilliumWebSemiBold", "sans-serif"],
        TitilliumWebBold: ["TitilliumWebBold", "sans-serif"],
        TitilliumWebExtraBold: ["TitilliumWebExtraBold", "sans-serif"],
        TitilliumWebBlack: ["TitilliumWebBlack", "sans-serif"],
        TitilliumWebExtraBlack: ["TitilliumWebExtraBlack", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}