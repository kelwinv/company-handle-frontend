/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "linear-gradient(139deg, #DDE8FD 0%, #EDF2FE 30.85%)",
      },
      dropShadow: {
        card: [
          "0 1px 2px rgba(26, 29, 73, 0.04)",
          "0  -3px 4px  rgba(26, 29, 73, 0.01)",
        ],
      },
    },
  },
  plugins: [],
  corePlugins: {
    corePlugins: {
      preflight: false,
    },
  },
  important: "#root",
};
