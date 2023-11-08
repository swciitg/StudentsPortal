/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-white": "#EEF1F4",
        "dark-grey": "#E8E9EA",
        "regal-red": "#D83B01",
        "regal-blue": "#2164E8",
        "light-blue": "#EFF6FC",
        "real-blue": "#2164E8",
      },
      width: {
        108: "28rem",
      },
      boxShadow: {
        "3xl":
          "0px 1.6px 3.6px 0px rgba(27, 33, 45, 0.13), 0px 0.3px 0.9px 0px rgba(27, 33, 45, 0.10);",
      },
      fontSize: {
        xxs: "0.625rem",
      },
    },
  },
  plugins: [],
};
