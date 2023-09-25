/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "donation-primary": "#FF444A",
        "donation-dark": "#0B0B0B",
        "donation-txt40": "#0B0B0B66",
        "donation-txt50": "#0B0B0B80",
        "donation-txt70": "#0B0B0BB2",
        "btn-green": "#009444",
        "status-green": "#00C49F",
      },
    },
  },
  plugins: [require("daisyui")],
};
