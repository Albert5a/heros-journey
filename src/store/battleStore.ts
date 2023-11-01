import { create } from "zustand";

interface BattleState {
  herosBattle: any[];
  setHerosBattle: (herosBattle: any[]) => void;
}

export const useBattleStore = create<BattleState>()((set) => ({
  herosBattle: [],
  setHerosBattle: (herosBattle: any[]) => set({ herosBattle }),
}));
