import { create } from "zustand";

interface CardState {
  battleState: string;
  setBattleState: (battleState: string) => void;
}

export const useBattleStyleStore = create<CardState>()((set) => ({
  battleState: "",
  setBattleState: (battleState: string) => set({ battleState }),
}));
