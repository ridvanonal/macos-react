import { IconBrandAppleFilled } from "@tabler/icons-react"
import { useSettingStore } from "../../../../stores/settings"
import Sonoma from '/assets/background/dark/sonoma.jpg'
import { cn } from "../../../../utils/cn"

const ThemeSymbols = () => {
  const { theme, setTheme } = useSettingStore()
  
  return (
    <> 
      <div className="flex gap-3">
        <div className='flex flex-col gap-2 items-center' onClick={() => setTheme('light')}>
          <div className={cn({'rounded-md ring ring-blue-light dark:ring-blue-dark':theme == 'light'})}>
            <ThemeLightSymbol/>
          </div>
          <span className="opacity-60 text-xs">Light</span>
        </div>
        <div className='flex flex-col gap-2 items-center' onClick={() => setTheme('dark')}>
          <div className={cn({'rounded-md ring ring-blue-light dark:ring-blue-dark':theme == 'dark'})}>
            <ThemeDarkSymbol/>
          </div>
          <span className="opacity-60 text-xs">Dark</span>
        </div>
      </div>
    </>
  )
}

const ThemeLightSymbol = () =>{
  return (
    <div className="pointer-events-none w-[68px] h-[44px] relative overflow-hidden rounded-md after:shadow-[inset_0px_0px_0px_1px_rgb(255,255,255,0.2)] after:z-50 after:absolute after:h-full after:w-full after:top-0 after:rounded-md">
      <img src={Sonoma} className="absolute h-full w-auto object-cover"/>
      <div className="bg-white/15 backdrop-blur-3xl h-[calc(13%_+_3px)] pb-[1px] pt-[2px] rounded-t-md">
        <div className="bg-black/10 text-black w-fit px-1 mx-1 h-full flex items-center rounded-[1px]">
          <IconBrandAppleFilled size={6}/>
        </div>
      </div>
      <div className="w-[32px] h-[11px] bg-red-light absolute top-[calc(13%_+_3px)] left-1 rounded-[4px] bg-white/45 backdrop-blur px-0.5 py-0.5 pb-1">
        <div className="w-full h-full bg-os-accent rounded-[2px]"></div> 
      </div>
      <div className="w-[50px] h-[20px] bg-white/45 absolute bottom-0 left-[18px] rounded-tl backdrop-blur rounded-br-md overflow-hidden">
        <div className="flex h-full">
          <div className="flex p-1 gap-1">
            <div className="size-[7px] rounded-full bg-red-light"></div>
            <div className="size-[7px] rounded-full bg-yellow-light"></div>
            <div className="size-[7px] rounded-full bg-green-light"></div>
          </div>
          <div className="w-full h-full bg-white border-l border-l-os-black/30"></div>
        </div>
      </div>
    </div>
  )
}

const ThemeDarkSymbol = () => {
  return (
    <div className="pointer-events-none w-[68px] h-[44px] relative overflow-hidden rounded-md after:shadow-[inset_0px_0px_0px_1px_rgb(255,255,255,0.2)] after:z-50 after:absolute after:h-full after:w-full after:top-0 after:rounded-md">
      <img src={Sonoma} className="absolute h-full w-auto object-cover"/>
      <div className="bg-black/15 backdrop-blur-3xl  h-[calc(13%_+_3px)] pb-[1px] pt-[2px] rounded-t-md">
        <div className="bg-white/10 text-white w-fit px-1 mx-1 h-full flex items-center rounded-[1px]">
          <IconBrandAppleFilled size={6}/>
        </div>
      </div>
      <div className="w-[32px] h-[11px] absolute top-[calc(13%_+_3px)] left-1 rounded-[4px] bg-black/15 backdrop-blur px-0.5 py-0.5 pb-1">
        <div className="w-full h-full bg-os-accent rounded-[2px]"></div> 
      </div>
      <div className="w-[50px] h-[20px] bg-black/45 absolute bottom-0 left-[18px] rounded-tl-md backdrop-blur rounded-br-md overflow-hidden">
        <div className="flex h-full">
          <div className="flex p-1 gap-1">
            <div className="size-[7px] rounded-full bg-red-light"></div>
            <div className="size-[7px] rounded-full bg-yellow-light"></div>
            <div className="size-[7px] rounded-full bg-green-light"></div>
          </div>
          <div className="w-full h-full bg-black/50 border-l border-l-os-black/30"></div>
        </div>
      </div>
    </div>
  )
}

export { ThemeSymbols }