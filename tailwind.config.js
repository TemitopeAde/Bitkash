// /** @type {import('tailwindcss').Config} */
module.exports = {
  prefix:'tw-',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/views/**/*.{js,jsx,ts,tsx}",
  ],
  // important: true
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#FF9924",
          dark: "#333333",
        },
        secondary: {
          main: "#292D32",
        },
        pink: {
          light: "#FFF5F0",
        },
      },
      fontFamily: {
        circular: ['"Circular std"'],
        poppins: ["Poppins"],
      },
      backgroundImage: {
        contacthero: 'url("/images/contact-hero.png")',
      },
    },
  },
  plugins: [],
};
