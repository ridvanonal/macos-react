import { create } from "zustand"
import { AppKey } from "../data/app-key"
import { persist } from "zustand/middleware"

interface UseDockStore{
  appKeys:AppKey[],
  setAppKeys:(appKeys:AppKey[]) => void
}

const useDockStore = create(persist<UseDockStore>((set) => ({
  appKeys:[
    AppKey.Finder,
    AppKey.SystemSettings,
    AppKey.LaunchPad,
    AppKey.Maps,
    AppKey.Notes
  ],
  setAppKeys:(appKeys) => set({appKeys}),
}),{name:'dock'}))

export { useDockStore }