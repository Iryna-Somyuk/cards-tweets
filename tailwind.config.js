/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
        'sm': '480px',
        'md': '768px',
        'xl': '1280px',
    },
  
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        
        },
      },
      colors: {
        'orange': '#ff7849',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'purple': '#481ea9',
        'lightPurple': '#EBD8FF',
        'green': '#5CD3A8',
    
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        fontMoserrat: ['Montserrat'],
      },

      backgroundImage: {
        'hero-pattern': "url('/src/images/imgBg.jpg')",
    
      },
      boxShadow: {
        '3xl': '-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)',
      }, 
 
    },
  },
  plugins: [],
};
