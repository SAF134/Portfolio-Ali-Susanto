import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        canvas: {
          main: "#858585",
          subtle: "#7d7d7d",
          card: "#FFFFFF",
        },
        brand: {
          blue: "#1D4ED8",
          blueAccent: "#2563EB",
          blueLight: "#EFF6FF",
          blueDark: "#1E40AF",
        },
        neutral: {
          anchor: "#858585",
          heading: "#0F172A",
          body: "#1E293B",
          muted: "#334155",
          border: "#E2E8F0",
          borderHover: "#CBD5E1",
        },
        status: {
          greenDot: "#10B981",
          greenBg: "#ECFDF5",
          greenText: "#065F46",
        },
      },
      boxShadow: {
        card: "0 4px 14px -2px rgba(0, 0, 0, 0.12), 0 2px 6px -1px rgba(0, 0, 0, 0.08)",
        cardHover: "0 16px 28px -6px rgba(0, 0, 0, 0.2), 0 6px 12px -2px rgba(29, 78, 216, 0.12)",
        nav: "0 10px 30px -10px rgba(0, 0, 0, 0.25)",
        glow: "0 0 25px -5px rgba(37, 99, 235, 0.2)",
      },
      aspectRatio: {
        a4: "1.414 / 1",
        portrait: "3 / 4",
        story: "9 / 16",
        landscape: "16 / 9",
      },
      borderRadius: {
        "2.5xl": "20px",
        "3.5xl": "28px",
      },
    },
  },
  plugins: [],
};

export default config;
