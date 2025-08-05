import { IconAccessible, IconChevronRight, IconDeviceDesktop, IconEar, IconKeyboard, IconLayoutGrid, IconMessage2Bolt, IconMessageDots, IconMessageMinus, IconPhoneCalling, IconPointer, IconQuote, IconVolume, IconZoomScan } from "@tabler/icons-react"
import { SettingsItemIcon } from "../components/settings-item-icon"

const Accessibility = () => {
  return (
    <div className="flex flex-col gap-6 mx-4 text-sm pb-3">
      <div>
        <span className="px-3 font-bold ">Vision</span>
        <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md mt-2">
          <div className="flex items-center gap-3 border-b border-b-os-foreground/5 pb-2">
            <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#2B2B2B] to-[#000000] text-white' icon={IconAccessible}/>
            <span>Voice Over</span>
            <IconChevronRight size={20} className="opacity-50 ml-auto"/>
          </div>
          <div className="flex items-center gap-3 border-b border-b-os-foreground/5 py-2">
            <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#2B2B2B] to-[#000000] text-white' icon={IconZoomScan}/>
            <span>Zoom</span>
            <IconChevronRight size={20} className="opacity-50 ml-auto"/>
          </div>
          <div className="flex items-center gap-3 border-b border-b-os-foreground/5 py-2">
            <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#3296FF] to-[#1D7BFF] text-white' icon={IconDeviceDesktop}/>
            <span>Display</span>
            <IconChevronRight size={20} className="opacity-50 ml-auto"/>
          </div>
          <div className="flex items-center gap-3 border-b border-b-os-foreground/5 py-2">
            <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#2B2B2B] to-[#000000] text-white' icon={IconMessageDots}/>
            <span>Spoken Content</span>
            <IconChevronRight size={20} className="opacity-50 ml-auto"/>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#2B2B2B] to-[#000000] text-white' icon={IconQuote}/>
            <span>Description</span>
            <IconChevronRight size={20} className="opacity-50 ml-auto"/>
          </div>
        </div>
      </div>
      <div>
        <span className="px-3 font-bold ">Hearing</span>
        <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md mt-2">
          <div className="flex items-center gap-3 border-b border-b-os-foreground/5 pb-2">
            <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#3296FF] to-[#1D7BFF] text-white' icon={IconEar}/>
            <span>Hearing Devices</span>
            <IconChevronRight size={20} className="opacity-50 ml-auto"/>
          </div>
          <div className="flex items-center gap-3 border-b border-b-os-foreground/5 py-2">
            <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#FB6386] to-[#FB2C55] text-white' icon={IconVolume}/>
            <span>Audio</span>
            <IconChevronRight size={20} className="opacity-50 ml-auto"/>
          </div>
          <div className="flex items-center gap-3 border-b border-b-os-foreground/5 py-2">
            <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#62EA77] to-[#32D74B] text-white' icon={IconPhoneCalling}/>
            <span>RTT</span>
            <IconChevronRight size={20} className="opacity-50 ml-auto"/>
          </div>
          <div className="flex items-center gap-3 border-b border-b-os-foreground/5 py-2">
            <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#2B2B2B] to-[#000000] text-white' icon={IconMessageMinus}/>
            <span>Captions</span>
            <IconChevronRight size={20} className="opacity-50 ml-auto"/>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#2B2B2B] to-[#000000] text-white' icon={IconMessage2Bolt}/>
            <span>Live Captions</span>
            <IconChevronRight size={20} className="opacity-50 ml-auto"/>
          </div>
        </div>
      </div>
      <div>
        <span className="px-3 font-bold ">Motor</span>
        <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md mt-2">
          <div className="flex items-center gap-3 border-b border-b-os-foreground/5 pb-2">
            <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#3296FF] to-[#1D7BFF] text-white' icon={IconEar}/>
            <span>Voice Control</span>
            <IconChevronRight size={20} className="opacity-50 ml-auto"/>
          </div>
          <div className="flex items-center gap-3 border-b border-b-os-foreground/5 py-2">
            <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#B3B3B7] to-[#8E8E93] text-white' icon={IconKeyboard}/>
            <span>Keyboard</span>
            <IconChevronRight size={20} className="opacity-50 ml-auto"/>
          </div>
          <div className="flex items-center gap-3 border-b border-b-os-foreground/5 py-2">
            <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#B3B3B7] to-[#8E8E93] text-white' icon={IconPointer}/>
            <span>Pointer Control</span>
            <IconChevronRight size={20} className="opacity-50 ml-auto"/>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <SettingsItemIcon size={20} className='bg-gradient-to-b from-[#2B2B2B] to-[#000000] text-white' icon={IconLayoutGrid}/>
            <span>Switch Control</span>
            <IconChevronRight size={20} className="opacity-50 ml-auto"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Accessibility }