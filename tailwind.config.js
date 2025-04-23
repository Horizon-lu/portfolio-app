/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  important : true,
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        backDrop : 'rgba(0, 0, 0, 0.50)',
        background: '#f6f6f6'
      },
      colors: {
        primary : '#bbdefb',
        secondary: 'rgba(0, 0, 0, 0.54)'
      },
      height : {
        vhcontent : '93.5vh' 
      },
      maxWidth : {
        card : '540px'
      },
      flex : {
        field : '0 1 420px',
      }
    },
    
  },
  plugins: [],
  variants: {
    extend: {
      borderColor: ['group-valid'],
      backgroundColor: ['group-valid'],
      textColor: ['group-valid'],
      // Agrega más propiedades según tus necesidades
    }
  },

}