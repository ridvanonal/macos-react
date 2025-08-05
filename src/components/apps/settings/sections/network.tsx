import { IconArrowsMoveHorizontal, IconBoltFilled, IconChevronDown, IconChevronRight, IconDots, IconQuestionMark, IconShieldFilled, IconWifi } from "@tabler/icons-react"
import { SettingsItemIcon } from "../components/settings-item-icon"
import { Button } from "../components/button"

const Network = () => {
  return(
    <div className="flex flex-col gap-3 mx-4 text-sm pb-3">
      <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md">
        <div className="flex items-center gap-3">
          <SettingsItemIcon size={24} className='bg-gradient-to-b from-[#B3B3B7] to-[#8E8E93] text-white' icon={IconArrowsMoveHorizontal}/>
          <div className="flex flex-col">
            <span>Ethernet</span>
            <div className="text-xs flex gap-1.5 items-center">
              <span className="size-2 rounded-full bg-red-light dark:bg-red-dark"></span>
              <span className="opacity-60">Not Connected</span>
            </div>
          </div>
          <IconChevronRight size={20} className="opacity-50 ml-auto"/>
        </div>
      </div>
      <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md">
        <div className="flex items-center gap-3">
          <SettingsItemIcon size={16} className='bg-gradient-to-b from-[#FCB137] to-[#FC9501] text-white !p-1.5' icon={IconShieldFilled}/>
          <div className="flex flex-col">
            <span>Firewall</span>
            <div className="text-xs flex gap-1.5 items-center">
              <span className="size-2 rounded-full bg-os-foreground/30"></span>
              <span className="opacity-60">Inactive</span>
            </div>
          </div>
          <IconChevronRight size={20} className="opacity-50 ml-auto"/>
        </div>
      </div>
      <span className="px-3 font-bold mt-3">Other Services</span>
      <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md">
        <div className="flex items-center gap-3 border-b border-b-os-foreground/5 pb-2">
          <SettingsItemIcon size={16} className='bg-gradient-to-b from-[#B3B3B7] to-[#8E8E93] text-white !p-1.5' icon={IconBoltFilled}/>
          <div className="flex flex-col">
            <span>Thunderbolt Bridge</span>
            <div className="text-xs flex gap-1.5 items-center">
              <span className="size-2 rounded-full bg-os-foreground/30 dark:bg-red-dark"></span>
              <span className="opacity-60">Not Connected</span>
            </div>
          </div>
          <IconChevronRight size={20} className="opacity-50 ml-auto"/>
        </div>
        <div className="flex items-center gap-3 border-b border-b-os-foreground/5 pb-3 pt-2">
          <SettingsItemIcon size={24} className='bg-gradient-to-b from-[#3296FF] to-[#1D7BFF] text-white' icon={IconWifi}/>
          <div className="flex flex-col">
            <span>Wi-Fi</span>
            <div className="text-xs flex gap-1.5 items-center">
              <span className="size-2 rounded-full bg-red-light dark:bg-red-dark"></span>
              <span className="opacity-60">Off</span>
            </div>
          </div>
          <IconChevronRight size={20} className="opacity-50 ml-auto"/>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <SettingsItemIcon size={24} className='bg-gradient-to-b from-[#B3B3B7] to-[#8E8E93] text-white' icon={IconArrowsMoveHorizontal}/>
          <div className="flex flex-col">
            <span>iPhone USB</span>
            <div className="text-xs flex gap-1.5 items-center">
              <span className="size-2 rounded-full bg-os-foreground/30 dark:bg-red-dark"></span>
              <span className="opacity-60">Not Connected</span>
            </div>
          </div>
          <IconChevronRight size={20} className="opacity-50 ml-auto"/>
        </div>
      </div>
      <div className="flex gap-2 justify-end">
        <Button className="inline-flex items-center px-1.5 h-5 rounded-md">
          <IconDots size={18}/>
          <IconChevronDown size={18}/>
        </Button>
        <Button className="inline-flex items-center justify-center size-5 rounded-full">
          <IconQuestionMark size={16}/>
        </Button>
      </div>
    </div>
  )
}

export { Network }