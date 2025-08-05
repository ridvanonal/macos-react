import { IconSelector } from "@tabler/icons-react"

const SelectButton = () => {
  return (
    <div className="bg-os-foreground/[0.04] dark:bg-os-foreground/10 size-4 flex items-center justify-center rounded border border-os-foreground/[0.04] dark:border-transparent">
      <IconSelector/>
    </div>
  )
}

export { SelectButton }