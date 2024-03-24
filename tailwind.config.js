/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    "extend": {
    "colors": {
    "white": "#fff",
    "dimgray": "#606060",
    "black": "#000",
    "gray": "rgba(28, 28, 28, 0.5)",
    "teal": "rgba(72, 124, 123, 0.24)",
    "bb-green": "#042825",
    "plum": "#9c7aab",
    "seagreen": "#2e8b50",
    "cadet-green": "#a6c1bf"
    },
    "spacing": {},
    "fontFamily": {
    "manrope": "Manrope",
    "dm-mono": "'DM Mono'",
    "dm-sans-body-regular-p6": "'DM Sans'"
    },
    "borderRadius": {
    "13xl": "32px"
    }
    },
    "fontSize": {
    "5xl": "24px",
    "13xl": "32px",
    "lg": "18px",
    "31xl": "50px",
    "7xl": "26px",
    "base": "16px",
    "sm": "14px",
    "29xl": "48px",
    "inherit": "inherit"
    }
    },
    
  plugins: [],
}
