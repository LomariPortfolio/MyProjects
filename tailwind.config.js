module.exports = {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {},
    colors:{
      //dark mode
      'main-color':      "#1b1b1b",
      'primary':        "#dcdcd1",
      'secondary':      "#ebebe7",
      'text-primary':    "#cdcdcd",
      "text-secondary":  "#131313",
      //light mode
      //not gonna bother with this.
      "main-dark":      '#FFFFFF',
      "Dprimary":       '#23232e',
      "Dsecondary":     '#141418',
      "Dtext-primary":  '#000000',
      "Dtext-secondary":'#ececec',
      'cyan': {
        400: '#22d3ee',
        950: '#083344'
      },
    },
    screens:{
      'lg': "960px",
      'sm': {'max': '960px', 'min':'500px'},
      'smoll': {'max': '500px'}
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets:{
        name: {
          words: ['Hamza Lomari.'],
          repeat: 0,
          eraseSpeed: 0,
          caretWidth:0,
          writeSpeed: 0.1,
        },
        emojis: {
          words: ['🌟', '🔥', '🫡',
                  '🫠', '💾', '🤏😎',
                  '🤏🕶😐'],
          repeat: -1,
          eraseSpeed: 0.1,
          delay: 6,
          writeSpeed:0.1,
        },
      }
    })
  ],
}
