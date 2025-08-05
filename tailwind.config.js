/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      transparent:'transparent',
      white:'white',
      black:'black',
      red:{
        light:{ DEFAULT:'rgb(255,59,48)', accessible:'rgb(224,6,27)' },
        dark:{ DEFAULT:'rgb(255,69,58)', accessible:'rgb(255,69,58)' }
      },
      orange:{
        light:{ DEFAULT:'rgb(255,149,0)', accessible:'rgb(208,50,0)' },
        dark:{ DEFAULT:'rgb(255,159,10)', accessible:'rgb(255,159,10)' }
      },
      yellow:{
        light:{ DEFAULT:'rgb(255,204,0)', accessible:'rgb(147,106,54)' },
        dark:{ DEFAULT:'rgb(255,214,10)', accessible:'rgb(255,203,43)' }
      },
      green:{
        light:{ DEFAULT:'rgb(52,199,89)', accessible:'rgb(0,125,27)' },
        dark:{ DEFAULT:'rgb(50,215,75)', accessible:'rgb(48,219,91)' }
      },
      mint:{
        light:{ DEFAULT:'rgb(0,199,190)', accessible:'rgb(12,129,123)' },
        dark:{ DEFAULT:'rgb(99,230,226)', accessible:'rgb(99,230,226)' }
      },
      teal:{
        light:{ DEFAULT:'rgb(48,176,199)', accessible:'rgb(0,130,153)' },
        dark:{ DEFAULT:'rgb(64,200,224)', accessible:'rgb(93,230,255)' }
      },
      cyan:{
        light:{ DEFAULT:'rgb(50,173,230)', accessible:'rgb(0,113,164)' },
        dark:{ DEFAULT:'rgb(100,210,255)', accessible:'rgb(112,215,255)' }
      },
      blue:{
        light:{ DEFAULT:'rgb(0,122,255)', accessible:'rgb(0,64,221)' },
        dark:{ DEFAULT:'rgb(10,132,255)', accessible:'rgb(10,132,255)' }
      },
      indigo:{
        light:{ DEFAULT:'rgb(88,86,214)', accessible:'rgb(70,68,171)' },
        dark:{ DEFAULT:'rgb(94,92,230)', accessible:'rgb(104,98,229)' }
      },
      purple:{
        light:{ DEFAULT:'rgb(175,82,222)', accessible:'rgb(175,82,222)' },
        dark:{ DEFAULT:'rgb(191,90,242)', accessible:'rgb(234,145,254)' }
      },
      pink:{
        light:{ DEFAULT:'rgb(255,80,102)', accessible:'rgb(218,15,71)' },
        dark:{ DEFAULT:'rgb(255,55,95)', accessible:'rgb(255,59,95)' }
      },
      brown:{
        light:{ DEFAULT:'rgb(162,132,94)', accessible:'rgb(127,101,69)' },
        dark:{ DEFAULT:'rgb(172,142,104)', accessible:'rgb(181,148,105)' }
      },
      gray:{
        light:{ DEFAULT:'rgb(142,142,147)', accessible:'rgb(108,108,112)' },
        dark:{ DEFAULT:'rgb(142,142,147)', accessible:'rgb(174,174,178)' }
      },
    },
    extend: {
      fontFamily:{
        'shortcut-keys':['"shortcut-keys"', "sans-serif"]
      },
      colors:{
        'os-tone':"hsl(var(--os-tone))",
        'os-foreground':"hsl(var(--os-foreground))",
        'os-accessible':"hsl(var(--os-accessible))",
        'os-black':"hsl(var(--os-black))",
        'os-surface':"hsl(var(--os-surface))",
        'os-surface-accessible':"hsl(var(--os-surface-accessible))",
        'os-gray':{
          100:"hsl(var(--os-gray-1))",
          200:"hsl(var(--os-gray-2))",
          300:"hsl(var(--os-gray-3))"
        },
        'os-accent':{
          DEFAULT:"hsl(var(--os-accent))",
          multicolor:'rgb(28,122,255)',
          blue:'rgb(28,122,255)',
          purple:'rgb(149,61,150)',
          pink:'rgb(247,79,158)',
          red:'rgb(224,56,62)',
          orange:'rgb(247,130,28)',
          yellow:'rgb(253,199,37)',
          green:'rgb(98,186,71)',
          gray:'rgb(152,152,152)'
        },
      },
      backgroundOpacity:{
        1:'0.01',
        2:'0.02'
      },
      boxShadow:{
        'os-window-frame-content':'-1px 0px 2px 0px hsl(var(--os-foreground)/.025)',
        'os-dock':'inset 0px 0px 0px 1px hsl(var(--os-surface)/.2), 0px 0px 0px 1px hsl(var(--os-black)/.075),0px 10px 30px 0px hsl(var(--os-black)/.2)',
        'os-dock-dark':'inset 0px 0px 0px 1px hsl(var(--os-foreground)/.15), 0px 0px 0px 1px hsl(var(--os-tone)/.5), 0px 10px 25px 0px hsl(var(--os-black)/.5)'
      },
      fontSize:{
        'xxs':['0.657rem',{
          'lineHeight':'0.75rem'
        }]
      }
    },
  },
  plugins: [],
}

