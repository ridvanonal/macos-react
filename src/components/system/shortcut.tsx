import { useCallback } from "react"

interface ShortcutProps{
  className?:string
  keys:string[]
}

const Shortcut = (props:ShortcutProps) => {

  const getKey = useCallback((key:string,i:number)=>{
    if(key == 'shift') return <span key={i} className="font-shortcut-keys align-text-top">4</span>
    else if(key == 'command') return <span key={i} className="font-shortcut-keys align-text-top">2</span>
    else if(key == 'option') return <span key={i} className="font-shortcut-keys align-text-top">3</span>
    else if(key == 'control') return <span key={i} className="font-shortcut-keys align-text-top">1</span>
    else return <span key={i} className="inline-block min-w-4 text-center">{key}</span>
  },[])

  return <div className={props.className}>
    {props.keys.map((p,i) => getKey(p,i))}
  </div>
}

export { Shortcut }