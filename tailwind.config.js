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
        'black-1/4': "#00000040"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    logs: false,
  }
}
