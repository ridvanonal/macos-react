import { backgrounds } from "../data/background"
import { useSettingStore } from "../stores/settings"
import { osAccentColor, osColor } from "./colors"
import { setProperty } from "./setProperty"

const init = () => {
  initBackground()
  initTheme()
  osColor()
  osAccentColor()
}
  
const initBackground = () => {
  setBackground(useSettingStore.getState().background)
}

const getBackground = (key:string) => {
  const bg = backgrounds.find(b => b.key == key)
  return bg ? useSettingStore.getState().theme == 'light' ? bg.light : bg.dark : ''
}

const setBackground = (background:string) => { 
  setProperty('background',`url(${getBackground(background)})`) 
}

const initTheme = () => {
  setTheme(useSettingStore.getState().theme)
}

const setTheme = (theme:'dark'|'light') => {
  document.documentElement.classList.remove('light','dark')
  document.documentElement.classList.add(theme)
  initBackground()
}

export { init, getBackground, setBackground, setTheme }