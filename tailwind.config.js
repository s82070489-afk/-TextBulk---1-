/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#f3f7f5",
          100: "#e3ece7",
          200: "#c8d9d0",
          300: "#a2bfb0",
          400: "#769f8c",
          500: "#568371",
          600: "#43695a",
          700: "#37554a",
          800: "#2f463d",
          900: "#283a34",
          950: "#141f1c",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        surface:
          "0 0 0 1px rgb(0 0 0 / 0.04), 0 2px 8px rgb(0 0 0 / 0.04), 0 12px 32px rgb(0 0 0 / 0.06)",
        card: "0 0 0 1px rgb(0 0 0 / 0.05), 0 1px 2px rgb(0 0 0 / 0.04)",
        elevated:
          "0 0 0 1px rgb(0 0 0 / 0.05), 0 8px 24px rgb(0 0 0 / 0.08)",
      },
      backgroundImage: {
        "page-texture":
          "radial-gradient(circle at 20% 0%, rgb(86 131 113 / 0.07), transparent 42%), radial-gradient(circle at 80% 100%, rgb(67 105 90 / 0.06), transparent 38%)",
        "hero-glow":
          "linear-gradient(135deg, rgb(86 131 113 / 0.12) 0%, transparent 50%, rgb(67 105 90 / 0.08) 100%)",
      },
    },
  },
  plugins: [],
};
