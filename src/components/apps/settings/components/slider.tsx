import { useState } from "react"
import { Range } from "react-range"

const Slider = () => {
  const [values, setValues] = useState([49.5])
  return (
    <Range
      step={16.5}
      min={0}
      max={99}
      values={values}
      onChange={(values) => setValues(values)}
      renderTrack={({ props, children }) => (
        <div {...props} style={{...props.style}} className="h-1 bg-os-gray-100 w-full min-w-32">
          {children}
        </div>
      )}
      renderMark={({props}) => (
        <div {...props} key={props.key} className="h-2 w-0.5 bg-os-gray-200"></div>
      )}
      renderThumb={({ props }) => (
        <div {...props} key={props.key} style={{...props.style}} className="h-5 w-2 dark:bg-os-gray-300 bg-white rounded-full shadow-[inset_0px_0px_0px_0.5px_hsl(var(--os-foreground)/.3),0px_1px_2px_-1px_hsl(var(--os-black)/.75)] dark:shadow-[0px_1px_2px_-1px_hsl(var(--os-black)/.5)] outline-none"/>
      )}
    />
  )
}

export { Slider }