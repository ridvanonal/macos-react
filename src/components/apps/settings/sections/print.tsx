import * as Select from '@radix-ui/react-select'
import { SelectButton } from '../../../system/select-button'
import { Button } from '../components/button'
import { IconQuestionMark } from '@tabler/icons-react'

const Print = () => {
  return (
    <div className="flex flex-col gap-3 mx-4 text-sm">
      <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md">
        <div className="flex items-start justify-between border-b border-b-os-foreground/5 pb-2">
          <span>Default printer</span>
          <Select.Root value='last-printer'>
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
                  <Select.Item value='last-printer'>
                    <Select.ItemText>Last Printer Used</Select.ItemText>
                  </Select.Item>
                </Select.Viewport>
                <Select.ScrollDownButton/>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>
        <div className="flex items-start justify-between pt-2">
          <span>Default paper size</span>
          <Select.Root value='a4'>
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
                  <Select.Item value='a4'>
                    <Select.ItemText>A4</Select.ItemText>
                  </Select.Item>
                </Select.Viewport>
                <Select.ScrollDownButton/>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>
      </div>
      <div className="border border-os-foreground/5 bg-os-foreground/[.01] dark:bg-os-foreground/[.03] p-2.5 rounded-md text-center">
        <span className='opacity-60'>No Printers</span>
      </div>
      <div className="flex gap-2 justify-end">
        <Button className="inline-flex items-center px-2 text-xs h-5 rounded-md">
          Add Printer, Scanner, or Fax...
        </Button>
        <Button className="inline-flex items-center justify-center size-5 rounded-full">
          <IconQuestionMark size={16}/>
        </Button>
      </div>
    </div>
  )
}

export { Print }