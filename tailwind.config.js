const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // fine to keep; we're not relying on html.dark anymore
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [
    heroui({
      prefix: "heroadmin",
      addCommonColors: false,
      defaultTheme: "violet", // initial theme class
      defaultExtendTheme: "light", // base for custom themes
      layout: {},
      themes: {
        // Base neutral themes (optional but nice to keep)
        light: {
          layout: {},
          colors: {},
        },
        dark: {
          layout: {},
          colors: {},
        },

        /**
         * LIGHT COLOR THEMES
         */

        violet: {
          extend: "light",
          layout: {},
          colors: {
            primary: {
              DEFAULT: "#8b5cf6",
              50: "#f5f3ff",
              100: "#ede9fe",
              200: "#ddd6fe",
              300: "#c4b5fd",
              400: "#a78bfa",
              500: "#8b5cf6",
              600: "#7c3aed",
              700: "#6d28d9",
              800: "#5b21b6",
              900: "#4c1d95",
            },
          },
        },
        "violet-dark": {
          extend: "dark",
          layout: {},
          colors: {
            primary: {
              DEFAULT: "#a78bfa",
              50: "#18102b",
              100: "#1f1638",
              200: "#2b2050",
              300: "#3b2a6b",
              400: "#4c3688",
              500: "#5b3fa4",
              600: "#6b4cc4",
              700: "#7c5ae6",
              800: "#8b5cf6",
              900: "#a78bfa",
            },
          },
        },

        emerald: {
          extend: "light",
          layout: {},
          colors: {
            primary: {
              DEFAULT: "#10b981",
              50: "#ecfdf5",
              100: "#d1fae5",
              200: "#a7f3d0",
              300: "#6ee7b7",
              400: "#34d399",
              500: "#10b981",
              600: "#059669",
              700: "#047857",
              800: "#065f46",
              900: "#064e3b",
            },
          },
        },
        "emerald-dark": {
          extend: "dark",
          layout: {},
          colors: {
            primary: {
              DEFAULT: "#34d399",
              50: "#06281e",
              100: "#063024",
              200: "#064234",
              300: "#065a46",
              400: "#047857",
              500: "#059669",
              600: "#10b981",
              700: "#34d399",
              800: "#6ee7b7",
              900: "#a7f3d0",
            },
          },
        },

        amber: {
          extend: "light",
          layout: {},
          colors: {
            primary: {
              DEFAULT: "#f59e0b",
              50: "#fffbeb",
              100: "#fef3c7",
              200: "#fde68a",
              300: "#fcd34d",
              400: "#fbbf24",
              500: "#f59e0b",
              600: "#d97706",
              700: "#b45309",
              800: "#92400e",
              900: "#78350f",
            },
          },
        },
        "amber-dark": {
          extend: "dark",
          layout: {},
          colors: {
            primary: {
              DEFAULT: "#fbbf24",
              50: "#2b1904",
              100: "#3b2205",
              200: "#4a2b06",
              300: "#6b3a09",
              400: "#924b0b",
              500: "#b45309",
              600: "#d97706",
              700: "#ea580c",
              800: "#f97316",
              900: "#fbbf24",
            },
          },
        },

        rose: {
          extend: "light",
          layout: {},
          colors: {
            primary: {
              DEFAULT: "#f97373",
              50: "#fff1f2",
              100: "#ffe4e6",
              200: "#fecdd3",
              300: "#fda4af",
              400: "#fb7185",
              500: "#f97373",
              600: "#e11d48",
              700: "#be123c",
              800: "#9f1239",
              900: "#881337",
            },
          },
        },
        "rose-dark": {
          extend: "dark",
          layout: {},
          colors: {
            primary: {
              DEFAULT: "#fb7185",
              50: "#2b090f",
              100: "#3f0b16",
              200: "#4f101e",
              300: "#701327",
              400: "#9f1239",
              500: "#be123c",
              600: "#e11d48",
              700: "#fb7185",
              800: "#fda4af",
              900: "#fecdd3",
            },
          },
        },

        sky: {
          extend: "light",
          layout: {},
          colors: {
            primary: {
              DEFAULT: "#0ea5e9",
              50: "#f0f9ff",
              100: "#e0f2fe",
              200: "#bae6fd",
              300: "#7dd3fc",
              400: "#38bdf8",
              500: "#0ea5e9",
              600: "#0284c7",
              700: "#0369a1",
              800: "#075985",
              900: "#0c4a6e",
            },
          },
        },
        "sky-dark": {
          extend: "dark",
          layout: {},
          colors: {
            primary: {
              DEFAULT: "#38bdf8",
              50: "#031624",
              100: "#041c2f",
              200: "#06223a",
              300: "#082c4a",
              400: "#0b355a",
              500: "#0f416e",
              600: "#0f4e83",
              700: "#0ea5e9",
              800: "#38bdf8",
              900: "#7dd3fc",
            },
          },
        },

        slate: {
          extend: "light",
          layout: {},
          colors: {
            primary: {
              DEFAULT: "#64748b",
              50: "#f8fafc",
              100: "#f1f5f9",
              200: "#e2e8f0",
              300: "#cbd5f5",
              400: "#94a3b8",
              500: "#64748b",
              600: "#475569",
              700: "#334155",
              800: "#1e293b",
              900: "#0f172a",
            },
          },
        },
        "slate-dark": {
          extend: "dark",
          layout: {},
          colors: {
            primary: {
              DEFAULT: "#94a3b8",
              50: "#020617",
              100: "#020617",
              200: "#020617",
              300: "#020617",
              400: "#1e293b",
              500: "#334155",
              600: "#475569",
              700: "#64748b",
              800: "#94a3b8",
              900: "#cbd5f5",
            },
          },
        },
      },
    }),
  ],
};
