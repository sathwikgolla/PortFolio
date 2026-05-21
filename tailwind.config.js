/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f7f2ea",
        linen: "#eee5d8",
        charcoal: "#272522",
        stoneText: "#5e574f",
        clay: "#8a6048",
        mist: "#dce4e6",
        slateSoft: "#6f7f86"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Lora", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(39, 37, 34, 0.08)"
      }
    }
  },
  plugins: []
};
