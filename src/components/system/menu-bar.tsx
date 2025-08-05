import * as Menubar from '@radix-ui/react-menubar'
import { IconBrandAppleFilled, IconChevronRight, IconSearch, IconToggleRightFilled } from '@tabler/icons-react'
import { format } from 'date-fns'
import { cn } from '../../utils/cn'
import SiriIcon from '/assets/siri-icon.png'
import { useAppStore } from '../../stores/app'
import { apps } from '../../data/app'
import { menuBarItems, MenuItemActions } from '../../data/menu-bar-item'
import { Fragment } from 'react/jsx-runtime'
import { Shortcut } from './shortcut'
import { useMemo } from 'react'

const menuItemClassName = "px-3 py-0.5 rounded hover:bg-os-accent hover:text-white flex items-center justify-between gap-4 outline-none cursor-default"
const menuSeparatorClassName = "h-[0.5px] mx-3 my-1 bg-os-foreground/10"
const menuItemContentClassName = "bg-os-tone/75 backdrop-blur-3xl text-os-foreground shadow-[inset_0px_0px_0px_0.5px_hsl(var(--os-foreground)/.25),0px_2px_10px_-5px_hsl(var(--os-accessible)/.5)] p-1 rounded-lg text-sm"
const menuMainItemClassName = "px-3 hover:bg-os-foreground/10 focus-within:bg-os-foreground/10 rounded h-6 outline-none"
const shortcutClassName = "dark:opacity-25 opacity-50 min-w-12 text-right"

const MenuBar = () => {
  const { focused } = useAppStore()

  const app = useMemo(()=> apps.find(a => a.key == focused?.appKey),[focused])
  const parentApp = useMemo(()=> apps.find(a => a.key == app?.menuBarKey),[focused])
  const item = useMemo(()=>menuBarItems.find(ap => ap.appKey == (app?.menuBarKey ? app.menuBarKey : focused?.appKey)),[focused,app])

  return (
    <div className="flex items-center h-7 w-full backdrop-blur-3xl bg-os-tone/60 text-os-foreground p-0.5 font-semibold">
      <Menubar.Root className='flex items-center gap-0.5 text-sm'>
        <Menubar.Menu>
          <Menubar.Trigger className={menuMainItemClassName}>
            <IconBrandAppleFilled size={19} />
          </Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content sideOffset={4} className={menuItemContentClassName}>
              <Menubar.Group>
                <Menubar.Item className={menuItemClassName}>About This Mac</Menubar.Item>
              </Menubar.Group>
              <Menubar.Separator className={menuSeparatorClassName}/>
              <Menubar.Group>
                <Menubar.Item className={menuItemClassName}>System Settings...</Menubar.Item>
                <Menubar.Item className={menuItemClassName}>App Store...</Menubar.Item>
              </Menubar.Group>
              <Menubar.Separator className={menuSeparatorClassName}/>
              <Menubar.Group>
                <Menubar.Item className={cn(menuItemClassName,'pointer-events-none')}>
                  <span className='dark:opacity-25 opacity-50'>Recent Items</span>
                  <IconChevronRight className='dark:opacity-25 opacity-50' size={16}/>
                </Menubar.Item>
              </Menubar.Group>
              <Menubar.Separator className={menuSeparatorClassName}/>
              <Menubar.Group>
                <Menubar.Item className={menuItemClassName}>Force Quit...</Menubar.Item>
              </Menubar.Group>
              <Menubar.Separator className={menuSeparatorClassName}/>
              <Menubar.Group>
                <Menubar.Item className={menuItemClassName}>Sleep</Menubar.Item>
                <Menubar.Item className={menuItemClassName}>Restart...</Menubar.Item>
                <Menubar.Item className={menuItemClassName}>Shut Down...</Menubar.Item>
              </Menubar.Group>
              <Menubar.Separator className={menuSeparatorClassName}/>
              <Menubar.Group>
                <Menubar.Item className={menuItemClassName}>
                  Lock Screen
                  <Shortcut className={shortcutClassName} keys={['control','command','Q']}/>
                </Menubar.Item>
                <Menubar.Item className={menuItemClassName}>
                  Log Out Rıdvan Önal...
                  <Shortcut className={shortcutClassName} keys={['shift','command','Q']}/>
                </Menubar.Item>
              </Menubar.Group>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>
        {item?.appActions && <MenuItemBuilder isAppName actions={[
          {key:'app-actions',name:parentApp?.name || app?.name || 'App Name',subs:item.appActions}
        ]}/>}
        {item && <MenuItemBuilder actions={item.actions} />}
        <Menubar.Menu>
          <Menubar.Trigger className={menuMainItemClassName}>Help</Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content sideOffset={4} className={menuItemContentClassName}>
              <Menubar.Label className='mb-1'>
                <input onKeyDown={(e) => e.stopPropagation()} className='bg-os-foreground/5 w-full rounded min-w-72 border border-os-foreground/10 dark:shadow-[0px_1px_0px_0px_hsl(var(--os-foreground)/.3)] shadow-[0px_1px_0px_0px_hsl(var(--os-foreground)/.05)] placeholder:text-os-foreground/50 px-2.5 outline-none caret-os-accent' autoFocus placeholder='Search'/>
              </Menubar.Label>
              <Menubar.Item className={menuItemClassName}>Tips for Your Mac</Menubar.Item>
              <Menubar.Item className={menuItemClassName}>
                macOS Help
                <Shortcut className={shortcutClassName} keys={['command','?']}/>
              </Menubar.Item>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>
      </Menubar.Root>
      <div className='flex items-center gap-0.5 ml-auto'>
        <button className={cn('px-2 hover:bg-os-foreground/10 rounded h-6 ml-auto text-sm')}>
          <IconSearch size={18}/>
        </button>
        <button className={cn('px-2 hover:bg-os-foreground/10 rounded h-6 ml-auto text-sm')}>
          <IconToggleRightFilled size={20}/>
        </button>
        <button className={cn('px-2 hover:bg-os-foreground/10 rounded h-6 ml-auto text-sm')}>
          <img src={SiriIcon} className={cn('h-5')}/>
        </button>
        <button className={cn('px-3 hover:bg-os-foreground/10 rounded h-6 ml-auto text-sm font-semibold')}>
          {format(new Date(),'E d MMM h:mm a')}
        </button>
      </div>
    </div>
  )
}

const MenuItemBuilder = ({actions,isAppName}:{actions:MenuItemActions[],isAppName?:boolean}) => {
  return <>{actions.map((a,i) => (
    <Menubar.Menu key={i}>
      <Menubar.Trigger className={cn(menuMainItemClassName,{'font-bold':isAppName})}>{a.name}</Menubar.Trigger>
      <Menubar.Portal>
        <Menubar.Content sideOffset={4} className={menuItemContentClassName}>
          <Fragment key={`${a.key}-${i}`}>
            {a.subs?.map((s,ii) => (
              <Fragment key={ii}>
                {ii != 0 && <Menubar.Separator className={menuSeparatorClassName}/>}
                <Menubar.Group>
                  {s?.map((a,si) => <MenuItemNestedBuilder key={si} action={a}/>)} 
                </Menubar.Group>
              </Fragment>
            ))}
          </Fragment>
        </Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>
  ))}</>
}

const MenuItemNestedBuilder = ({action}:{action:MenuItemActions}) => {
  return <>
  {action.subs?.length ? 
    <Menubar.Sub>
      <Menubar.SubTrigger className={cn(menuItemClassName,{'pointer-events-none':action.disabled})}>
        <span className={cn({'dark:opacity-25 opacity-50':action.disabled})}>{action.name}</span>
        <IconChevronRight className={cn({'dark:opacity-25 opacity-50':action.disabled})} size={16}/>
      </Menubar.SubTrigger>
      <Menubar.Portal>
        <Menubar.SubContent className={menuItemContentClassName}>
          {action.subs.map((s,i) => (
            <Fragment key={i}>
              {i != 0 && <Menubar.Separator className={menuSeparatorClassName}/>}
              {s.map((sa,ii) => <MenuItemNestedBuilder key={ii} action={sa}/>)}
            </Fragment>
          ))}
        </Menubar.SubContent>
      </Menubar.Portal>
    </Menubar.Sub>
  : <Menubar.Item className={cn(menuItemClassName,{'pointer-events-none':action.disabled})}>
      <span className={cn({'dark:opacity-25 opacity-50':action.disabled})}>{action.name}</span>
      {action.shortcut && <Shortcut className={shortcutClassName} keys={action.shortcut}/>}
    </Menubar.Item>}
  </>
}

export { MenuBar }