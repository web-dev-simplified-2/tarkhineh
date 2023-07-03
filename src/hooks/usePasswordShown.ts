import { create } from "zustand";

interface PasswordShownStore {
  isShown: boolean;
  onShown: () => void;
  onHide: () => void;
}

const usePasswordShown = create<PasswordShownStore>((set) => ({
  isShown: false,
  onShown: () => set({ isShown: true }),
  onHide: () => set({ isShown: false }),
}));

export default usePasswordShown;
