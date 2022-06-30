/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    colors: {
      cate: {
        primary: "rgb(99 125 228)",
        primaryBg: "rgba(99,125,228,0.1)",
        success: "#67c23a",
        warning: "#e6a23c",
        warningBg: "rgba(230, 162, 60, 0.1)",
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
      dropShadow: {
        'cate-sm': "0 1px 1px rgb(0 0 0 / 38%)"
      },
      keyframes: {
        shrinkSideBtn: {
          "0%": { width: "184px" },
          "100%": { width: "40px" },
        },
      },
      transitionProperty: {
        'width': 'width',
      }
      // animation: {
      //   shrinkSideBtn: "shrinkSideBtn 2s",
      // },
    },
  },
  plugins: [],
};
