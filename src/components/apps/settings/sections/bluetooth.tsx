import { IconBluetooth, IconInfoCircle, IconQuestionMark } from "@tabler/icons-react"
import { SettingsItemIcon } from "../components/settings-item-icon"
import AirPods from '/assets/airpods.png'
import { Button } from "../components/button"
import { Spinner } from "../../../system/spinner"
import * as Switch from "@radix-ui/react-switch"

const Bluetooth = () => {
  return (
    <div className="flex flex-col gap-6 mx-4 text-sm pb-3">
      <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md">
        <div className="flex items-start gap-3">
          <SettingsItemIcon size={24} className='bg-gradient-to-b from-[#3296FF] to-[#1D7BFF] text-white' icon={IconBluetooth}/>
          <div>
            <span>Bluetooth</span>
            <p className="opacity-60 mb-0 pb-0">This Mac is discoverable as "Mac mini" white Bluetooth Settings is open.</p>
          </div>
          <Switch.Root disabled className="os-switch ml-auto">
            <Switch.Thumb/>
          </Switch.Root>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="px-3 font-bold">My Devices</span>
        <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md">
          <div className="flex gap-2 items-start">
            <div className="flex items-center">
              <img src={AirPods} className="w-8"/>
              <div className="flex flex-col ml-2">
                <span>AirPods</span>
                <span className="opacity-60">Not Connected</span>
              </div>
            </div>
            <IconInfoCircle className="opacity-60 ml-auto" size={20}/>
          </div>
          <img/>
        </div>
        <div className="text-right">
          <Button className="inline-flex items-center justify-center size-5 rounded-full">
            <IconQuestionMark size={16}/>
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex px-3 justify-between items-center">
          <span className=" font-bold">Nearby Devices</span>
          <Spinner/>
        </div>
        <div className="border border-os-foreground/5 bg-os-foreground/[.01] text-center dark:bg-os-foreground/[.03] p-2.5 rounded-md">
          <span className="opacity-60">Searching...</span>
        </div>
      </div>
    </div>
  )
}

export { Bluetooth }