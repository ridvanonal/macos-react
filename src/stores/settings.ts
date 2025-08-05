
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { osAccentColor, osColor } from "../utils/colors";
import { setBackground, setTheme } from "../utils/configure";

type OSAccentColor = 'multicolor'|'blue'|'purple'|'pink'|'red'|'orange'|'yellow'|'green'|'gray'

interface UseSettingsStore{
  background:string,
  setBackground:(background:string) => void
  theme:'dark'|'light'
  setTheme:(theme:'dark'|'light') => void
  sideBarSize:'sm'|'md'|'lg'
  setSideBarSize:(size:'sm'|'md'|'lg') => void
  accent:OSAccentColor
  setAccent:(accent:OSAccentColor) => void
  useSideBarSize:<T,>(values:T[]) => T
  highlight:OSAccentColor
  setHighlight:(highlight:OSAccentColor) => void
  windowTint:boolean
  setWindowTint:(windowTint:boolean) => void
}

const useSettingStore = create(persist<UseSettingsStore>((set,get)=>({
  background:'sonoma',
  setBackground:(background:string) => {
    set({background})
    setBackground(background)
    osColor()
  },
  theme:'light',
  setTheme: (theme) => {
    set({theme})
    setTheme(theme)
    osColor()
  },
  sideBarSize:'md',
  setSideBarSize:(size) => set({sideBarSize:size}),
  useSideBarSize:(values:any[])=>{
    switch (get().sideBarSize) {
      case 'sm': return values[0]
      case 'md': return values[1]
      case 'lg': return values[2]
      default: return values[0]
    }
  },
  accent:'multicolor',
  setAccent:(accent) => {
    set({accent})
    osAccentColor()
  },
  highlight:'multicolor',
  setHighlight:(highlight) => set({highlight}),
  windowTint:true,
  setWindowTint:(windowTint:boolean) => {
    set({windowTint})
    osColor()
  }
}),{name:'settings'}))

export { useSettingStore, type OSAccentColor }