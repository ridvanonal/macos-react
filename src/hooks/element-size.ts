import { useEffect, useRef, useState } from "react"

const useElementSize = <T extends HTMLElement,>() => {
  const ref = useRef<T>(null)
  const [size, setSize] = useState({ width:0, height:0 })

  useEffect(()=> {
    const updateSize = () => {
      setSize({
        width: ref.current ? (ref.current as HTMLElement).getBoundingClientRect().width : 0,
        height: ref.current ? (ref.current as HTMLElement).getBoundingClientRect().height : 0
      })
    }
    updateSize()
    window.addEventListener('resize',updateSize)
    return () => window.removeEventListener('resize',updateSize)
  },[])

  return {size,ref}
}

export { useElementSize }