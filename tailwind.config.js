/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coral: {
          50: "#fef8f5",
          100: "#fdf0ec",
          200: "#fbdbcf",
          300: "#f8c5b2",
          400: "#f39979",
          500: "#ee6d3f",
          600: "#d66239",
          700: "#b3522f",
          800: "#8f4126",
          900: "#75351f",
        },
        buttercup: {
          50: "#fffbf3",
          100: "#fef7e7",
          200: "#fdebc4",
          300: "#fbdfa0",
          400: "#f9c659",
          500: "#f6ae12",
          600: "#dd9d10",
          700: "#b9830e",
          800: "#94680b",
          900: "#795509",
        },
        flamingo: {
          50: "#fef6f4",
          100: "#feedea",
          200: "#fcd3ca",
          300: "#fab9a9",
          400: "#f78469",
          500: "#f34f29",
          600: "#db4725",
          700: "#b63b1f",
          800: "#922f19",
          900: "#772714",
        },
      },
    },
    fontFamily: {
      signature: ["Great vibes"],
    },
  },
  plugins: [],
};
