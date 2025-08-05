import { useMemo } from "react"
import { AppKey } from "../../data/app-key"
import NoIcon from '/assets/apps/No App.png'
import { apps as dApps } from "../../data/app"
import { cn } from "../../utils/cn"
import { useAppContext } from "../../app"

interface AppIconProps{
  appKey:AppKey
  secondary?:boolean
  scaled?:boolean
}

const AppIcon = (props:AppIconProps) => {
  const { apps, openApp } = useAppContext()


  const app = dApps.find(a => a.key == props.appKey)
  const icon = useMemo(()=> (props.secondary ? (app?.secondaryIcon || app?.icon) : app?.icon) || NoIcon ,[app])

  const hasIndicator = useMemo(()=> apps.filter(a => a.appKey == props.appKey).length > 0,[props.appKey,apps])
  return (
    <div className="relative flex justify-center">
      <img onClick={() => openApp(props.appKey)} className={cn({'scale-125':props.scaled})} src={icon} />
      {hasIndicator && <span className="absolute bottom-[-7px] size-1 bg-os-foreground/50 rounded-full"></span>}
    </div>
  )
}

export { AppIcon }