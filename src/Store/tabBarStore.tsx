import { create } from "zustand";

interface TabBarState {
  visible: boolean;
  setVisible: (bool: boolean) => void;
}

const useTabBarStore = create<TabBarState>((set) => ({
  visible: false,
  setVisible: (bool) => {
    set({ visible: bool });
  },
}));

export default useTabBarStore;
