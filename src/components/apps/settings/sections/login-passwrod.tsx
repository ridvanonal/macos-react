import * as Switch from "@radix-ui/react-switch"
import { Button } from "../components/button"
import { IconDeviceWatch, IconQuestionMark } from "@tabler/icons-react"

const LoginPassword = () => {
  return (
    <div className="flex flex-col gap-3 mx-4 text-sm pb-3">
      <div>
        <span className="px-3 font-bold ">Password</span>
        <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md mt-2">
          <div className="flex items-center gap-3">
            <span>A login password has been set for this user.</span>
            <Button className="inline-flex items-center px-2 text-xs h-5 ml-auto rounded-md">
              Change...
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <span className="px-3 font-bold ">Apple Watch</span>
        <p className="opacity-60 px-3 text-xs">
          Use Apple Watch to unlock your applications and your mac.
        </p>
        <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md mt-2">
          <div className="flex items-center gap-3">
            <IconDeviceWatch size={18}/>
            <span>Apple Watch</span>
            <Switch.Root disabled className="os-switch small ml-auto">
              <Switch.Thumb/>
            </Switch.Root>
          </div>
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

export { LoginPassword }