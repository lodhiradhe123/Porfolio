/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
 

    plugins: [
      function({ addUtilities }) {
        addUtilities({
          '.hide-scrollbar': {
            '-ms-overflow-style': 'none', /* IE and Edge */
            'scrollbar-width': 'none', /* Firefox */
            '&::-webkit-scrollbar': {
              display: 'none' /* Chrome, Safari, and Opera */
            }
          }
        });
      }
    ]
  
}

