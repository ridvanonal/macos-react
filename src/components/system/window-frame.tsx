import { createContext, PropsWithChildren, useCallback, useContext, useMemo, useState } from "react"
import { Rnd } from "react-rnd"
import { useSpaceContext } from "./space"
import { cn } from "../../utils/cn"

interface WindowFrameProps extends PropsWithChildren{
  initialPosition?:'center'|{x:number,y:number}
  initialHeight?:number
  initialWidth?:number
  minHeight?:number
  maxHeight?:number
  minWidth?:number
  maxWidth?:number
  resizable?:boolean
  draggrable?:boolean
  focused?:boolean
  canFullscreen?:boolean
  canMinimize?:boolean
  onFocus?:() => void
  onClose:() => void
}

const DEFAULT_WINDOW_HEIGHT = 200
const DEFAULT_WINDOW_WIDTH = 200

const windowFrameVariantClassName = {
  focused:'bg-os-surface/70 backdrop-blur-2xl wf-shadow-focused z-50',
  DEFAULT:'bg-os-surface wf-shadow-default'
}

interface WindowFrameContextValue{
  setMinimize: ()=>void
  setFullscreen: ()=>void
  close:()=> void
  focused?:boolean
  canFullscreen?:boolean
  canMinimize?:boolean
}

const WindowFrameContext = createContext<WindowFrameContextValue>({} as WindowFrameContextValue)

const useWindowFrameContext = () => {
  const context = useContext(WindowFrameContext)
  if(!context) throw new Error("useWindowFrameContext must use in WindowFrameContext.Provider");
  return context
}

const WindowFrame = (props:WindowFrameProps) => {
  const spaceContext = useSpaceContext()

  const height = props.initialHeight || DEFAULT_WINDOW_HEIGHT
  const width = props.initialWidth || DEFAULT_WINDOW_WIDTH

  const center = useMemo(()=> {
    return ({
      x: Math.round(spaceContext.width / 2 - (width / 2)),
      y: Math.round(spaceContext.height / 2 - (height / 2))
    })
  },[spaceContext])

  const [position, setPosition] = useState(props.initialPosition == 'center' ? center : (props.initialPosition || {x:0,y:0}))
  const [size, setSize] = useState({ width, height })

  const setFullscreen = useCallback(()=>{
    setPosition({x:0,y:0})
    setSize({width:spaceContext.width, height:spaceContext.height})
  },[spaceContext])

  const setMinimize = useCallback(()=>{},[])
  const close = useCallback(()=>{ props.onClose() },[])

  return (
    <Rnd 
      size={size}
      position={position}
      className={cn("bg-os-surface text-os-foreground rounded-xl overflow-hidden",props.focused ? windowFrameVariantClassName.focused : windowFrameVariantClassName.DEFAULT)}
      bounds={'parent'}
      enableResizing={props.resizable != false}
      disableDragging={props.draggrable == false}
      onMouseDown={() => props.onFocus?.()}
      minHeight={props.minHeight}
      maxHeight={props.maxHeight}
      minWidth={props.minWidth}
      maxWidth={props.maxWidth}
      onDragStop={(_,d) => setPosition({x:d.x, y:d.y})}
      dragHandleClassName="wfd"
      onResize={(_e,_direction,ref,_delta,pos) => { setPosition(pos); setSize({width:ref.offsetWidth, height:ref.offsetHeight}) }}>
        <WindowFrameContext.Provider value={{setFullscreen,setMinimize,close,focused:props.focused,canMinimize:props.canMinimize, canFullscreen:props.canFullscreen}}>
          {props.children}
        </WindowFrameContext.Provider>
    </Rnd>
  )
}

const WindowFrameControl = ({className}:{className?:string}) => {
  const { focused, setFullscreen, setMinimize, close, canFullscreen, canMinimize } = useWindowFrameContext()

  return (
    <div className={cn("flex gap-1.5 p-2 wfd items-center",className)}>
      <button className={cn("size-3 border rounded-full",focused ? 'bg-red-light border-os-foreground/15 dark:border-none dark:bg-red-dark' : 'bg-os-foreground/30 border-none pointer-events-none')} onClick={close}></button>
      <button className={cn("size-3 border rounded-full",focused && canMinimize != false ? 'bg-yellow-light border-os-foreground/15 dark:border-none dark:bg-yellow-dark' : 'bg-os-foreground/30 border-none pointer-events-none')} onClick={setMinimize}></button>
      <button className={cn("size-3 border rounded-full",focused && canFullscreen != false ? 'bg-green-light border-os-foreground/15 dark:border-none dark:bg-green-dark' : 'bg-os-foreground/30 border-none pointer-events-none')} onClick={setFullscreen}></button>
    </div>
  )
}



export { WindowFrame,WindowFrameControl, useWindowFrameContext }