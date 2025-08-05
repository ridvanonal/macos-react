import { IconBedFilled, IconBriefcaseFilled, IconChevronRight, IconMoonFilled, IconQuestionMark, IconSunset } from "@tabler/icons-react"
import { SettingsItemIcon } from "../components/settings-item-icon"
import { Button } from "../components/button"
import * as Switch from "@radix-ui/react-switch"

const Focus = () => {
  return (
    <div className="flex flex-col gap-3 mx-4 text-sm pb-3">
      <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md">
        <div className="flex items-center gap-3 border-b border-b-os-foreground/5 pb-2">
          <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#8280EB] to-[#5856D6] !p-1 text-white' icon={IconMoonFilled}/>
          <span>Do Not Disturb</span>
          <IconChevronRight size={20} className="opacity-50 ml-auto"/>
        </div>
        <div className="flex items-center gap-3 border-b border-b-os-foreground/5 py-2">
          <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#B3B3B7] to-[#8E8E93] !p-1 text-white' icon={IconSunset}/>
          <span>Night</span>
          <IconChevronRight size={20} className="opacity-50 ml-auto"/>
        </div>
        <div className="flex items-center gap-3 border-b border-b-os-foreground/5 py-2">
          <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#2ED0C9] to-[#28C7BE] !p-1 text-white' icon={IconBedFilled}/>
          <span>Sleep</span>
          <IconChevronRight size={20} className="opacity-50 ml-auto"/>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#89CEE1] to-[#59ADC4] !p-1 text-white' icon={IconBriefcaseFilled}/>
          <span>Work</span>
          <IconChevronRight size={20} className="opacity-50 ml-auto"/>
        </div>
      </div>
      <div className="text-right">
        <Button className="inline-flex items-center px-2 text-xs h-5 rounded-md">
          Add Focus...
        </Button>
      </div>
      <div className="border border-os-foreground/5 bg-os-foreground/[.01] mt-3 dark:bg-os-foreground/[.03] p-2.5 rounded-md">
        <div className="flex gap-2 items-start">
          <div>
            <span>Share across devices</span>
            <p className="opacity-60 text-xs">
              Focus is shared across your devices, and turning one on for this device will turn it on for all of them.
            </p>
          </div>
          <Switch.Root disabled className="os-switch small ml-auto">
            <Switch.Thumb/>
          </Switch.Root>
        </div>
      </div>
      <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md">
        <div className="flex gap-1 items-center">
          <div className="flex gap-2 items-start w-full">
            <div>
              <span>Focus status</span>
              <p className="opacity-60 text-xs">
                When you give an app permission, it can share that you have notificaitons silenced when using Focus.
              </p>
            </div>
            <span className="opacity-60">On</span>
          </div>
          <IconChevronRight size={20} className="opacity-50 ml-auto"/>
        </div>
      </div>
      <div className="text-right">
        <Button className="inline-flex items-center justify-center size-5 rounded-full">
          <IconQuestionMark size={16}/>
        </Button>
      </div>

    </div>
  )
}
  
export { Focus }