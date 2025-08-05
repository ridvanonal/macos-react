import * as Switch from "@radix-ui/react-switch"
import * as Select from '@radix-ui/react-select'
import { SelectButton } from '../../../system/select-button'
import { IconCheck, IconPlayerPlayFilled, IconQuestionMark, IconVolume, IconVolume2 } from "@tabler/icons-react"
import { useState } from "react"
import { cn } from "../../../../utils/cn"
import { Slider } from "../components/slider"
import * as Checkbox from "@radix-ui/react-checkbox";
import { Button } from "../components/button"

const Sound = () => {
  const [tab,setTab] = useState<number>(0)

  return (
    <div className="flex flex-col gap-6 mx-4 text-sm pb-3">
      <div>
        <span className="px-3 font-bold">Sound Effects</span>
        <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md mt-2">
          <div className="flex items-start justify-between border-b border-b-os-foreground/5 pb-2">
            <span>Alert sound</span>
            <Select.Root value='jump'>
              <Select.Trigger disabled className="outline-none opacity-60">
                <div className="flex gap-2 items-center min-w-24 justify-end">
                  <Select.Value/>
                  <SelectButton/>
                  <div className="border opacity-60 rounded-full p-0.5 border-os-foreground">
                    <IconPlayerPlayFilled size={12}/>
                  </div>
                </div>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content align="end" className="z-[60] rounded-lg bg-os-surface/50 backdrop-blur-2xl wf-shadow-focused overflow-hidden outline-none text-sm font-semibold text-os-foreground">
                  <Select.ScrollUpButton/>
                  <Select.Viewport className="p-1">
                    <Select.Item value='jump'>
                      <Select.ItemText>Jump</Select.ItemText>
                    </Select.Item>
                  </Select.Viewport>
                  <Select.ScrollDownButton/>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
          <div className="flex items-start justify-between border-b border-b-os-foreground/5 py-2">
            <span>Play sound effects through</span>
            <Select.Root value='default'>
              <Select.Trigger disabled className="outline-none opacity-60">
                <div className="flex gap-2 items-center min-w-24 justify-end">
                  <Select.Value/>
                  <SelectButton/>
                </div>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content align="end" className="z-[60] rounded-lg bg-os-surface/50 backdrop-blur-2xl wf-shadow-focused overflow-hidden outline-none text-sm font-semibold text-os-foreground">
                  <Select.ScrollUpButton/>
                  <Select.Viewport className="p-1">
                    <Select.Item value='default'>
                      <Select.ItemText>Default</Select.ItemText>
                    </Select.Item>
                  </Select.Viewport>
                  <Select.ScrollDownButton/>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
          <div className="flex items-center justify-between border-b border-b-os-foreground/5 py-2">
            <span>Alert volume</span>
            <div className="flex gap-2 items-center">
              <IconVolume2 className="text-os-gray-300" size={22}/>
              <Slider/>
              <IconVolume className="text-os-gray-300" size={22}/>
            </div>
          </div>
          <div className="flex items-start justify-between border-b border-b-os-foreground/5 py-2">
            <span>Play sound on startup</span>
            <Switch.Root disabled defaultChecked className="os-switch small ml-auto">
              <Switch.Thumb/>
            </Switch.Root>
          </div>
          <div className="flex items-start justify-between border-b border-b-os-foreground/5 py-2">
            <span>Play user interface sound effects</span>
            <Switch.Root disabled defaultChecked className="os-switch small ml-auto">
              <Switch.Thumb/>
            </Switch.Root>
          </div>
          <div className="flex items-start justify-between pt-2">
            <span>Play feedback when volume is changed</span>
            <Switch.Root disabled className="os-switch small ml-auto">
              <Switch.Thumb/>
            </Switch.Root>
          </div>
        </div>
      </div>
      <div>
        <span className="px-3 font-bold">Output & Input</span>
        <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md mt-2">
          <div className="border-b border-b-os-foreground/5 pb-2">
            <div className="bg-os-foreground/5 shadow-[inset_0px_0px_0px_0.5px_hsl(var(--os-foreground)/.1)] rounded-md flex">
              <div className={cn("w-full text-center py-0.5 rounded-md",{'dark:bg-os-foreground/20 bg-white shadow-[inset_0px_0px_0px_0.5px_hsl(var(--os-foreground)/.3),0px_0.5px_2px_-1px_hsl(var(--os-black)/.75)] dark:shadow-[inset_0px_0px_0px_1px_hsl(var(--os-foreground)/.2)]': tab == 0})} onClick={() => setTab(0)}>Output</div>
              <div className={cn("w-full text-center py-0.5 rounded-md",{'dark:bg-os-foreground/20 bg-white shadow-[inset_0px_0px_0px_0.5px_hsl(var(--os-foreground)/.3),0px_0.5px_2px_-1px_hsl(var(--os-black)/.75)] dark:shadow-[inset_0px_0px_0px_1px_hsl(var(--os-foreground)/.2)]': tab == 1})} onClick={() => setTab(1)}>Input</div>
            </div>
          </div>
          <div className="text-center pt-2 opacity-60">
            No audio { tab == 0 ? 'output' : 'input' } devices found
          </div>
        </div>
        {tab == 0 && <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md mt-2">
          <div className="flex w-full items-center justify-between">
            <span>Alert volume</span>
            <div className="flex gap-2 items-center">
              <IconVolume2 className="text-os-gray-300" size={22}/>
              <Slider/>
              <IconVolume className="text-os-gray-300" size={22}/>
            </div>
          </div>
          <div className="flex items-center justify-end gap-1.5 mt-2">
            <Checkbox.Root className="os-checkbox">
              <Checkbox.Indicator>
                <IconCheck size={14}/>
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label>Mute</label>
          </div>
        </div>}
        {tab == 1 && <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md mt-2">
          <div className="flex w-full items-center justify-between">
            <span>Input level</span>
            <div className="flex gap-3 items-center">
              {[...Array(15).keys()].map((i) => (
                <div key={i} className="rounded-full h-4 w-2 bg-os-foreground/15 shadow-[inset_0px_0px_0px_1px_hsl(var(--os-foreground)/.05)]"></div>
              ))}
            </div>
          </div>
        </div>}
      </div>
      <div className="text-right">
        <Button className="inline-flex items-center justify-center size-5 rounded-full">
          <IconQuestionMark size={16}/>
        </Button>
      </div>
    </div>
  )
}

export { Sound }