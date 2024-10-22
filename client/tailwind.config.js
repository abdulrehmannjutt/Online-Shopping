/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        wood: '#9D6C3C',
        blacky: '#0c0a09',
        blackBG: '#000914',
        maroon: '#6E260E',
        saddle: '#8B4513',
        blueish: '#0173bc',
        russet: {
          DEFAULT: '#80461B',
          '50': 'rgba(128, 70, 27, 0.3)',
        },
        sienna: '#A0522D',
        smokyblack: '#100C08',
        whity: '#f5f5f5',
        wooden: '#A0522D',

      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        sourceSans: ['"Source Sans 3"', 'sans-serif'],
        garamond: ['EB Garamond', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        baskerville: ['Libre Baskerville', 'serif'], // Baskerville is often found as Libre Baskerville
        caslon: ['DM Serif Text', 'serif'],         // Caslon alternative, not exact but close in style
        cormorant: ['Cormorant Garamond', 'serif'],
        greatVibes: ['Great Vibes', 'cursive'],
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}