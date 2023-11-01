import { create } from "zustand";

interface CardState {
  selectedCards: any[];
  setSelectedCards: (selectedCards: any[]) => void;
}

export const useCardsStore = create<CardState>()((set) => ({
  selectedCards: [],
  setSelectedCards: (selectedCards: any[]) => set({ selectedCards }),
}));
