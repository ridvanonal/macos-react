import { IconWifi } from "@tabler/icons-react"
import { SettingsItemIcon } from "../components/settings-item-icon"
import * as Switch from "@radix-ui/react-switch"

const WiFi = () => {
  return (
    <div className="flex flex-col gap-3 mx-4 text-sm pb-3">
      <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md">
        <div className="flex items-start border-b border-b-os-foreground/5 pb-3">
          <div className="flex items-center gap-3">
            <SettingsItemIcon size={24} className='bg-gradient-to-b from-[#3296FF] to-[#1D7BFF] text-white' icon={IconWifi}/>
            <span>Wi-Fi</span>
          </div>
          <Switch.Root disabled className="os-switch ml-auto">
            <Switch.Thumb/>
          </Switch.Root>
        </div>
        <div className="flex gap-2 pt-2 items-center">
          <span className="size-2.5 rounded-full bg-red-light dark:bg-red-dark"></span>
          <span className="opacity-60">Wi-Fi is off</span>
        </div>
      </div>
      <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md">
        <div className="border-b border-b-os-foreground/5 pb-3">
          <div className="flex gap-2 items-start">
            <div>
              <span>Ask to join networks</span>
              <p className="opacity-60 text-xs">Known networks will be joined automatically. If no known networks are available, you will have to manually select network.</p>
            </div>
            <Switch.Root disabled className="os-switch small ml-auto">
              <Switch.Thumb/>
            </Switch.Root>
          </div>
        </div>
        <div className="pt-2">
          <div className="flex gap-2 items-start">
            <div>
              <span>Ask to join hotspots</span>
              <p className="opacity-60 text-xs">Allow this Mac to automatically discover nearby personal hotspots when no Wi-Fi network is available.</p>
            </div>
            <Switch.Root disabled defaultChecked={true} className="os-switch small ml-auto">
              <Switch.Thumb/>
            </Switch.Root>
          </div>
        </div>
      </div>
    </div>
  )
}

export { WiFi }