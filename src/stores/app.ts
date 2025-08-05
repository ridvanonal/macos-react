import { create } from "zustand";
import { AppValue, mainAppValue } from "../data/app-key";


interface UseAppStore{
  focused?:AppValue | null
  setFocused:(value:AppValue | null) => void
}

const useAppStore = create<UseAppStore>((set) => ({
  focused:mainAppValue,
  setFocused: (value:AppValue | null) => set({focused:value})
}))

export { useAppStore }