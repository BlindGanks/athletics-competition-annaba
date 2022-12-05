import create from "zustand";

const useModalState = create((set) => ({
  isVisible: false,
  toggle: () => set((state) => ({ isVisible: !state.isVisible })),
}));

const useSideMenuState = create((set) => ({
  isVisible: false,
  toggle: () => set((state) => ({ isVisible: !state.isVisible })),
}));

const useUser = create((set) => ({
  user: null,
  setUser: (user) => set((state) => ({ user })),
}));

export { useSideMenuState, useModalState, useUser };
