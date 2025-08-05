import { PropsWithChildren } from "react"
import { cn } from "../../../../utils/cn"

interface ButtonProps extends PropsWithChildren{
  onClick?:()=>void
  className?:string
}

const Button = (props:ButtonProps) => {
  return (
    <button onClick={props.onClick} className={cn("bg-white shadow-[inset_0px_0px_0px_0.5px_hsl(var(--os-foreground)/.3),0px_1px_2px_-1px_hsl(var(--os-black)/.75)] dark:shadow-[0px_1px_2px_-1px_hsl(var(--os-black)/.5)] dark:bg-os-foreground/20",props.className)}>
      { props.children }
    </button>
  )
}

export { Button }