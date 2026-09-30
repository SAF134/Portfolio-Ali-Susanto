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
          main: "#F8FAFC",
          subtle: "#F1F5F9",
          card: "#FFFFFF",
        },
        brand: {
          blue: "#1D4ED8",
          blueAccent: "#2563EB",
          blueLight: "#EFF6FF",
          blueDark: "#1E40AF",
        },
        neutral: {
          anchor: "#808080",
          heading: "#0F172A",
          body: "#334155",
          muted: "#64748B",
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
        card: "0 2px 8px -2px rgba(15, 23, 42, 0.05), 0 1px 3px -1px rgba(15, 23, 42, 0.03)",
        cardHover: "0 12px 24px -6px rgba(15, 23, 42, 0.08), 0 4px 8px -2px rgba(29, 78, 216, 0.06)",
        nav: "0 10px 30px -10px rgba(15, 23, 42, 0.12)",
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
