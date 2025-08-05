import bigsur from '/assets/background/light/bigsur.jpg'
import bigsurDark from '/assets/background/dark/bigsur.jpg'
import bigsur2 from '/assets/background/light/bigsur2.jpeg'
import bigsurDark2 from '/assets/background/dark/bigsur2.jpeg'
import monterey from '/assets/background/light/monterey.jpg'
import montereyDark from '/assets/background/dark/monterey.jpg'
import sonoma from '/assets/background/light/sonoma.jpg'
import sonomaDark from '/assets/background/dark/sonoma.jpg'
import ventura from '/assets/background/light/ventura.jpg'
import venturaDark from '/assets/background/dark/ventura.jpg'

const backgrounds = [
  {
    key:'bigsur',
    name:'BigSur',
    dark:bigsurDark,
    light:bigsur
  },
  {
    key:'bigsur2',
    name:'BigSur',
    dark:bigsurDark2,
    light:bigsur2
  },
  {
    key:'monterey',
    name:'Monterey',
    dark:montereyDark,
    light:monterey
  },
  {
    key:'sonoma',
    name:'Sonoma',
    dark:sonomaDark,
    light:sonoma
  },
  {
    key:'ventura',
    name:'Ventura',
    dark:venturaDark,
    light:ventura
  },
]

export { backgrounds }