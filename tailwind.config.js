/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Palette: brand green + sun yellow, with ink/white as neutrals
        brand: { DEFAULT: "#004D40", 700: "#00382e", 50: "#e6f2ef" },
        ink: { DEFAULT: "#222222", 600: "#4a4a4a", 400: "#8a8a8a" },
        sun: { DEFAULT: "#FFD500", 600: "#e6c000", 50: "#fffbe0" },
        // Only for tiny "live / available" status dots
        live: "#16A34A",
      },
      fontFamily: {
        display: ["'Bricolage Grotesque Variable'", "system-ui", "sans-serif"],
        sans: ["'DM Sans Variable'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(34,34,34,.06), 0 8px 24px -8px rgba(0,77,64,.18)",
        pop: "6px 6px 0 0 #222222",
      },
      keyframes: {
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        pulseRing: { "0%": { transform: "scale(.8)", opacity: ".8" }, "100%": { transform: "scale(2.2)", opacity: "0" } },
      },
      animation: {
        floaty: "floaty 5s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        pulseRing: "pulseRing 1.6s ease-out infinite",
      },
    },
  },
  plugins: [],
};
