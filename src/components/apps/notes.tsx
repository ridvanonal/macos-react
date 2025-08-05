import { IconBorderAll, IconCirclePlus, IconEdit, IconFolder, IconLayoutGrid, IconLayoutSidebar, IconLetterCase, IconLinkPlus, IconList, IconListCheck, IconLock, IconPhoto, IconScribble, IconSearch, IconShare2, IconTrash } from "@tabler/icons-react"
import { WindowFrameControl } from "../system/window-frame"
import { useSettingStore } from "../../stores/settings"
import { cn } from "../../utils/cn"

const Notes = () => {
  const { useSideBarSize  } = useSettingStore()

  return (
    <div className="flex h-full font-semibold">
      <div className="min-w-[195px] overflow-hidden flex flex-col h-full">
        <div className="flex p-5 h-14 min-h-14 items-center gap-3">
          <WindowFrameControl className=""/>
          <IconLayoutSidebar size={20} className="opacity-60"/>
        </div>
        <div className="flex flex-col gap-4">
          <NotesFolder name="Quick Notes" icon={IconScribble} fKey="qn"/>
          <div className="flex flex-col gap-0.5">
            <div className={cn("opacity-60 px-4 mb-1",useSideBarSize(['text-xxs','text-xs','text-sm']))}>iCloud</div>
            <NotesFolder name="All iClouds" fKey="aic"/>
            <NotesFolder name="Notes" fKey="notes"/>
            <NotesFolder name="Locked" fKey="locked"/>
          </div>
        </div>
        <div className="mt-auto p-4 flex items-center gap-1 opacity-70">
          <IconCirclePlus size={useSideBarSize([16,18,20])}/>
          <span className={cn(useSideBarSize(['text-xs','text-sm','text-base']))}>New Folder</span>
        </div>
      </div>
      <div className="col-span-9 flex flex-col min-h-full shadow-os-window-frame-content w-full overflow-hidden border-l border-l-os-foreground/10 dark:border-l-black">  
        <div className={cn("h-14 min-h-14 flex dark:bg-os-surface items-center py-3 bg-os-surface-accessible wfd")}>
          <div className="min-w-[214px] w-[214px] p-3 flex">
            <div className="flex opacity-60 gap-2">
              <IconList size={20}/>
              <IconLayoutGrid size={20}/>
            </div>
            <IconTrash className="ml-auto opacity-60" size={20}/>
          </div>
          <div className="h-full w-[1px] bg-os-foreground/15"></div>
          <div className="w-full flex justify-between items-center p-3">
            <IconEdit className="opacity-60" size={20}/>
            <div className="flex gap-3 items-center opacity-60">
              <IconLetterCase size={20}/>
              <IconListCheck size={20}/>
              <IconBorderAll size={20}/>
              <IconPhoto size={20}/>
            </div>
            <div className="flex gap-3 items-center opacity-60">
              <IconLinkPlus size={20}/>
              <IconLock size={20}/>
              <IconShare2 size={20}/>
              <IconSearch size={20}/>
            </div>
          </div>

        </div>
        <div className="flex h-full w-full">
          <div className="min-w-[215px] dark:bg-os-black/50 bg-white border-r border-r-os-foreground/15 dark:border-r-black">sa</div>
          <div className="dark:bg-os-surface-accessible bg-white w-full border-t border-t-os-foreground/15 dark:border-t-black">sa</div>
        </div>
      </div>
    </div>
  )
}

interface NotesFolderPorps{
  fKey:string
  name:string
  icon?:any
  count?:number
}

const NotesFolder = (props:NotesFolderPorps) => {
  const { useSideBarSize  } = useSettingStore()
  
  const Icon = props.icon || IconFolder
  return (
    <div className="flex items-center px-2 py-1 mx-2 gap-2 rounded-md cursor-pointer">
      <Icon className="text-os-accent" size={useSideBarSize([16,18,20])}/>
      <span className={cn(useSideBarSize(['text-xs','text-sm','text-base']))}>{props.name}</span>
      {props.count && <span className={cn("opacity-60 ml-auto",useSideBarSize(['text-xxs','text-xs','text-sm']))}>{props.count}</span>}
    </div>
  )
}

export { Notes }