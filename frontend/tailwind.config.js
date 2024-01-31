/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: "#11243E",
        primary: "#6142D4",
        secondary: "#F3ECFF",
        tertiary: "#F6F4FF",
        accent: "#13ABBA",
        highlight: "#FAFAFA",
        "accent-hover": "#008491",
        "chat-bg-gray": "#D9D9D9",
        "msg-gray": "#9B9B9B",
        "msg-header-gray": "#8F8F8F",
        "msg-purple": "#E0DDFC",
        "onboarding-yellow-bg": "#F6EFDE",
        ivory: "#FCFAF6",
        "vt-50": "#f8fafc", // slate-50
        "vt-100": "#f1f5f9", // slate-100
        "vt-200": "#e2e8f0", // slate-200
        "vt-300": "#cbd5e1", // slate-300
        "vt-400": "#94a3b8", // slate-400
        "vt-500": "#64748b", // slate-500
        "vt-600": "#475569", // slate-606
        "vt-700": "#334155", // slate-700
        "vt-800": "#1e293b", // slate-800
        "vt-900": "#0f172a", // slate-900
        "vt-950": "#020617", // slate-950
      },
      animation: {
        "fade-in": "fade-in 0.5s linear forwards",
        marquee: "marquee var(--marquee-duration) linear infinite",
        "spin-slow": "spin 4s linear infinite",
        "spin-slower": "spin 6s linear infinite",
        "spin-reverse": "spin-reverse 1s linear infinite",
        "spin-reverse-slow": "spin-reverse 4s linear infinite",
        "spin-reverse-slower": "spin-reverse 6s linear infinite",
      },
      keyframes: {
        "fade-in": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        marquee: {
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        "spin-reverse": {
          to: {
            transform: "rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
