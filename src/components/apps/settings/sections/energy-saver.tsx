import * as Switch from "@radix-ui/react-switch"
import { Button } from "../components/button"
import { IconQuestionMark } from "@tabler/icons-react"

const EnergySaver = () => {
  return (
    <div className="flex flex-col gap-3 mx-4 text-sm">
      <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md mt-2">
        <div className="flex items-center gap-3 border-b border-b-os-foreground/5 pb-2">
          <span>Prevent automatic sleeping when the display is off</span>
          <Switch.Root disabled className="os-switch small ml-auto">
            <Switch.Thumb/>
          </Switch.Root>
        </div>
        <div className="flex items-center gap-3 border-b border-b-os-foreground/5 py-2">
          <span>Put hard disk to sleep when possible</span>
          <Switch.Root disabled defaultChecked={true} className="os-switch small ml-auto">
            <Switch.Thumb/>
          </Switch.Root>
        </div>
        <div className="flex items-center gap-3 border-b border-b-os-foreground/5 py-2">
          <div className="flex gap-2 items-start">
            <div>
              <span>Wake for network access</span>
              <p className="opacity-60 text-xs">
                While sleeping, your Mac can recieve incoming network traffic, such as iMessages and other iCloud updates, to keep your applications up to date.
              </p>
            </div>
            <Switch.Root className="os-switch small ml-auto">
              <Switch.Thumb/>
            </Switch.Root>
          </div>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <span>Start up automatically after a power failure</span>
          <Switch.Root disabled className="os-switch small ml-auto">
            <Switch.Thumb/>
          </Switch.Root>
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

export { EnergySaver }