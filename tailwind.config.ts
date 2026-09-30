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
          main: "#FFFFFF",
          subtle: "#F8FAFC",
          card: "#D9D9D9",
        },
        brand: {
          blue: "#1D4ED8",
          blueAccent: "#2563EB",
          blueLight: "#EFF6FF",
          blueDark: "#1E40AF",
        },
        neutral: {
          anchor: "#D9D9D9",
          heading: "#0F172A",
          body: "#1E293B",
          muted: "#475569",
          border: "#D1D5DB",
          borderHover: "#9CA3AF",
        },
      },
      boxShadow: {
        card: "0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        cardHover:
          "0 20px 35px -5px rgba(0, 0, 0, 0.22), 0 10px 15px -5px rgba(29, 78, 216, 0.15)",
        btn: "0 6px 16px -2px rgba(15, 23, 42, 0.2), 0 2px 4px -1px rgba(15, 23, 42, 0.12)",
        btnHover:
          "0 10px 22px -2px rgba(15, 23, 42, 0.3), 0 4px 6px -1px rgba(15, 23, 42, 0.15)",
        nav: "0 12px 32px -8px rgba(0, 0, 0, 0.18)",
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
