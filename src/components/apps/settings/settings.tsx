import { IconAccessible, IconAt, IconBellFilled, IconBluetooth, IconBulb, IconFlower, IconHandStop, IconHourglassLow, IconKeyboard, IconKeyFilled, IconLockAccess, IconLockFilled, IconMaximize, IconMoonFilled, IconMouseFilled, IconPanoramaHorizontal, IconPrinter, IconSearch, IconSettings, IconShadow, IconSunFilled, IconToggleRightFilled, IconUsers, IconVolume, IconWifi, IconWorld } from "@tabler/icons-react"
import { WindowFrameControl } from "../../system/window-frame"
import { Wallpaper } from "./sections/wallpaper"
import { ReactNode, useState } from "react"
import { cn } from "../../../utils/cn"
import ROPP from '/assets/ropp.jpeg'
import { SettingsItemIcon } from "./components/settings-item-icon"
import { WiFi } from "./sections/wi-fi"
import { Appearance } from "./sections/appearance"
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useSettingStore } from "../../../stores/settings"
import { Bluetooth } from "./sections/bluetooth"
import { Network } from "./sections/network"
import { Notifications } from "./sections/notifications"
import { Focus } from "./sections/focus"
import { General } from "./sections/general"
import { EnergySaver } from "./sections/energy-saver"
import { LoginPassword } from "./sections/login-passwrod"
import { Print } from "./sections/print"
import { Sound } from "./sections/sound"
import { Accessibility } from "./sections/accessibility"

interface SettingsGroupItem{
  key:string
  name:string
  className:string
  icon:any
  component?:ReactNode
}

const settingsGroups:SettingsGroupItem[][] = [
  [
    {key:'wi-fi',name:'Wi-Fi',className:'bg-gradient-to-b from-[#3296FF] to-[#1D7BFF] text-white',icon:IconWifi, component:<WiFi/>},
    {key:'bluetooth',name:'Bluetooth',className:'bg-gradient-to-b from-[#3296FF] to-[#1D7BFF] text-white',icon:IconBluetooth, component:<Bluetooth/>},
    {key:'network',name:'Network',className:'bg-gradient-to-b from-[#3296FF] to-[#1D7BFF] text-white',icon:IconWorld, component:<Network/>},
    //{key:'vpn',name:'VPN',className:'bg-gradient-to-b from-[#3296FF] to-[#1D7BFF] text-white',icon:IconShieldHalfFilled},
  ],
  [
    {key:'notification',name:'Notifications',className:'bg-gradient-to-b from-[#FB7168] to-[#FB3A30] text-white',icon:IconBellFilled, component:<Notifications/>},
    {key:'sounds',name:'Sounds',className:'bg-gradient-to-b from-[#FB6386] to-[#FB2C55] text-white',icon:IconVolume, component:<Sound/>},
    {key:'focus',name:'Focus',className:'bg-gradient-to-b from-[#8280EB] to-[#5856D6] text-white',icon:IconMoonFilled,component:<Focus/>},
    {key:'screen-time',name:'Screen Time',className:'bg-gradient-to-b from-[#8280EB] to-[#5856D6] text-white',icon:IconHourglassLow},
  ],
  [
    {key:'general',name:'General',className:'bg-gradient-to-b from-[#B3B3B7] to-[#8E8E93] text-white',icon:IconSettings,component:<General/>},
    {key:'appearance',name:'Appearance',className:'bg-gradient-to-b from-[#2B2B2B] to-[#000000] text-white',icon:IconShadow, component:<Appearance/>},
    {key:'accessibility',name:'Accessibility',className:'bg-gradient-to-b from-[#3296FF] to-[#1D7BFF] text-white',icon:IconAccessible, component:<Accessibility/>},
    {key:'control-center',name:'Control Center',className:'bg-gradient-to-b from-[#B3B3B7] to-[#8E8E93] text-white',icon:IconToggleRightFilled},
    {key:'privacy-security',name:'Privacy & Security',className:'bg-gradient-to-b from-[#3296FF] to-[#1D7BFF] text-white',icon:IconHandStop},
  ],
  [
    {key:'desktop-dock',name:'Desktop & Dock',className:'bg-gradient-to-b from-[#2B2B2B] to-[#000000] text-white',icon:IconPanoramaHorizontal},
    {key:'display',name:'Display',className:'bg-gradient-to-b from-[#3296FF] to-[#1D7BFF] text-white',icon:IconSunFilled},
    {key:'wallpaper',name:'Wallpaper',className:'bg-gradient-to-b from-[#8BE2FD] to-[#55BEF0] text-white',icon:IconFlower, component:<Wallpaper/>},
    {key:'screen-saver',name:'Screen Saver',className:'bg-gradient-to-b from-[#8BE2FD] to-[#55BEF0] text-white',icon:IconMaximize},
    {key:'energy-saver',name:'Energy Saver',className:'bg-gradient-to-b from-[#FCB137] to-[#FC9501] text-white',icon:IconBulb, component:<EnergySaver/>},
  ],
  [
    {key:'lock-screen',name:'Lock Screen',className:'bg-gradient-to-b from-[#2B2B2B] to-[#000000] text-white',icon:IconLockAccess},
    {key:'login-password',name:'Login Password',className:'bg-gradient-to-b from-[#B3B3B7] to-[#8E8E93] text-white',icon:IconLockFilled,component:<LoginPassword/>},
    {key:'users-groups',name:'Users & Groups',className:'bg-gradient-to-b from-[#3296FF] to-[#1D7BFF] text-white',icon:IconUsers},
  ],
  [
    {key:'passwords',name:'Passwords',className:'bg-gradient-to-b from-[#B3B3B7] to-[#8E8E93] text-white',icon:IconKeyFilled},
    {key:'internet-accounts',name:'Internet Accounts',className:'bg-gradient-to-b from-[#3296FF] to-[#1D7BFF] text-white',icon:IconAt},
  ],
  [
    {key:'keyboard',name:'Keyboard',className:'bg-gradient-to-b from-[#B3B3B7] to-[#8E8E93] text-white',icon:IconKeyboard},
    {key:'mouse',name:'Mouse',className:'bg-gradient-to-b from-[#B3B3B7] to-[#8E8E93] text-white',icon:IconMouseFilled},
    {key:'printers-scanners',name:'Printers & Scanners',className:'bg-gradient-to-b from-[#B3B3B7] to-[#8E8E93] text-white',icon:IconPrinter,component:<Print/>},
  ]
]

const Settings = () => {
  const [ active, setActive ] = useState<SettingsGroupItem | null>(settingsGroups[2][1])
  const [ scrolled, setScrolled ] = useState<boolean>(false)
  const [ contentScrolled, setContentScrolled ] = useState<boolean>(false)

  return (
    <div className="flex h-full font-semibold">
      <div className="min-w-[215px] overflow-hidden flex flex-col h-full">
        <WindowFrameControl className="p-5 h-14 min-h-14"/>
        <div className={cn({"border-b border-b-os-foreground/5":scrolled})}>
          <div className="bg-os-foreground/5 border border-os-foreground/5 flex items-center mx-2 mb-2 pl-1.5 rounded-lg">
            <IconSearch size={20} className="text-os-foreground/75"/>
            <input className="w-full bg-transparent text-sm caret-os-accent px-2 py-1 outline-none text-os-foreground placeholder:text-os-foreground/60 font-semibold" placeholder="Search"/>
          </div>
        </div>
        <PerfectScrollbar onScrollY={(e) => {e.scrollTop < 10 ? setScrolled(false) : (!scrolled ? setScrolled(true) : null) }}>
          <div className="h-full">
            <div className="flex gap-2 items-center mx-4 my-3 text-sm">
              <div className="rounded-full bg-os-foreground/10 overflow-hidden size-11">
                <img src={ROPP}/>
              </div>
              <div className="flex flex-col">
                <span>Rıdvan Önal</span>
                <span className="opacity-60 text-xs">Apple ID</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-sm py-2">
              {settingsGroups.map((sg,si) => (
                <div className="flex flex-col gap-0.5" key={si}>
                  {sg.map((s,i) => (
                    <SettingsItem key={i} disabled={!s.component} name={s.name} activeKey={active?.key} setActive={() => setActive(s)} iconClassName={s.className} icon={s.icon} sKey={s.key}/>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </PerfectScrollbar>
      </div>
      <div className="col-span-9 flex flex-col bg-os-surface min-h-full shadow-os-window-frame-content w-full overflow-hidden border-l border-l-os-foreground/10 dark:border-l-black">
        <div className={cn("h-14 min-h-14 flex items-center p-5 wfd",{"border-b border-b-os-foreground/5":contentScrolled})}>
          <span className="text-xl font-semibold">{active?.name}</span>
        </div>
        <PerfectScrollbar onScrollY={(e) => {e.scrollTop < 10 ? setContentScrolled(false) : (!contentScrolled ? setContentScrolled(true) : null) }}>
          <div className="h-full">
            {active?.component}
          </div>
        </PerfectScrollbar>
      </div>
    </div>
  )
}

interface SettingsItemProps{
  name:string
  sKey:string
  icon:any
  activeKey?:string
  iconClassName?:string
  setActive:() => void
  disabled?:boolean
}

const SettingsItem = (props:SettingsItemProps) => {
  const { useSideBarSize  } = useSettingStore()

  return (
    <div className={cn("flex items-center px-2 py-1 mx-2 gap-2 rounded-md cursor-pointer",{'bg-os-accent text-white':props.activeKey == props.sKey,'pointer-events-none opacity-60':props.disabled})} onClick={() => props.setActive()}>
      <SettingsItemIcon icon={props.icon} className={props.iconClassName} size={useSideBarSize([16,18,20])}/>
      <span className={useSideBarSize(['text-xs','text-sm','text-base'])}>{props.name}</span>
    </div>
  )
}

export { Settings }