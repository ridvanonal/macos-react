import { motion, MotionValue, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import { useDockStore } from "../../stores/dock"
import { AppKey } from "../../data/app-key"
import { AppIcon } from "./app-icon"

const Dock = () => {
  let mouseX = useMotionValue(Infinity)
  const dockStore = useDockStore() 

  return (
    <motion.div 
      onMouseMove={(e) => mouseX.set(e.pageX)} 
      onMouseLeave={() => mouseX.set(Infinity)} 
      className="mx-auto flex h-[3.75rem] min-h-[3.75rem] items-end gap-3 rounded-2xl shadow-os-dock dark:shadow-os-dock-dark bg-os-surface/50 backdrop-blur-2xl px-2 pb-3 mb-2">
      {dockStore.appKeys.map((a,i) => (
        <DockItem key={i} mouseX={mouseX} appKey={a} scale/>
      ))}
      <DockSeperator/>
        <DockItem mouseX={mouseX} appKey={AppKey.Trash}></DockItem>
    </motion.div>
  )
}

const DockSeperator = () => {
  return <div className="h-9 w-[1px] mx-1 bg-os-foreground/20"></div>
}

const DockItem = ({mouseX,appKey,scale}:{mouseX:MotionValue,appKey:AppKey,scale?:boolean}) => {
  let ref = useRef<HTMLDivElement>(null)

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? {x:0, width:0}
    return val - bounds.x - bounds.width / 2
  })

  let widthSync = useTransform(distance, [-150,0,150], [40,100,40])
  let width = useSpring(widthSync,{mass:0.1, stiffness:150, damping:12})

  return (
    <motion.div ref={ref} style={{width}} className="aspect-square w-10">
      <AppIcon secondary appKey={appKey} scaled={scale}/>
    </motion.div>
  )

}

export { Dock }