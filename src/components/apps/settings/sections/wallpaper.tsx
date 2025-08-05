import { backgrounds } from "../../../../data/background"
import { useSettingStore } from "../../../../stores/settings"
import { cn } from "../../../../utils/cn"


const Wallpaper = () => {
  const { background, setBackground, theme } = useSettingStore()

  return (
    <div className="grid grid-cols-3 gap-3 p-3">
      {backgrounds.map((b,i) => 
        <div className='flex flex-col items-center gap-1.5'>
          <img className={cn('rounded-md aspect-video',{'ring-2 ring-blue-500':background == b.key})} onClick={() => setBackground(b.key)} key={i} src={theme == 'light' ? b.light : b.dark} alt={b.name} />
          <span className='font-semibold text-xs'>{b.name}</span>
        </div>
      )}
    </div>
  )
}

export { Wallpaper }