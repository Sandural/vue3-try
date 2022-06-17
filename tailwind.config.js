/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    colors: {
      cate: {
        primary: "rgb(99 125 228)",
        success: "#67c23a",
        warning: "#e6a23c",
        danger: "#f56c6c",
        error: "#f56c6c",
        info: "#909399",
        white: "#ffffff",
        black: "#000000",
        background: "#f1f2f5",
        buttonPrimary: "rgb(250 157 59)"
      },
    },
    extend: {
      keyframes: {
        shrinkSideBtn: {
          "0%": { width: "184px" },
          "100%": { width: "40px" },
        },
      },
      animation: {
        shrinkSideBtn: "shrinkSideBtn 2s",
      },
    },
  },
  plugins: [],
};
