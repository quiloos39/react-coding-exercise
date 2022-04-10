module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  plugins: [],
};
