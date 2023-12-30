import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto Sans', ...defaultTheme.fontFamily.sans],
        'roboto': ['Roboto', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        'black-1/4': "#00000040",
        'palette': {
          100: "hsl(var(--palette-100) / <alpha-value>)",
          200: "hsl(var(--palette-200) / <alpha-value>)",
          300: "hsl(var(--palette-300) / <alpha-value>)",
          400: "hsl(var(--palette-400) / <alpha-value>)",
          500: "hsl(var(--palette-500) / <alpha-value>)",
          600: "hsl(var(--palette-600) / <alpha-value>)",
          700: "hsl(var(--palette-700) / <alpha-value>)",
          800: "hsl(var(--palette-800) / <alpha-value>)",
          900: "hsl(var(--palette-900) / <alpha-value>)",
        },
        'pgreys': {
          100: "hsl(var(--pgreys-100) / <alpha-value>)",
          200: "hsl(var(--pgreys-200) / <alpha-value>)",
          300: "hsl(var(--pgreys-300) / <alpha-value>)",
          400: "hsl(var(--pgreys-400) / <alpha-value>)",
          500: "hsl(var(--pgreys-500) / <alpha-value>)",
          600: "hsl(var(--pgreys-600) / <alpha-value>)",
          700: "hsl(var(--pgreys-700) / <alpha-value>)",
          800: "hsl(var(--pgreys-800) / <alpha-value>)",
          900: "hsl(var(--pgreys-900) / <alpha-value>)",
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    logs: false,
  }
}
