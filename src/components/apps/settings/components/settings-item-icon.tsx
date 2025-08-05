import { cn } from "../../../../utils/cn"

interface SettingsItemIconProps{
  icon:any
  className?:string
  size:number
}

const SettingsItemIcon = (props:SettingsItemIconProps) => {
  return (
    <div className={cn(props.className,'flex items-center justify-center rounded-md shadow-[0px_1px_2px_0px_hsl(var(--os-black)/.5)] p-0.5')}>
      <props.icon size={props.size}/>
    </div>
  )
}

export { SettingsItemIcon }