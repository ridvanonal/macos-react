import { AppKey } from "./app-key"

interface MenuItemActions{
  key:string
  name:string
  disabled?:boolean
  shortcut?:string[]
  subs?:MenuItemActions[][]
}

interface MenuBarItem{
  appKey:AppKey
  appActions:MenuItemActions[][]
  actions:MenuItemActions[]
}

const menuBarItems:MenuBarItem[] = [
  {
    appKey:AppKey.Finder,
    appActions:[
      [{key:'about-finder',name:'About Finder'}],
      [{key:'settings',name:'Settings...',shortcut:['command','O']}],
      [{key:'empty-trash',name:'Empty Trash'}],
      [{key:'services',name:'Services'}],
      [
        {key:'hide-finder',name:'Hide Finder',disabled:true,shortcut:['command','H']},
        {key:'hide-others',name:'Hide Others',disabled:true,shortcut:['option','command','O']},
        {key:'show-all',name:'Show All',disabled:true}
      ],
    ],
    actions:[
      {
        key:'file',
        name:'File',
        subs:[
          [
            {key:'new-finder-window',name:'New Finder Window',shortcut:['command','N']},
            {key:'new-folder',name:'New Folder',shortcut:['shift','command','N']},
            {key:'new-folder-with-seleciton',name:'New Folder with Selection',disabled:true,shortcut:['control','command','N']},
            {key:'new-tab',name:'New Tab',disabled:true,shortcut:['command','T']},
            {key:'open',name:'Open',disabled:true,shortcut:['command','O']},
            {key:'open-with',name:'Open With',disabled:true,subs:[[{key:'',name:''}]]},
            {key:'close-window',name:'Close Window',disabled:true,shortcut:['command','W']},
          ],
          [
            {key:'get-info',name:'Get Info',shortcut:['command','I']},
            {key:'rename',name:'Rename',disabled:true},
            {key:'compress',name:'Compress',disabled:true},
            {key:'dublicate',name:'Duplicate',disabled:true,shortcut:['command','D']},
            {key:'make-alias',name:'Make Alias',disabled:true,shortcut:['control','command','A']},
            {key:'quick-look',name:'Quick Look',disabled:true,shortcut:['command','Y']},
            {key:'print',name:'Print',disabled:true,shortcut:['command','P']},
          ],
          [{key:'share',name:'Share...',disabled:true}],
          [
            {key:'show-original',name:'Show Original',disabled:true,shortcut:['command','R']},
            {key:'add-to-sidebar',name:'Add to Sidebar',disabled:true,shortcut:['control','command','T']},
          ],
          [
            {key:'move-to-trash',name:'Move to Trash',disabled:true},
            {key:'eject',name:'Eject',disabled:true,shortcut:['command','E']},
          ],
          [{key:'find',name:'Find',disabled:true, shortcut:['command','F']}],
        ]
      },
      {
        key:'edit',
        name:'Edit',
        subs:[
          [
            {key:'undo',name:'Undo',disabled:true,shortcut:['command','Z']},
            {key:'redo',name:'Redo',disabled:true,shortcut:['shift','command','Z']}
          ],
          [
            {key:'cut',name:'Cut',disabled:true,shortcut:['command','X']},
            {key:'copy',name:'Copy',disabled:true,shortcut:['command','C']},
            {key:'paste',name:'Paste',disabled:true,shortcut:['command','V']},
            {key:'select-all',name:'Select All',disabled:true,shortcut:['command','A']}
          ],
          [{key:'show-clipboard',name:'Show Clipboard',disabled:true}],
          [
            {
              key:'auto-fill',
              name:'Auto Fill', 
              disabled:true,
              subs:[
                [
                  {key:'contacts',name:'Contacts...'},
                  {key:'Passwords',name:'Passwords...'}
                ]
              ]
            },
            {key:'start-dictation',name:'Start Dictation',disabled:true,shortcut:['fn','D']},
            {key:'emoji-symbols',name:'Emoji & Symbols',shortcut:['fn','E']}
          ]
        ]
      },
      {
        key:'view',
        name:'View',
        subs:[
          [
            {key:'as-icons',name:'as Icons',disabled:true,shortcut:['command','1']},
            {key:'as-list',name:'as List',disabled:true,shortcut:['command','2']},
            {key:'as-columns',name:'as Columns',disabled:true,shortcut:['command','3']},
            {key:'as-gallery',name:'as Gallery',disabled:true,shortcut:['command','4']},
          ],
          [
            {key:'use-stacks',name:'Use Stacks',shortcut:['control','command','0']},
            {
              key:'hroup-stacks-by',
              name:'Group Stacks By',
              subs:[
                [{key:'none',name:'None'}],
                [
                  {key:'kind',name:'Kind',shortcut:['control','command','2']},
                  {key:'date-last-opened',name:'Date Last Opened',shortcut:['control','command','3']},
                  {key:'date-added',name:'Date Added',shortcut:['control','command','4']},
                  {key:'date-modified',name:'Date Modified',shortcut:['control','command','5']},
                  {key:'date-created',name:'Date Created'},
                  {key:'tags',name:'Tags',shortcut:['control','command','7']},
                ],
              ]
            },
            {key:'clean-up',name:'Clean Up',disabled:true},
            {key:'clean-up-by',name:'Clean Up By',disabled:true,subs:[[{key:'',name:''}]]},
          ],
          [
            {key:'hide-tab-bar',name:'Hide Tab Bar',disabled:true,shortcut:['shift','command','T']},
            {key:'show-all-tabs',name:'Show All Tabs',disabled:true,shortcut:['shift','command',',']},
          ],
          [
            {key:'hide-sidebar',name:'Hide Sidebar',disabled:true,shortcut:['control','command','S']},
            {key:'hide-preview',name:'Hide Preview',disabled:true,shortcut:['shift','command','P']},
          ],
          [
            {key:'hide-toolbar',name:'Hide Toolbar',disabled:true,shortcut:['option','command','T']},
            {key:'hide-path-bar',name:'Hide Path Bar',disabled:true,shortcut:['option','command','P']},
            {key:'hide-status-bar',name:'Hide Status Bar',disabled:true,shortcut:['command','*']},
          ],
          [{key:'costumize-toolbar',name:'Costumize Toolbar...',disabled:true}],
          [
            {key:'show-view-options',name:'Show View Options',shortcut:['command','J']},
            {key:'show-preview-options',name:'Show Preview Options',disabled:true}
          ],
          [{key:'enter-full-screen',name:'Enter Full Screen',disabled:true,shortcut:['fn','F']}]
        ]
      },
      {
        key:'go',
        name:'Go',
        subs:[
          [
            {key:'back',name:'Back',shortcut:['command','G'],disabled:true},
            {key:'forward',name:'Forward',shortcut:['command','U'],disabled:true},
            {key:'enclosing-folder',name:'Enclosing Forward'},
          ],
          [{key:'recent-folders',name:'Recent Folders',disabled:true,subs:[[{key:'',name:''}]]}],
          [
            {key:'go-to-folder',name:'Go to Folder...',shortcut:['shift','command','G']},
            {key:'connect-to-server',name:'Connect to Server',shortcut:['command','K']}
          ]
        ]
      },
      {
        key:'window',
        name:'Window',
        subs:[
          [
            {key:'minimize',name:'Minimize',shortcut:['command','M'],disabled:true},
            {key:'zoom',name:'Zoom',disabled:true},
            {key:'move-window-to-left-side-of-screen',name:'Move Window to Left Side of Screen',disabled:true},
            {key:'move-window-to-right-side-of-screen',name:'Move Window to Right Side of Screen',disabled:true},
            {key:'replace-tiled-window',name:'Replace Tiled Window',disabled:true},
          ],
          [{key:'remove-window-from-set',name:'Remove Window from Set',disabled:true}],
          [
            {key:'move-to-ipad',name:'Move To iPad',disabled:true},
            {key:'cycle-through-windows',name:'Cycle Through Windows',disabled:true,shortcut:['command','<']},
            {key:'show-progree-window',name:'Show Progress Window',disabled:true},
          ],
          [{key:'bring-all-to-front',name:'Bring All to Front'}],
        ]
      }
    ]
  },
  {
    appKey:AppKey.SystemSettings,
    appActions:[
      [{key:'about-system-settings',name:'About System Settings'}],
      [{key:'services',name:'Services',disabled:true,subs:[[{key:'',name:''}]]}],
      [
        {key:'hide-system-settings',name:'Hide System Settings',disabled:true,shortcut:['command','H']},
        {key:'hide-others',name:'Hide Others',disabled:true,shortcut:['option','command','H']},
        {key:'show-all',name:'Show All',disabled:true}
      ],
      [{key:'quit-system-settings',name:'Quit System Settings',shortcut:['command','Q']}],
    ],
    actions:[
      {
        key:'file',
        name:'File',
        subs:[
          [{key:'close',name:'Close',shortcut:['command','W']}]
        ]
      },
      {
        key:'edit',
        name:'Edit',
        subs: [
          [
            {key:'undo',name:'Undo',disabled:true,shortcut:['command','Z']},
            {key:'redo',name:'Redo',disabled:true,shortcut:['shift','command','Z']}
          ],
          [
            {key:'cut',name:'Cut',disabled:true,shortcut:['command','X']},
            {key:'copy',name:'Copy',disabled:true,shortcut:['command','C']},
            {key:'paste',name:'Paste',disabled:true,shortcut:['command','V']},
            {key:'select-all',name:'Select All',disabled:true,shortcut:['command','A']}
          ],
          [{key:'show-clipboard',name:'Show Clipboard',disabled:true}],
          [
            {
              key:'auto-fill',
              name:'Auto Fill', 
              disabled:true,
              subs:[
                [
                  {key:'contacts',name:'Contacts...'},
                  {key:'Passwords',name:'Passwords...'}
                ]
              ]
            },
            {key:'start-dictation',name:'Start Dictation',disabled:true,shortcut:['fn','D']},
            {key:'emoji-symbols',name:'Emoji & Symbols',shortcut:['fn','E']}
          ]
        ]
      },
      {
        key:'view',
        name:'View',
        subs:[
          [
            {key:'back',name:'Back',shortcut:['command','G'],disabled:true},
            {key:'forward',name:'Forward',shortcut:['command','U'],disabled:true},
            {key:'serach',name:'Search',shortcut:['command','F']},
          ],
        ]
      },
      {
        key:'window',
        name:'Window',
        subs:[
          [
            {key:'minimize',name:'Minimize',shortcut:['command','M'],disabled:true},
            {key:'zoom',name:'Zoom',disabled:true},
            {key:'move-window-to-left-side-of-screen',name:'Move Window to Left Side of Screen',disabled:true},
            {key:'move-window-to-right-side-of-screen',name:'Move Window to Right Side of Screen',disabled:true},
            {key:'replace-tiled-window',name:'Replace Tiled Window',disabled:true},
          ],
          [{key:'remove-window-from-set',name:'Remove Window from Set',disabled:true}],
          [
            {key:'move-to-ipad',name:'Move To iPad',disabled:true},
            {key:'cycle-through-windows',name:'Cycle Through Windows',disabled:true,shortcut:['command','<']},
            {key:'show-progree-window',name:'Show Progress Window',disabled:true},
          ],
          [{key:'bring-all-to-front',name:'Bring All to Front'}],
        ]
      }
    ]
  }
]

export { menuBarItems, type MenuBarItem, type MenuItemActions }