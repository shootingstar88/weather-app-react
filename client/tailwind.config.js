/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary1: "#4f5cd3",
        primary2: "#83c5ce",
        secondary1: "#222831",
        secondary2: "#272E37",
        "oxford-blue": "#343d4b",
        white: "#fff",
        black: "#000",
        "secondary-gray": "#3D434B",
        blue: "#4F5CD3"
      },
      backgroundImage: {
        image:
          "linear-gradient(to top, rgb(79, 92, 211, 0.7) , rgb(131, 197, 206, 0.7)), url('https://picsum.photos/400/600')",
        button:
          "linear-gradient(to left, rgb(79, 92, 211, 1) , rgb(131, 197, 206, 1))",
      },
    },
  },
  plugins: [],
};
