import { create } from "zustand";

interface State {
  count: number;
}

interface Action {
  increase: () => void;
  decrease: () => void;
}

export const useStore = create<State & Action>((set) => ({
  count: 0,
  increase: () => set((prevState) => ({ count: prevState.count + 1 })),
  decrease: () => set((prevState) => ({ count: prevState.count - 1 })),
}));
