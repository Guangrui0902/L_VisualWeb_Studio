/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        studio: { DEFAULT: "#020203", soft: "#06060f", card: "#0a0a18", lift: "#12122a" },
        ink: { DEFAULT: "#fafafa", muted: "#a1a1aa", faint: "#71717a" },
        accent: { DEFAULT: "#22d3ee", hot: "#06b6d4", violet: "#a78bfa", pink: "#f472b6" },
      },
      fontFamily: {
        headline: ['"Outfit"', "system-ui", "sans-serif"],
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
        zh: ['"Noto Sans SC"', "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem,7vw,6rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(2.25rem,5vw,4rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(1.75rem,3.5vw,2.75rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "body-lg": ["1.25rem", { lineHeight: "1.65" }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "gradient-x": "gradient-x 6s ease infinite",
        float: "float 5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        shimmer: "shimmer 2.2s linear infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(34,211,238,0.55)",
        "glow-lg": "0 0 120px -20px rgba(34,211,238,0.45)",
        "glow-violet": "0 0 80px -16px rgba(167,139,250,0.5)",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
