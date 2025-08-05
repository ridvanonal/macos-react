import { OSAccentColor, useSettingStore } from "../../../../stores/settings"
import * as RadioGroup from '@radix-ui/react-radio-group'
import { cn } from "../../../../utils/cn"
import * as Select from '@radix-ui/react-select'
import { ThemeSymbols } from "../components/theme-symbols"
import { SelectButton } from "../../../system/select-button"
import { IconCheck } from "@tabler/icons-react"
import { useCallback } from "react"
import * as Switch from "@radix-ui/react-switch"

const accentColors = [
  {key:'multicolor', name:'Multicolor', className:'os-accent-multicolor'},
  {key:'blue', name:'Blue', className:'bg-os-accent-blue'},
  {key:'purple', name:'Purple', className:'bg-os-accent-purple'},
  {key:'pink', name:'Pink', className:'bg-os-accent-pink'},
  {key:'red', name:'Red', className:'bg-os-accent-red'},
  {key:'orange', name:'Orange', className:'bg-os-accent-orange'},
  {key:'yellow', name:'Yellow', className:'bg-os-accent-yellow'},
  {key:'green', name:'Green', className:'bg-os-accent-green'},
  {key:'gray', name:'Graphite', className:'bg-os-accent-gray'},
]

const Appearance = () => {
  const { setAccent, accent, sideBarSize, setSideBarSize, highlight, setHighlight,windowTint, setWindowTint } = useSettingStore()

  const onAccentChange = useCallback((value:string) => {
    setAccent(value as OSAccentColor)
    setHighlight(value as OSAccentColor)
  },[])

  return (
    <div className="flex flex-col gap-3 mx-4 text-sm pb-3">
      <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md">
        <div className="flex items-start justify-between border-b border-b-os-foreground/5 pb-3">
          <span>Appearance</span>
          <div>
            <ThemeSymbols/>
          </div>
        </div>
        <div className="flex items-start justify-between pt-2 border-b border-b-os-foreground/5 pb-1.5">
          <span>Accent color</span>
          <RadioGroup.Root className="flex gap-2" value={accent} onValueChange={(value) => onAccentChange(value)}>
            {accentColors.map((ac,i) => (
              <div className="flex flex-col items-center pb-5 relative" key={i}>
                <RadioGroup.Item value={ac.key} className={cn("size-4 rounded-full flex items-center justify-center shadow-[inset_0px_0px_0px_1px_hsl(var(--os-foreground)/.15)]",ac.className)}>
                  <RadioGroup.Indicator className="bg-white size-1.5 rounded-full"/>
                </RadioGroup.Item>
                {accent == ac.key && <label className={cn("absolute bottom-0 opacity-60 text-xs",{'right-0':i == accentColors.length - 1})}>{ac.name}</label>}
              </div>
            ))}
          </RadioGroup.Root>
        </div>
        <div className="flex items-start justify-between pt-2 border-b border-b-os-foreground/5 pb-2">
          <span>Highlight color</span>
          <Select.Root value={highlight} onValueChange={(value) => setHighlight(value as OSAccentColor)}>
            <Select.Trigger className="outline-none">
              <div className="flex gap-2 items-center min-w-24 justify-end">
                <div className={cn('shadow-[inset_0px_0px_0px_1px_hsl(var(--os-foreground)/.2)]',highlight == 'multicolor' ? 'os-accent-multicolor-linear opacity-30 shadow-[inset_0px_0px_0px_1px_hsl(var(--os-foreground)/.5)]' : accentColors.find(ac => ac.key == highlight)?.className,'bg-opacity-20 aspect-video h-3')}></div>
                <Select.Value/>
                <SelectButton/>
              </div>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content align="end" className="z-[60] rounded-lg after:!rounded-lg bg-os-surface/50 backdrop-blur-2xl wf-shadow-focused overflow-hidden outline-none text-sm font-semibold text-os-foreground">
                <Select.ScrollUpButton/>
                <Select.Viewport className="p-1">
                  {accentColors.map((ac,i) => (
                    <Select.Item key={i} value={ac.key} className="data-[state='checked']:bg-os-accent data-[state='checked']:text-white rounded-md pr-4 py-0.5 m-0.5 flex items-center pl-6 gap-1.5 outline-none relative">
                      <Select.ItemIndicator className="size-4 flex items-center justify-center absolute left-0.5">
                        <IconCheck size={16}/>
                      </Select.ItemIndicator>
                      <div className={cn('shadow-[inset_0px_0px_0px_1px_hsl(var(--os-foreground)/.2)]',ac.key == 'multicolor' ? 'os-accent-multicolor-linear opacity-30 shadow-[inset_0px_0px_0px_1px_hsl(var(--os-foreground)/.5)]' : ac.className,'bg-opacity-20 aspect-video h-3')}></div>
                      <Select.ItemText>{ac.key == 'multicolor' ? 'Accent Color' : ac.name}</Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Viewport>
                <Select.ScrollDownButton/>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>
        <div className="flex items-start justify-between pt-2 border-b border-b-os-foreground/5 pb-2">
          <span>Sidebar icon size</span>
          <Select.Root value={sideBarSize} onValueChange={(value) => setSideBarSize(value as 'sm'|'md'|'lg')}>
            <Select.Trigger className="outline-none">
              <div className="flex gap-2 items-center min-w-24 justify-end">
                <Select.Value/>
                <SelectButton/>
              </div>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content align="end" className="z-[60] rounded-lg after:!rounded-lg bg-os-surface/50 backdrop-blur-2xl wf-shadow-focused overflow-hidden outline-none text-sm font-semibold text-os-foreground">
                <Select.ScrollUpButton />
                <Select.Viewport className="p-1">
                  <Select.Item  value="sm" className="data-[state='checked']:bg-os-accent data-[state='checked']:text-white rounded-md pr-4 py-0.5 m-0.5 flex items-center pl-6 gap-1 outline-none relative">
                    <Select.ItemIndicator className="size-4 flex items-center justify-center absolute left-0.5">
                      <IconCheck size={16}/>
                    </Select.ItemIndicator>
                    <Select.ItemText>Small</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="md" className="data-[state='checked']:bg-os-accent data-[state='checked']:text-white rounded-md pr-4 py-0.5 m-0.5 flex items-center pl-6 gap-1 outline-none relative">
                    <Select.ItemIndicator className="size-4 flex items-center justify-center absolute left-0.5">
                      <IconCheck size={16}/>
                    </Select.ItemIndicator>
                    <Select.ItemText>Medium</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="lg" className="data-[state='checked']:bg-os-accent data-[state='checked']:text-white rounded-md pr-4 py-0.5 m-0.5 flex items-center pl-6 gap-1 outline-none relative">
                    <Select.ItemIndicator className="size-4 flex items-center justify-center absolute left-0.5">
                      <IconCheck size={16}/>
                    </Select.ItemIndicator>
                    <Select.ItemText>Large</Select.ItemText>
                  </Select.Item>
                </Select.Viewport>
                <Select.ScrollDownButton/>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>
        <div className="flex items-center justify-between pt-2">
          <span>Allow wallpaper tinting in windows</span>
          <Switch.Root checked={windowTint} onCheckedChange={(value) => setWindowTint(value)} className="os-switch small ml-auto">
            <Switch.Thumb/>
          </Switch.Root>
        </div>
      </div>
      <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md">
        <div className="border-b border-b-os-foreground/5 pb-3">
          <span>Show scroll bars</span>
          <RadioGroup.Root className="flex flex-col gap-1.5 mt-1" defaultValue="1" disabled>
            <div className="flex gap-1.5 items-center">
              <RadioGroup.Item id="scroll-0" value="0" className="os-radio-group-item">
                <RadioGroup.Indicator/>
              </RadioGroup.Item>
              <label htmlFor="scroll-0">Automatically based on mouse or trackpad</label>
            </div>
            <div className="flex gap-1.5 items-center">
              <RadioGroup.Item id="scroll-1" value="1" className="os-radio-group-item">
                <RadioGroup.Indicator/>
              </RadioGroup.Item>
              <label htmlFor="scroll-1">When scrolling</label>
            </div>
            <div className="flex gap-1.5 items-center">
              <RadioGroup.Item id="scroll-2" value="2" className="os-radio-group-item">
                <RadioGroup.Indicator/>
              </RadioGroup.Item>
              <label htmlFor="scroll-2">Allways</label>
            </div>
          </RadioGroup.Root>
        </div>
        <div className="pt-2">
          <span>Click in the scroll bar to</span>
          <RadioGroup.Root className="flex flex-col gap-1.5 mt-1" defaultValue="1" disabled>
            <div className="flex gap-1.5 items-center">
              <RadioGroup.Item id="click-scroll-0" value="0" className="os-radio-group-item">
                <RadioGroup.Indicator/>
              </RadioGroup.Item>
              <label htmlFor="click-scroll-0">Jump to the next page</label>
            </div>
            <div className="flex gap-1.5 items-center">
              <RadioGroup.Item id="click-croll-1" value="1" className="os-radio-group-item">
                <RadioGroup.Indicator/>
              </RadioGroup.Item>
              <label htmlFor="click-scroll-1">Jump to the spot that's clicked</label>
            </div>
          </RadioGroup.Root>
        </div>
      </div>
    </div>
  )
}

export { Appearance }