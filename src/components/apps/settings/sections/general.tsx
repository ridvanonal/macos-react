import { IconAccessPoint, IconBrandAppleFilled, IconCalendarTime, IconChevronRight, IconClockRecord, IconDatabase, IconInfoHexagonFilled, IconList, IconRotateClockwise, IconServer, IconSettingsUp, IconWalk, IconWorld } from "@tabler/icons-react"
import { SettingsItemIcon } from "../components/settings-item-icon"

const General = () => {
  return (
    <div className="flex flex-col gap-3 mx-4 text-sm pb-3">
      <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md">
        <div className="flex items-center gap-3 border-b border-b-os-foreground/5 pb-2">
          <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#B3B3B7] to-[#8E8E93] text-white' icon={IconInfoHexagonFilled}/>
          <span>About</span>
          <IconChevronRight size={20} className="opacity-50 ml-auto"/>
        </div>
        <div className="flex items-center gap-3 border-b border-b-os-foreground/5 py-2">
          <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#B3B3B7] to-[#8E8E93] text-white' icon={IconSettingsUp}/>
          <span>Sofware Update</span>
          <IconChevronRight size={20} className="opacity-50 ml-auto"/>
        </div>
        <div className="flex items-center gap-3 border-b border-b-os-foreground/5 py-2">
          <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#B3B3B7] to-[#8E8E93] text-white' icon={IconDatabase}/>
          <span>Storage</span>
          <IconChevronRight size={20} className="opacity-50 ml-auto"/>
        </div>
        <div className="flex items-center gap-3 border-b border-b-os-foreground/5 py-2">
          <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#FBFBFB] to-[#E6E6E6] text-blue-light' icon={IconAccessPoint}/>
          <span>AirDrop & Handoff</span>
          <IconChevronRight size={20} className="opacity-50 ml-auto"/>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#B3B3B7] to-[#8E8E93] text-white' icon={IconList}/>
          <span>Login Items</span>
          <IconChevronRight size={20} className="opacity-50 ml-auto"/>
        </div>
      </div>
      <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md">
        <div className="flex items-center gap-3">
          <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#FBFBFB] to-[#E6E6E6] text-red-light' icon={IconBrandAppleFilled}/>
          <span>AppleCare & Warrantly</span>
          <IconChevronRight size={20} className="opacity-50 ml-auto"/>
        </div>
      </div>
      <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md">
        <div className="flex items-center gap-3 border-b border-b-os-foreground/5 pb-2">
          <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#3296FF] to-[#1D7BFF] text-white' icon={IconWorld}/>
          <span>Language & Region</span>
          <IconChevronRight size={20} className="opacity-50 ml-auto"/>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#3296FF] to-[#1D7BFF] text-white' icon={IconCalendarTime}/>
          <span>Date & Time</span>
          <IconChevronRight size={20} className="opacity-50 ml-auto"/>
        </div>
      </div>
      <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md">
        <div className="flex items-center gap-3 border-b border-b-os-foreground/5 pb-2">
          <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#B3B3B7] to-[#8E8E93] text-white' icon={IconWalk}/>
          <span>Sharing</span>
          <IconChevronRight size={20} className="opacity-50 ml-auto"/>
        </div>
        <div className="flex items-center gap-3 border-b border-b-os-foreground/5 py-2">
          <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#FBFBFB] to-[#E6E6E6] text-green-light-accessible' icon={IconClockRecord}/>
          <span>Time Machine</span>
          <IconChevronRight size={20} className="opacity-50 ml-auto"/>
        </div>
        <div className="flex items-center gap-3 border-b border-b-os-foreground/5 py-2">
          <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#B3B3B7] to-[#8E8E93] text-white' icon={IconRotateClockwise}/>
          <span>Transfer or Reset</span>
          <IconChevronRight size={20} className="opacity-50 ml-auto"/>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#B3B3B7] to-[#8E8E93] text-white' icon={IconServer}/>
          <span>Startup Disk</span>
          <IconChevronRight size={20} className="opacity-50 ml-auto"/>
        </div>
      </div>
    </div>
  )
}

export { General }