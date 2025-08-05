import { createContext, Dispatch, SetStateAction, useCallback, useContext, useState } from "react"
import { MenuBar } from "./components/system/menu-bar"
import { Space } from "./components/system/space"
import { AppKey, AppValue } from "./data/app-key"
import { useAppStore } from "./stores/app"
import { Dock } from "./components/system/dock"
import { customAlphabet } from "nanoid"
import { apps as appsData } from "./data/app"

interface AppContextValue{
  apps:AppValue[]
  setApps:Dispatch<SetStateAction<AppValue[]>>
  openApp:(appKey:AppKey) => void
  closeApp:(id:string) => void
}

const AppContext = createContext<AppContextValue>({} as AppContextValue)

const useAppContext = () => {
  const context = useContext(AppContext)
  if(!context) throw new Error("useAppContext must use in AppContext.Provider");
  return context
}

const App = () => {
  const [apps,setApps] = useState<AppValue[]>([{appKey:AppKey.Notes,id:'dumy'}])
  const setFocused = useAppStore(store => store.setFocused)

  const openApp = useCallback((appKey:AppKey) => {
    const allowMany = appsData.find(ad => ad.key == appKey)?.allowMany != false
    const runnig = apps.find(a => a.appKey == appKey)
    if(runnig && !allowMany) {
      setFocused(runnig)
    } else {
      const appValue = {appKey,id:customAlphabet('0123456789',10)()}
      setApps([...apps,appValue])
      setFocused(appValue)
    }
  },[apps]) 

  const closeApp = useCallback((id:string) => {
    setApps([...apps.filter(a => a.id != id)]) 
  },[apps])

  return (
    <AppContext.Provider value={{apps,setApps,openApp,closeApp}}>
      <div className="h-dvh flex flex-col">
        <MenuBar/>
        <Space/>
        <Dock/>
      </div>
    </AppContext.Provider>
  )
}

export { App, useAppContext }