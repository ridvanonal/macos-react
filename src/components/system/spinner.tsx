import { CSSProperties } from "react"

interface SpinnerProps{
  size?:number
}

const Spinner = (props:SpinnerProps) => {
  return (
    <div className="spinner" style={{'--spinner-size':(props.size || 16)} as CSSProperties}>
      <div className="spinner-blade"></div>
      <div className="spinner-blade"></div>
      <div className="spinner-blade"></div>
      <div className="spinner-blade"></div>
      <div className="spinner-blade"></div>
      <div className="spinner-blade"></div>
      <div className="spinner-blade"></div>
      <div className="spinner-blade"></div>
    </div>
  )
}

export { Spinner }