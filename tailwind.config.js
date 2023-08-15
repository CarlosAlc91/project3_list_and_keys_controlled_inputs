/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('/images/header.png')",
        'header-spin': "url('/images/green_cloud.png')"
      },

      boxShadow: {

        "elements": "1px 5px 15px",
      },

      animation: {
        'spin-slow': 'spin 3s linear infinity'
      }
    },
    /* colors: {
      'gray-white': '#938686'
    }, */

    fontFamily: {
      'fira-code': ['Fira Code', 'monospace']
    }

  },

  plugins: [],
}

