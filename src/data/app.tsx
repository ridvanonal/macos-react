import { AppKey } from "./app-key"
import { AboutThisMac } from "../components/apps/about-this-mac"
import { ReactNode } from "react"
import { Settings } from "../components/apps/settings/settings"
import FinderIcon from '/assets/apps/Finder.png'
import SystemSettingsIcon from '/assets/apps/Settings.png'
import TrashIcon from '/assets/apps/Trash Empty.png'
import TrashFullIcon from '/assets/apps/Trash Full.png'
import LaunchPadIcon from '/assets/apps/Launchpad.png'
import MapIcon from '/assets/apps/Maps.png'
import NotesIcon from '/assets/apps/Notes.png'
import { Notes } from "../components/apps/notes"

interface App {
  key:AppKey
  name:string
  initialHeight?:number
  initialWidth?:number
  minHeight?:number
  maxHeight?:number
  minWidth?:number
  maxWidth?:number
  menuBarKey?:AppKey
  component?:ReactNode
  icon?:string
  secondaryIcon?:string
  canFullscreen?:boolean
  canMinimize?:boolean
  resizable?:boolean
  draggable?:boolean
  allowMany?:boolean
}

const apps:App[] = [
  {
    key:AppKey.Finder,
    name:'Finder',
    icon: FinderIcon
  },
  {
    key:AppKey.SystemSettings,
    name:'System Settings',
    icon:SystemSettingsIcon,
    initialWidth:715,
    minWidth:715,
    minHeight:500,
    initialHeight:600,
    allowMany:false,
    component:<Settings/>
  },
  {
    key:AppKey.AboutThisMac,
    menuBarKey:AppKey.Finder,
    name:'About This Mac',
    initialHeight:480,
    initialWidth:280,
    resizable:false,
    canFullscreen:false,
    canMinimize:false,
    component:<AboutThisMac/>
  },
  {
    key:AppKey.Trash,
    name:'Trash',
    icon:TrashIcon,
    secondaryIcon: TrashFullIcon
  },
  {
    key:AppKey.LaunchPad,
    name:'Launch Pad',
    icon:LaunchPadIcon,
  },
  {
    key:AppKey.Maps,
    name:'Map',
    icon:MapIcon,
  },
  {
    key:AppKey.Notes,
    name:'Notes',
    minWidth:715,
    initialWidth:915,
    initialHeight:600,
    minHeight:500,
    icon:NotesIcon,
    allowMany:false,
    component:<Notes/>
  }
]

export { apps }