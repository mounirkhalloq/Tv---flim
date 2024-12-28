module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Ensures Tailwind looks for classes in pages
    './components/**/*.{js,ts,jsx,tsx}', // Ensures Tailwind looks for classes in components
    './layouts/**/*.{js,ts,jsx,tsx}', // Ensures Tailwind looks for classes in layouts
  ],
  theme: {
    extend: {
      colors: {
        body: '#000000', // Custom black background color
        main: '#ff0000',  // Example primary color (red)
        white: '#ffffff', // White color for text and background
        gray: {
          700: '#4a4a4a', // Dark gray for accents or scrollbars
        },
      },
    },
  },
  plugins: [],
};
