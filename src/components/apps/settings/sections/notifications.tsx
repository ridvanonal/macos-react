import * as Switch from "@radix-ui/react-switch"

const Notifications = () => {
  return (
    <div className="flex flex-col gap-6 mx-4 text-sm pb-3">
      <div>
        <span className="px-3 font-bold">Notification Center</span>
        <p className="opacity-60 px-3 text-xs">
          Notification Center shows your notifications in the top-right corner of your your screen.
          You can show and hide Notificaition Center by clicking the clock in the menu bar.
        </p>
        <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md mt-2">
          <div className="flex items-center gap-3 border-b border-b-os-foreground/5 pb-2">
            <span>Show previews</span>
          </div>
          <div className="flex items-center gap-3 border-b border-b-os-foreground/5 py-2">
            <span>Allow notifications when the display is sleeping</span>
            <Switch.Root disabled className="os-switch small ml-auto">
              <Switch.Thumb/>
            </Switch.Root>
          </div>
          <div className="flex items-center gap-3 border-b border-b-os-foreground/5 py-2">
            <span>Allow notifications when the screen is locked</span>
            <Switch.Root disabled defaultChecked={true} className="os-switch small ml-auto">
              <Switch.Thumb/>
            </Switch.Root>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <span>Allow notifications when mirroring or sharing the display</span>
            <Switch.Root disabled className="os-switch small ml-auto">
              <Switch.Thumb/>
            </Switch.Root>
          </div>
        </div>
      </div>
      <div>
        <span className="px-3 font-bold ">Application Notifications</span>
        <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md mt-2">
        </div>
      </div>
    </div>
  )
}

export { Notifications }