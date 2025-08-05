import { createContext, useContext } from "react"
import { App } from "./app"
import { mainAppValue } from "../../data/app-key"
import { useAppStore } from "../../stores/app"
import { useAppContext } from "../../app"
import { useElementSize } from "../../hooks/element-size"

interface SpaceContextValue{
  height:number
  width:number
}

const SpaceContext = createContext<SpaceContextValue>({} as SpaceContextValue)

const useSpaceContext = () => {
  const context = useContext(SpaceContext)
  if(!context) throw new Error("useSpaceContext must use in SpaceContext.Provider");
  return context
}

const Space = () => {
  const {ref,size} = useElementSize<HTMLDivElement>()
  const setFocused = useAppStore(store => store.setFocused)
  const { apps } = useAppContext()

  return (
    <div ref={ref} className="h-full w-full relative" onClick={(e) => e.target == e.currentTarget ? setFocused(mainAppValue) : null}>
      <SpaceContext.Provider value={{...size}}>
        {size.height > 0 && (
          <>
            {apps.map(a => <App key={a.id} appValue={a}/>)}
          </>
        )}
      </SpaceContext.Provider>
    </div>
  )
}

export { Space, useSpaceContext }