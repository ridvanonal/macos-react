interface AppValue{
  id:string
  appKey:AppKey
}

enum AppKey{
  Finder = 'finder',
  SystemSettings = 'system-settings',
  AboutThisMac = 'about-this-mac',
  Trash = 'trash',
  Calculator = 'calculator',
  LaunchPad = 'lauch-pad',
  Maps = 'maps',
  MissionControl = 'mission-control',
  Music = 'music',
  Notes = 'notes',
  Photos = 'photos'
}

const mainAppValue:AppValue = {
  appKey:AppKey.Finder,
  id:'static'
}

export { AppKey, type AppValue, mainAppValue }