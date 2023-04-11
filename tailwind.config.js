/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        ButtonShadow: 'rgba(0, 23, 55, 0.15) 0px 1px 2px 0px',
      },
    },
    colors: {
      bgBaseColor: '#ede9df',
      white: '#fff',
      filterBase: 'rgba(255,255,255,0.8)',
      filterBg: '#f8f7f9',
      buttonBase: '#089c30',
    },
  },
  plugins: [],
}
