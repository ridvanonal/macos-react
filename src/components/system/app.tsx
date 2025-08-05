import { useAppContext } from "../../app"
import { apps } from "../../data/app"
import { AppValue } from "../../data/app-key"
import { useAppStore } from "../../stores/app"
import { WindowFrame } from "./window-frame"

interface AppProps{
  appValue:AppValue
}

const App = (props:AppProps) => {
  const { focused, setFocused } = useAppStore()
  const { closeApp } = useAppContext()
  const app = apps.find(a => a?.key == props.appValue.appKey)
  
  return (
    <WindowFrame 
      initialHeight={app?.initialHeight} 
      initialWidth={app?.initialWidth}
      resizable={app?.resizable}
      draggrable={app?.draggable}
      canFullscreen={app?.canFullscreen}
      canMinimize={app?.canMinimize}
      minWidth={app?.minWidth}
      maxWidth={app?.maxWidth}
      minHeight={app?.minHeight}
      maxHeight={app?.maxHeight}
      focused={focused?.id == props.appValue.id} 
      onFocus={() => setFocused(props.appValue)}
      onClose={() => closeApp(props.appValue.id)}
      initialPosition={'center'}>
        {app?.component}
    </WindowFrame>
  )
}

export { App }