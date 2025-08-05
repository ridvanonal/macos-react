
import { FastAverageColor } from 'fast-average-color'
import Color from 'color'
import { OSAccentColor, useSettingStore } from "../stores/settings"
import { setProperty } from "./setProperty"
import { getBackground } from './configure'

const hslStringToVariable = (hsl:string) => hsl.replace('hsl(','').replaceAll(',','').replace(')','')

const osColor = () => {
  const backgroundKey = useSettingStore.getState().background
  const theme = useSettingStore.getState().theme
  const windowTint = useSettingStore.getState().windowTint
  const background = getBackground(backgroundKey)
  const fac = new FastAverageColor()
  fac.getColorAsync(background).then(avg => {
    const color = Color(avg.hex)
    const colorL = color.lightness(theme == 'light' ? 90 : 10)

    if((colorL.red() * .299 + colorL.green() * .587 + colorL.blue() * .144) > 186) setProperty('os-foreground','0 0% 0%')
    else setProperty('os-foreground','0 0% 100%')

    setProperty('os-tone', hslStringToVariable(colorL.hsl().string()))
    setProperty('os-accessible', hslStringToVariable(color.lightness(10).hsl().string()))
    setProperty('os-black', hslStringToVariable(color.lightness(2).hsl().string()))

    const colorW = (windowTint ? color : Color('#FFFFFF')).lightness(98).gray(95)
    const colorG = (windowTint ? color : Color('#000000')).lightness(1).gray(12)
    setProperty('os-surface',theme == 'light' ? hslStringToVariable(colorW.hsl().string()) : hslStringToVariable(colorG.hsl().string()))
    setProperty('os-surface-accessible',theme == 'light' ? hslStringToVariable(colorW.gray(92).hsl().string()) : hslStringToVariable(colorG.gray(6).hsl().string()))
    setProperty('os-gray-1',theme == 'light' ? hslStringToVariable(colorW.gray(20).lightness(85).hsl().string()) : hslStringToVariable(colorG.lightness(30).hsl().string()))
    setProperty('os-gray-2',theme == 'light' ? hslStringToVariable(colorW.gray(20).lightness(65).hsl().string()) : hslStringToVariable(colorG.lightness(50).hsl().string()))
    setProperty('os-gray-3',theme == 'light' ? hslStringToVariable(colorW.gray(20).lightness(45).hsl().string()) : hslStringToVariable(colorG.lightness(70).hsl().string()))
    setProperty('os-gray-4',theme == 'light' ? hslStringToVariable(colorW.gray(20).lightness(25).hsl().string()) : hslStringToVariable(colorG.lightness(90).hsl().string()))
  })
}

const osAccentColor = () => {
  const accent = useSettingStore.getState().accent
  const colors:Record<OSAccentColor,string> = {
    'multicolor':'215 100% 55%',
    'blue':'215 100% 55%',
    'purple':'298 42% 41%',
    'pink':'332 91% 64%',
    'red':'358 73% 55%',
    'orange':'28 93% 54%',
    'yellow':'45 98% 57%',
    'green':'106 45% 50%',
    'gray':'0 0% 60%'
  }
  setProperty('os-accent',colors[accent])
}

export { osColor, osAccentColor }