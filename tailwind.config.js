module.exports = {
  content: ["./site/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: {
            DEFAULT: '#FF7500', // Main orange
            dark: '#E66A00',    // Darker orange for hover
            light: '#FF9133',   // Lighter orange
            lighter: '#FFAB66'  // Very light orange for backgrounds
          },
          purple: {
            DEFAULT: '#AC00FF', // Main purple
            dark: '#9B00E6',    // Darker purple for hover
            light: '#BE33FF',   // Lighter purple
            lighter: '#D066FF'  // Very light purple for backgrounds
          }
        }
      }
    }
  },
  plugins: [],
} 